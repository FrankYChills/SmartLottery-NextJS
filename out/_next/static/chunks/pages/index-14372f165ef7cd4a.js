(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(76782)}])},96301:function(e,t,n){"use strict";let a=n(37917),s=n(63021);e.exports={contractAddresses:a,abi:s}},76782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(85893),s=n(9008),i=n.n(s),o=n(7160),r=n.n(o),u=n(41942);let p=()=>(0,a.jsxs)("nav",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:" Decentralized Lottery"}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(u.cg,{moralisAuth:!1})})]});var l=n(83078),c=n(96301),y=n(67294),d=n(35553);let f=()=>{let{chainId:e,isWeb3Enabled:t}=(0,l.Nr)(),n=""+parseInt(e),s=(0,u.aa)(),[i,o]=(0,y.useState)("0"),[r,p]=(0,y.useState)("0"),[f,m]=(0,y.useState)("0"),b=n in c.contractAddresses?c.contractAddresses[n][0]:null;console.log("C Address: ".concat(b));let{runContractFunction:x,isLoading:g,isFetching:_}=(0,l.JX)({abi:c.abi,contractAddress:b,functionName:"enterRaffle",params:{},msgValue:i}),{runContractFunction:h}=(0,l.JX)({abi:c.abi,contractAddress:b,functionName:"getEntranceFee",params:{}}),{runContractFunction:N}=(0,l.JX)({abi:c.abi,contractAddress:b,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:v}=(0,l.JX)({abi:c.abi,contractAddress:b,functionName:"getRecentWinner",params:{}});async function w(){let e=(await h()).toString(),t=(await N()).toString(),n=(await v()).toString();o(e),p(t),m(n)}(0,y.useEffect)(()=>{t&&w()},[]);let j=async e=>{await e.wait(1),C(e),w()},C=e=>{s({type:"info",message:"Transcation Completed",title:"Tx Notification",position:"topR",icon:"bell"})};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"py-4 px-8 font-bold text-xl",children:"Deposit Some ETHs To get Started"}),b?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h4",{className:"py-4 px-8 font-bold text-xl",children:["Entry Fee : ",d.bM(i,"ether")," ETH"," "]}),(0,a.jsx)("button",{className:"bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-auto",style:{marginLeft:"25px"},async onClick(){x({onSuccess:j,onError:e=>console.log(e)})},disabled:g||_,children:g||_?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):"Enter Raffle"}),(0,a.jsxs)("h4",{className:"py-4 px-8 font-bold text-xl",children:["Current Players : ",r]}),(0,a.jsxs)("h4",{className:"py-4 px-8 font-bold text-xl",children:["Recent Winner : ",f]})]}):(0,a.jsx)("h4",{className:"py-4 px-8 font-bold text-xl",children:"No Contract detected (Please Connect your Wallet)"})]})};var m=n(41664),b=n.n(m);let x=()=>(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("meta",{name:"description",content:"Smart Contract Lottery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(p,{}),(0,a.jsx)(f,{}),(0,a.jsx)("button",{style:{marginTop:"15%"},className:"bg-purple-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded ml-5",children:(0,a.jsx)(b(),{href:"/about",children:"About"})})]});var g=x},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(83121)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint256","name":"fee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__NotEnoughETH","inputs":[]},{"type":"error","name":"Raffle__NotOpen","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"function","name":"Country","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"checkUpkeep","constant":false,"payable":false,"gas":1100000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"gas":1100000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLastTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getSubscriptionId","constant":true,"stateMutability":"view","payable":false,"gas":1100000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":1100000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":1100000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"5":["0x84F2be16D670B56c5a6bd0F87eD0C9Ae3231dc22"],"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);