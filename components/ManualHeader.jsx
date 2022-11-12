import { useMoralis } from "react-moralis";
import { useEffect } from "react";
const ManualHeader = () => {
  // useMoralis is a kind of react Hook
  // hooks continiously look for any change in the state
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();
  // enableWeb3 connects to wallet in browser

  useEffect(() => {
    if (isWeb3Enabled) {
      // also when we refresh the page account becomes null so we need to connect that again but automatically
      // isWeb3Enabled remains true after connecting to wallet until we refresh the page and isWeb3enabled becomes false
      console.log("Web3 already Enabled");
      return;
    }
    if (typeof window != "undefined") {
      // basically when we refreh useEffect is called and checks if we have already logged in /saved key value in window local storage and if yes it auto connects to the wallet
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, []);

  // to check if someone witched acoount or disconnected we need to use Moralis
  // switching accounts refreshes the page
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to : ${account}`);
      // check if someone just disconnected
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        // disconnects wallet from our website
        console.log("No Account connected");
      }
    });
  }, []);

  return (
    <div>
      <h1>Moralis - Integrating Blockchain to DAPPS</h1>
      <br />
      {/* check account/wallet is connected or not and do accordingly */}
      {account ? (
        <div>
          <h2>Wallet Connected</h2>
          <h3>
            Account Connected: {account.slice(0, 5)}....
            {account.slice(account.length - 4)}
          </h3>
        </div>
      ) : (
        <button
          disabled={isWeb3EnableLoading}
          onClick={async () => {
            await enableWeb3();
            // enableweb3 connects wallet to our website
            if (typeof window != "undefined") {
              // after connecting to wallet for first time save key value to local storage
              window.localStorage.setItem("connected", "metamask-connected");
            }
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ManualHeader;
