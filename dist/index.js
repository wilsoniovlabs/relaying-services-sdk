(()=>{"use strict";var e={839:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ERC20Token=void 0;var r=function(){function e(){}return e.getAbi=function(){return[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"supply",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"multiplier",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"decimals",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"transferFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner_address",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"num",type:"uint256"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"num",type:"uint256"},{name:"target",type:"address"}],name:"mintFor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"initial_supply",type:"uint256"},{name:"decimal_units",type:"uint8"},{name:"token_name",type:"string"},{name:"token_symbol",type:"string"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_to",type:"address"},{indexed:!0,name:"_num",type:"uint256"}],name:"Minted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}]},e}();t.ERC20Token=r},601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_NUMBER=t.ZERO_NUMBER=t.NOT_ADDRESS=t.ZERO_ADDRESS=void 0,t.ZERO_ADDRESS="0x0000000000000000000000000000000000000000",t.NOT_ADDRESS="0x",t.ZERO_NUMBER="0",t.ONE_NUMBER="1"},104:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Contracts=void 0;var a=r(593),n=r(820),s=function(){function e(e,t,r){this.web3Instance=e,r=null!=r?r:{};var n=(0,a.getContractAddresses)(t);if(!n)throw new Error("RelayingServicesSDK contracts not find for the specified network id.");this.addresses=(0,a.mergeConfiguration)(r,n),this.initialize()}return e.prototype.initialize=function(){try{this.smartWalletRelayVerifier=(0,a.getContract)(this.web3Instance,n.RelayVerifier.abi,this.addresses.smartWalletRelayVerifier),this.smartWalletDeployVerifier=(0,a.getContract)(this.web3Instance,n.DeployVerifier.abi,this.addresses.smartWalletDeployVerifier),console.debug("Contracts initialized correctly")}catch(e){throw new Error("Contracts fail to initialize: "+e.message)}},e.prototype.getSmartWalletFactory=function(){return this.smartWalletFactory||(this.smartWalletFactory=(0,a.getContract)(this.web3Instance,n.SmartWalletFactory.abi,this.addresses.smartWalletFactory)),this.smartWalletFactory},e.prototype.getSmartWalletRelayVerifier=function(){return this.smartWalletRelayVerifier||(this.smartWalletRelayVerifier=(0,a.getContract)(this.web3Instance,n.RelayVerifier.abi,this.addresses.smartWalletRelayVerifier)),this.smartWalletRelayVerifier},e.prototype.getSmartWalletDeployVerifier=function(){return this.smartWalletDeployVerifier||(this.smartWalletDeployVerifier=(0,a.getContract)(this.web3Instance,n.DeployVerifier.abi,this.addresses.smartWalletDeployVerifier)),this.smartWalletDeployVerifier},e}();t.Contracts=s},231:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultRelayingServices=void 0;var a=r(752),n=r(670),s=(0,a.__importDefault)(r(519)),i=r(820),o=r(593),l=r(839),c=r(601),u=r(104),d=r(76),y=function(){function e(e){var t=e.rskHost,r=e.account,a=e.web3Provider,n=e.web3Instance;this.txId=777,this.web3Instance=n||(a?new s.default(a):new s.default(t)),this.account=r}return e.prototype.configure=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){var t,r,s,i,l,c,u,d;return(0,a.__generator)(this,(function(y){switch(y.label){case 0:return y.trys.push([0,3,,4]),r=o.mergeConfiguration,s=[e],d={onlyPreferredRelays:!0,preferredRelays:["http://localhost:8090"],gasPriceFactorPercent:0,relayLookupWindowBlocks:1e5},[4,this.web3Instance.eth.getChainId()];case 1:return t=r.apply(void 0,s.concat([(d.chainId=y.sent(),d.relayVerifierAddress=this.contracts.addresses.smartWalletRelayVerifier,d.deployVerifierAddress=this.contracts.addresses.smartWalletDeployVerifier,d.smartWalletFactoryAddress=this.contracts.addresses.smartWalletFactory,d)])),i=t.relayHubAddress,l=(0,a.__rest)(t,["relayHubAddress"]),[4,(0,n.resolveConfiguration)(this.web3Instance.currentProvider,l)];case 2:return(c=y.sent()).relayHubAddress=null!=i?i:this.contracts.addresses.relayHub,[2,c];case 3:return u=y.sent(),console.log(u),[3,4];case 4:return[2]}}))}))},e.prototype.initialize=function(e,t){return(0,a.__awaiter)(this,void 0,void 0,(function(){var r,s,i,o,l,c,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,5,,6]),r=this,s=u.Contracts.bind,i=[void 0,this.web3Instance],[4,this.web3Instance.eth.getChainId()];case 1:return r.contracts=new(s.apply(u.Contracts,i.concat([a.sent(),t]))),o=this,[4,this.web3Instance.eth.getAccounts()];case 2:return o.developmentAccounts=a.sent(),[4,this.configure(e)];case 3:return l=a.sent(),[4,(c=new n.RelayProvider(this.web3Instance.currentProvider,l)).relayClient._init()];case 4:return a.sent(),this.account&&c.addAccount({address:this.account.address,privateKey:Buffer.from(this.account.privateKey.replaceAll("0x",""),"hex")}),this.web3Instance.setProvider(c),this.relayProvider=c,console.debug("RelayingServicesSDK initialized correctly"),[3,6];case 5:return d=a.sent(),console.error("RelayingServicesSDK fail to initialize",d),[3,6];case 6:return[2]}}))}))},e.prototype.allowToken=function(e,t){return(0,a.__awaiter)(this,void 0,void 0,(function(){var r,n,s,l,c,u;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return console.debug("allowToken Params",{tokenAddress:e,account:t}),t||(t=this.getAccountAddress()),[4,new this.web3Instance.eth.Contract(i.DeployVerifier.abi,this.contracts.addresses.smartWalletDeployVerifier)];case 1:return r=a.sent(),[4,new this.web3Instance.eth.Contract(i.RelayVerifier.abi,this.contracts.addresses.smartWalletRelayVerifier)];case 2:n=a.sent(),a.label=3;case 3:return a.trys.push([3,5,,7]),s=r.methods.acceptToken(e),console.log(s),[4,s.send({from:t})];case 4:return a.sent(),[3,7];case 5:return l=a.sent(),console.log("Error"),console.log(l),[4,(0,o.getRevertReason)(l.receipt.transactionHash)];case 6:throw u=a.sent(),console.error("Error adding token with address "+e+" to allowed tokens on smart wallet deploy verifier",u),l;case 7:return a.trys.push([7,9,,11]),[4,n.methods.acceptToken(e).send({from:t})];case 8:return a.sent(),[3,11];case 9:return c=a.sent(),console.log(c),[4,(0,o.getRevertReason)(c.receipt.transactionHash)];case 10:throw u=a.sent(),console.error("Error adding token with address "+e+" to allowed tokens on smart wallet relay verifier",u),c;case 11:return console.debug("Tokens allowed successfully!"),[2,e]}}))}))},e.prototype.isAllowedToken=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){var t,r,n,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return console.debug("isAllowedToken Params",{tokenAddress:e}),t=this.contracts.getSmartWalletRelayVerifier(),r=this.contracts.getSmartWalletDeployVerifier(),[4,t.methods.acceptsToken(e).call()];case 1:return n=a.sent(),[4,r.methods.acceptsToken(e).call()];case 2:return s=a.sent(),[2,n&&s]}}))}))},e.prototype.getAllowedTokens=function(){return(0,a.__awaiter)(this,void 0,void 0,(function(){var e,t,r,n,s;return(0,a.__generator)(this,(function(i){switch(i.label){case 0:return e=this.contracts.getSmartWalletRelayVerifier(),t=this.contracts.getSmartWalletDeployVerifier(),[4,e.methods.getAcceptedTokens().call()];case 1:return r=i.sent(),[4,t.methods.getAcceptedTokens().call()];case 2:return n=i.sent(),s=new Set((0,a.__spreadArray)((0,a.__spreadArray)([],(0,a.__read)(r),!1),(0,a.__read)(n),!1)),[2,(0,a.__spreadArray)([],(0,a.__read)(s),!1)]}}))}))},e.prototype.claim=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){throw console.debug("claim Params",{commitmentReceipt:e}),new Error("NOT IMPLEMENTED: this will be available with arbiter integration.")}))}))},e.prototype.deploySmartWallet=function(e,t,r){return(0,a.__awaiter)(this,void 0,void 0,(function(){var n,s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return console.debug("deploySmartWallet Params",{smartWallet:e,tokenAddress:t,tokenAmount:r}),r=null!=r?r:0,console.debug("Checking if the wallet already exists"),[4,(0,o.addressHasCode)(this.web3Instance,e.address)];case 1:return a.sent()?[3,5]:t?[4,(0,o.getContract)(this.web3Instance,l.ERC20Token.getAbi(),t).methods.balanceOf(e.address).call()]:[3,3];case 2:a.sent()<=0&&console.warn("Smart Wallet doesn't have funds so this will be a subsidized deploy."),a.label=3;case 3:return console.debug("Deploying smart wallet for address",e.address),n={from:this.getAccountAddress(),to:c.ZERO_ADDRESS,callVerifier:this.contracts.addresses.smartWalletDeployVerifier,callForwarder:this.contracts.addresses.smartWalletFactory,tokenContract:t,tokenAmount:r.toString(),data:"0x",index:e.index.toString(),recoverer:c.ZERO_ADDRESS,isSmartWalletDeploy:!0,onlyPreferredRelays:!0,smartWalletAddress:e.address},[4,this.relayProvider.deploySmartWallet(n)];case 4:return s=a.sent(),console.debug("Smart wallet successfully deployed",s),e.deployTransaction=s,e.deployed=!0,e.tokenAddress=t,[2,e];case 5:throw new Error("Smart Wallet already deployed")}}))}))},e.prototype.generateSmartWallet=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){var t,r;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return console.debug("generateSmartWallet Params",{smartWalletIndex:e}),console.debug("Generating computed address for smart wallet"),[4,this.contracts.getSmartWalletFactory().methods.getSmartWalletAddress(this.getAccountAddress(),c.ZERO_ADDRESS,e).call()];case 1:return t=a.sent(),console.debug("Checking if the wallet already exists"),[4,(0,o.addressHasCode)(this.web3Instance,t)];case 2:return r=a.sent(),[2,{address:t,index:e,deployed:r}]}}))}))},e.prototype.isSmartWalletDeployed=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return console.debug("isSmartWalletDeployed Params",{smartWalletAddress:e}),[4,(0,o.addressHasCode)(this.web3Instance,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.relayTransaction=function(e,t,r){return(0,a.__awaiter)(this,void 0,void 0,(function(){var n,s,i,l,c,u=this;return(0,a.__generator)(this,(function(d){switch(d.label){case 0:return console.debug("relayTransaction Params",{unsignedTx:e,smartWallet:t,tokenAmount:r}),console.debug("Checking if the wallet exists"),[4,(0,o.addressHasCode)(this.web3Instance,t.address)];case 1:return d.sent()?(l={jsonrpc:"2.0",id:++this.txId,method:"eth_sendTransaction"},c={from:this.getAccountAddress(),to:t.tokenAddress,value:"0",relayHub:this.contracts.addresses.relayHub,callVerifier:this.contracts.addresses.smartWalletRelayVerifier,callForwarder:t.address,data:e.data,tokenContract:t.tokenAddress},[4,this.web3Instance.utils.toWei(r.toString())]):[3,4];case 2:return l.params=[(c.tokenAmount=d.sent(),c.onlyPreferredRelays=!0,c)],n=l,[4,new Promise((function(e,t){u.relayProvider._ethSendTransaction(n,(function(r,n){return(0,a.__awaiter)(u,void 0,void 0,(function(){var s;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return r&&t(r),[4,web3.eth.getTransactionReceipt(n.result)];case 1:return s=a.sent(),e(s),[2]}}))}))}))}))];case 3:if(!(s=d.sent()).status)throw i="Error relaying transaction",console.debug(i,s),new Error(i);return[2,s];case 4:throw new Error("Smart Wallet is not deployed or the address "+t.address+" is not a smart wallet.")}}))}))},e.prototype.estimateMaxPossibleRelayGas=function(e,t){return(0,a.__awaiter)(this,void 0,void 0,(function(){var r,n,s,i,o;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return console.debug("estimateMaxPossibleRelayGas Params",{smartWallet:e}),n=d.toBN,[4,this.relayProvider.relayClient._calculateGasPrice()];case 1:return r=n.apply(void 0,[a.sent()]),[4,this.web3Instance.utils.toWei("1")];case 2:return s=a.sent(),i={from:this.getAccountAddress(),to:c.ZERO_ADDRESS.toString(),value:"0",relayHub:this.contracts.addresses.relayHub,callVerifier:this.contracts.addresses.smartWalletRelayVerifier,callForwarder:this.contracts.addresses.smartWalletFactory,data:"0x",index:e.index.toString(),tokenContract:this.contracts.addresses.testToken,tokenAmount:s,onlyPreferredRelays:!0,isSmartWalletDeploy:!0,smartWalletAddress:e.address,recoverer:c.ZERO_ADDRESS.toString()},[4,this.relayProvider.relayClient.estimateMaxPossibleRelayGas(i,t)];case 3:return o=a.sent(),[2,(0,d.toBN)(o).mul(r).toString()]}}))}))},e.prototype.getAccountAddress=function(){return this.account?this.account.address:this.developmentAccounts[0]},e}();t.DefaultRelayingServices=y},593:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRevertReason=t.mergeConfiguration=t.getContractAddresses=t.getContract=t.addressHasCode=t.getAbiItem=void 0;var a=r(752),n=r(820);t.getAbiItem=function(e,t){var r=e.filter((function(e){return e.name===t}));if(r.length>0)return r[0];throw new Error("Item "+t+" doesn't exists on contract abi")},t.addressHasCode=function(e,t){return(0,a.__awaiter)(this,void 0,void 0,(function(){var r;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,e.eth.getCode(t)];case 1:return[2,"0x00"!==(r=a.sent())&&"0x"!==r]}}))}))},t.getContract=function(e,t,r){return new e.eth.Contract(t,r)},t.getContractAddresses=function(e){return n.ContractAddresses[e]},t.mergeConfiguration=function(e,t){var r={};return Object.keys(t).forEach((function(e){return r[e]=t[e]})),Object.keys(e).forEach((function(t){return r[t]=e[t]})),r},t.getRevertReason=function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){var t,r,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return[4,web3.eth.getTransaction(e)];case 1:t=a.sent(),r=t.blockNumber,a.label=2;case 2:return a.trys.push([2,4,,5]),delete t.hash,delete t.blockHash,delete t.blockNumber,delete t.transactionIndex,delete t.v,delete t.r,delete t.s,[4,web3.eth.call(t,r)];case 3:return(n=(n=a.sent()).startsWith("0x")?n:"0x"+n)&&n.substr(138)?[2,web3.utils.toAscii(n.substr(138))]:[2,"Cannot get reason - No return value"];case 4:return[2,a.sent()];case 5:return[2]}}))}))}},670:e=>{e.exports=require("@rsksmart/rif-relay-client")},820:e=>{e.exports=require("@rsksmart/rif-relay-contracts")},752:e=>{e.exports=require("tslib")},519:e=>{e.exports=require("web3")},76:e=>{e.exports=require("web3-utils")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}var a={};(()=>{var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultRelayingServices=void 0;var t=r(231);Object.defineProperty(e,"DefaultRelayingServices",{enumerable:!0,get:function(){return t.DefaultRelayingServices}})})(),module.exports=a})();