import { useWeb3Contract } from "react-moralis";
import { contractAddresses, abi } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";
const LotteryEntrance = () => {
  // chainId is the metamask network id here(both frontend and Backend should be on same network)
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = "" + parseInt(chainIdHex);

  // console.log(`chainid:${chainId}`);
  // // chainId = chainId.toString();
  // console.log(`typeofchainId:${typeof chainId}`);
  // console.log(`AC address:${contractAddresses["31337"]}`);

  const dispatch = useNotification();

  const [entranceFee, setEntranceFee] = useState("0");
  const [numPlayers, setNumPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");

  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  // provide interface to backend function via frontend function
  console.log(`C Address: ${raffleAddress}`);
  const {
    runContractFunction: enterRaffle,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    params: {},
    //msgValue is the value of transaction to send
    msgValue: entranceFee,
  });
  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });
  const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  });
  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRecentWinner",
    params: {},
  });
  useEffect(() => {
    if (isWeb3Enabled) {
      //read the contract

      updateUI();
    }
  }, []);
  async function updateUI() {
    const entranceFeeFC = (await getEntranceFee()).toString();
    const numPlayersFC = (await getNumberOfPlayers()).toString();
    const recentWinnerFC = (await getRecentWinner()).toString();

    setEntranceFee(entranceFeeFC);
    setNumPlayers(numPlayersFC);
    setRecentWinner(recentWinnerFC);
  }
  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleNewNotifications(tx);
    updateUI();
  };
  const handleNewNotifications = (tx) => {
    dispatch({
      type: "info",
      message: "Transcation Completed",
      title: "Tx Notification",
      position: "topR",
      icon: "bell",
    });
  };
  return (
    <div>
      <h3 className="py-4 px-8 font-bold text-xl">
        Deposit Some ETHs To get Started
      </h3>
      {raffleAddress ? (
        <>
          <h4 className="py-4 px-8 font-bold text-xl">
            Entry Fee : {ethers.utils.formatUnits(entranceFee, "ether")} ETH{" "}
          </h4>
          <button
            className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-auto"
            style={{
              marginLeft: "25px",
            }}
            onClick={async () => {
              enterRaffle({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
              });
            }}
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? (
              <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
            ) : (
              "Enter Raffle"
            )}
          </button>
          <h4 className="py-4 px-8 font-bold text-xl">
            Current Players : {numPlayers}
          </h4>
          <h4 className="py-4 px-8 font-bold text-xl">
            Recent Winner : {recentWinner}
          </h4>
        </>
      ) : (
        <h4 className="py-4 px-8 font-bold text-xl">
          No Contract detected (Please Connect your Wallet)
        </h4>
      )}
    </div>
  );
};

export default LotteryEntrance;
