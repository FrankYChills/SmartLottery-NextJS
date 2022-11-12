"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{54877:function(e,r,t){t.r(r),t.d(r,{PhantomInjectedProvider:function(){return K},SlopeInjectedProxyProvider:function(){return q},SolanaPrivateKeyProvider:function(){return F},SolanaWallet:function(){return G},SolflareInjectedProvider:function(){return N},SolletInjectedProvider:function(){return B},TorusInjectedProvider:function(){return H}});var n,a=t(15671),s=t(43144),i=t(32531),c=t(82963),o=t(61120),u=t(15861),p=t(4942),f=t(64687),h=t.n(f),l=t(22782),d=t(95844),v=t(16843),g=t(68531),m=t(77191),y=t.n(m),w=t(79826),x=t(59917),b=t(50108),k=t.n(b),P=t(48764).Buffer;function Z(e){var r=e.chainId;return(0,d.UZ)([function(e,t,n,a){return"solana_chainId"===e.method?(t.result=r,a()):n()},function(r,t,n,a){return"solana_provider_config"===r.method?(t.result=e,a()):n()}])}function O(e,r){var t;return(0,d.Pk)((t=(0,u.Z)(h().mark(function t(n,a,s){var i;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.method!==e)){t.next=3;break}return t.abrupt("return",s());case 3:if(r){t.next=5;break}throw Error("WalletMiddleware - ".concat(e," not provided"));case 5:return t.next=7,r(n);case 7:return i=t.sent,a.result=i,t.abrupt("return",void 0);case 10:case"end":return t.stop()}},t)})),function(e,r,n){return t.apply(this,arguments)}))}function E(e){var r,t,n=e.getAccounts,a=e.requestAccounts,s=e.signTransaction,i=e.signAndSendTransaction,c=e.signAllTransactions,o=e.signMessage,p=e.getPrivateKey,f=e.getSecretKey;return(0,d.UZ)([(0,d.Pk)((r=(0,u.Z)(h().mark(function e(r,t,n){var s;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("requestAccounts"!==r.method)){e.next=3;break}return e.abrupt("return",n());case 3:if(a){e.next=5;break}throw Error("WalletMiddleware - opts.requestAccounts not provided");case 5:return e.next=7,a(r);case 7:return s=e.sent,t.result=s,e.abrupt("return",void 0);case 10:case"end":return e.stop()}},e)})),function(e,t,n){return r.apply(this,arguments)})),(0,d.Pk)((t=(0,u.Z)(h().mark(function e(r,t,a){var s;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("getAccounts"!==r.method)){e.next=3;break}return e.abrupt("return",a());case 3:if(n){e.next=5;break}throw Error("WalletMiddleware - opts.getAccounts not provided");case 5:return e.next=7,n(r);case 7:return s=e.sent,t.result=s,e.abrupt("return",void 0);case 10:case"end":return e.stop()}},e)})),function(e,r,n){return t.apply(this,arguments)})),O("signTransaction",s),O("signAndSendTransaction",i),O("signAllTransactions",c),O("signMessage",o),O("solanaPrivateKey",p),O("solanaSecretKey",f)])}function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach(function(r){(0,p.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var A=function(e){(0,i.Z)(g,e);var r,t,n,p,f=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(g);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function g(e){var r=e.config,t=e.state;return(0,a.Z)(this,g),f.call(this,{config:{chainConfig:j(j({},r.chainConfig),{},{chainNamespace:v.EN.SOLANA})},state:t})}return(0,s.Z)(g,[{key:"switchChain",value:(t=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})},{key:"setupProvider",value:(n=(0,u.Z)(h().mark(function e(r){var t,n,a,s,i;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.eI,n=E(this.getProviderHandlers(r)),t.push(n),a=Z(this.config.chainConfig),t.push(a),(s=this.getInjectedProviderProxy(r))&&t.push(s),i=(0,l.Xj)(t),this.updateProviderEngineProxy(i),e.next=12,this.lookupNetwork();case 12:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"lookupNetwork",value:(p=(0,u.Z)(h().mark(function e(){var r;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.config.chainConfig,this.update({chainId:r.chainId}),e.abrupt("return",r.chainId||"");case 3:case"end":return e.stop()}},e,this)})),function(){return p.apply(this,arguments)})},{key:"getInjectedProviderProxy",value:function(e){}}]),g}(g.Zk),T=function(e){var r,t,n,a,s,i,c,o;return{requestAccounts:(r=(0,u.Z)(h().mark(function r(){return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e.publicKey?[y().encode(e.publicKey.toBytes())]:[]);case 1:case"end":return r.stop()}},r)})),function(){return r.apply(this,arguments)}),getAccounts:(t=(0,u.Z)(h().mark(function r(){return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e.publicKey?[y().encode(e.publicKey.toBytes())]:[]);case 1:case"end":return r.stop()}},r)})),function(){return t.apply(this,arguments)}),getPrivateKey:(n=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),getSecretKey:(a=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),signTransaction:(s=(0,u.Z)(h().mark(function r(t){var n;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.signTransaction(t.params.message);case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}},r)})),function(e){return s.apply(this,arguments)}),signMessage:(i=(0,u.Z)(h().mark(function r(t){var n;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.signMessage(t.params.message,t.params.display);case 2:return n=r.sent,r.abrupt("return",n.signature);case 4:case"end":return r.stop()}},r)})),function(e){return i.apply(this,arguments)}),signAllTransactions:(c=(0,u.Z)(h().mark(function r(t){var n,a,s;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(!(null!==(n=t.params)&&void 0!==n&&n.message)||!(null!==(a=t.params)&&void 0!==a&&a.message.length))){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return r.next=4,e.signAllTransactions(t.params.message);case 4:return s=r.sent,r.abrupt("return",s);case 6:case"end":return r.stop()}},r)})),function(e){return c.apply(this,arguments)}),signAndSendTransaction:(o=(0,u.Z)(h().mark(function r(t){var n;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.signAndSendTransaction(t.params.message);case 2:return n=r.sent,r.abrupt("return",{signature:n.signature});case 4:case"end":return r.stop()}},r)})),function(e){return o.apply(this,arguments)})}};function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function C(e){var r;return(0,d.Pk)((r=(0,u.Z)(h().mark(function r(t,n,a){var s;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.request(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach(function(r){(0,p.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},t));case 2:s=r.sent,n.result=s;case 4:case"end":return r.stop()}},r)})),function(e,t,n){return r.apply(this,arguments)}))}var K=function(e){(0,i.Z)(n,e);var r,t=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(n);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getProviderHandlers",value:function(e){return T(e)}},{key:"getInjectedProviderProxy",value:function(e){return C(e)}}]),n}(A),R=function(e,r){var t,n,a,s,i,c,o,p;return{requestAccounts:(t=(0,u.Z)(h().mark(function r(){var t;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.connect();case 2:return t=r.sent.data,r.abrupt("return",[t.publicKey]);case 5:case"end":return r.stop()}},r)})),function(){return t.apply(this,arguments)}),getAccounts:(n=(0,u.Z)(h().mark(function r(){var t;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.connect();case 2:return t=r.sent.data,r.abrupt("return",[t.publicKey]);case 5:case"end":return r.stop()}},r)})),function(){return n.apply(this,arguments)}),getPrivateKey:(a=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),getSecretKey:(s=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),signTransaction:(i=(0,u.Z)(h().mark(function r(t){var n,a,s,i;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.params.message){r.next=3;break}throw w.ethErrors.rpc.invalidRequest({message:"Invalid transaction message"});case 3:return r.next=5,e.signTransaction(y().encode(n.serializeMessage()));case 5:if(!(!(a=r.sent.data).publicKey||!a.signature)){r.next=9;break}throw Error("Invalid signature from slope wallet");case 9:return s=new x.nh(a.publicKey),i=y().decode(a.signature),n.addSignature(s,i),r.abrupt("return",n);case 13:case"end":return r.stop()}},r)})),function(e){return i.apply(this,arguments)}),signMessage:(c=(0,u.Z)(h().mark(function r(t){var n;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.signMessage(t.params.message);case 2:return n=r.sent,r.abrupt("return",y().decode(n.data.signature));case 4:case"end":return r.stop()}},r)})),function(e){return c.apply(this,arguments)}),signAndSendTransaction:(o=(0,u.Z)(h().mark(function t(n){var a,s,i,c,o,u,p,f;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r()){t.next=3;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 3:if(s=n.params.message){t.next=6;break}throw w.ethErrors.rpc.invalidRequest({message:"Invalid transaction message"});case 6:return t.next=8,e.signTransaction(y().encode(s.serializeMessage()));case 8:if(!(!(i=t.sent.data).publicKey||!i.signature)){t.next=12;break}throw Error("Invalid signature from slope wallet");case 12:return c=new x.nh(i.publicKey),o=y().decode(i.signature),s.addSignature(c,o),t.next=17,a.request({method:"solana_provider_config",params:[]});case 17:return u=t.sent,p=new x.ew(u.rpcTarget),t.next=21,p.sendRawTransaction(s.serialize());case 21:return f=t.sent,t.abrupt("return",{signature:f});case 23:case"end":return t.stop()}},t)})),function(e){return o.apply(this,arguments)}),signAllTransactions:(p=(0,u.Z)(h().mark(function r(t){var n,a,s,i,c,o,u,p,f,l,d,v;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(!(null!==(n=t.params)&&void 0!==n&&n.message)||!(null!==(a=t.params)&&void 0!==a&&a.message.length))){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:for(u=0,c=(i=t.params.message).length,o=[];u<c;u++)o.push(y().encode(t.params.message[u].serializeMessage()));return r.next=8,e.signAllTransactions(o);case 8:if(f=(p=r.sent).msg,!(!(l=p.data).publicKey||(null===(s=l.signatures)||void 0===s?void 0:s.length)!==c)){r.next=13;break}throw Error(f);case 13:for(u=0,d=new x.nh(l.publicKey);u<c;u++)v=y().decode(l.signatures[u]),i[u].addSignature(d,v);return r.abrupt("return",i);case 16:case"end":return r.stop()}},r)})),function(e){return p.apply(this,arguments)})}},q=function(e){(0,i.Z)(n,e);var r,t=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(n);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getProviderHandlers",value:function(e){return R(e,this.getProviderEngineProxy.bind(this))}}]),n}(A),M=function(e,r){var t,n=T(e);return n.signAndSendTransaction=(t=(0,u.Z)(h().mark(function t(n){var a,s,i,c,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r()){t.next=3;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 3:return t.next=5,e.signTransaction(n.params.message);case 5:return s=t.sent,t.next=8,a.request({method:"solana_provider_config",params:[]});case 8:return i=t.sent,c=new x.ew(i.rpcTarget),t.next=12,c.sendRawTransaction(s.serialize());case 12:return o=t.sent,t.abrupt("return",{signature:o});case 14:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)}),n},N=function(e){(0,i.Z)(n,e);var r,t=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(n);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getProviderHandlers",value:function(e){return M(e,this.getProviderEngineProxy.bind(this))}}]),n}(A),_=function(e,r){var t,n,a=T(e);return a.signMessage=(t=(0,u.Z)(h().mark(function r(t){var n;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.sign(t.params.message,"utf8");case 2:return n=r.sent.signature,r.abrupt("return",n);case 5:case"end":return r.stop()}},r)})),function(e){return t.apply(this,arguments)}),a.signAndSendTransaction=(n=(0,u.Z)(h().mark(function t(n){var a,s,i,c,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r()){t.next=3;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 3:return t.next=5,e.signTransaction(n.params.message);case 5:return s=t.sent,t.next=8,a.request({method:"solana_provider_config",params:[]});case 8:return i=t.sent,c=new x.ew(i.rpcTarget),t.next=12,c.sendRawTransaction(s.serialize());case 12:return o=t.sent,t.abrupt("return",{signature:o});case 14:case"end":return t.stop()}},t)})),function(e){return n.apply(this,arguments)}),a},B=function(e){(0,i.Z)(n,e);var r,t=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(n);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"getProviderHandlers",value:function(e){return _(e,this.getProviderEngineProxy.bind(this))}}]),n}(A),z=function(e){var r,t,n,a,s,i,c,o;return{requestAccounts:(r=(0,u.Z)(h().mark(function r(){var t;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.request({method:"solana_requestAccounts",params:{}});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}},r)})),function(){return r.apply(this,arguments)}),getAccounts:(t=(0,u.Z)(h().mark(function r(){var t;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.request({method:"solana_requestAccounts",params:{}});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}},r)})),function(){return t.apply(this,arguments)}),getPrivateKey:(n=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),getSecretKey:(a=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:throw w.ethErrors.rpc.methodNotSupported();case 1:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),signMessage:(s=(0,u.Z)(h().mark(function r(t){var n,a;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==(n=t.params)&&void 0!==n&&n.message){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return r.next=4,e.signMessage(t.params.message);case 4:return a=r.sent,r.abrupt("return",a);case 6:case"end":return r.stop()}},r)})),function(e){return s.apply(this,arguments)}),signTransaction:(i=(0,u.Z)(h().mark(function r(t){var n,a,s;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==(n=t.params)&&void 0!==n&&n.message){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return a=t.params.message,r.next=5,e.signTransaction(a);case 5:return s=r.sent,r.abrupt("return",s);case 7:case"end":return r.stop()}},r)})),function(e){return i.apply(this,arguments)}),signAndSendTransaction:(c=(0,u.Z)(h().mark(function r(t){var n,a,s;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==(n=t.params)&&void 0!==n&&n.message){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return a=t.params.message,r.next=5,e.sendTransaction(a);case 5:return s=r.sent,r.abrupt("return",{signature:s});case 7:case"end":return r.stop()}},r)})),function(e){return c.apply(this,arguments)}),signAllTransactions:(o=(0,u.Z)(h().mark(function r(t){var n,a,s,i;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(!(null!==(n=t.params)&&void 0!==n&&n.message)||!(null!==(a=t.params)&&void 0!==a&&a.message.length))){r.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return s=t.params.message,r.next=5,e.signAllTransactions(s);case 5:return i=r.sent,r.abrupt("return",i);case 7:case"end":return r.stop()}},r)})),function(e){return o.apply(this,arguments)})}};function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function U(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach(function(r){(0,p.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var H=function(e){(0,i.Z)(y,e);var r,t,n,p,f,g,m=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(y);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function y(e){var r=e.config,t=e.state;return(0,a.Z)(this,y),m.call(this,{config:{chainConfig:U(U({},r.chainConfig),{},{chainNamespace:v.EN.SOLANA})},state:t})}return(0,s.Z)(y,[{key:"switchChain",value:(t=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})},{key:"setupProvider",value:(n=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.handleInjectedProviderUpdate(r),e.next=3,this.setupEngine(r);case 3:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"lookupNetwork",value:(p=(0,u.Z)(h().mark(function e(){var r,t,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.provider){e.next=2;break}throw w.ethErrors.provider.custom({message:"Torus solana provider is not initialized",code:4902});case 2:return r=this.config.chainConfig.chainId,e.next=5,this.provider.request({method:"solana_chainId"});case 5:if(t=e.sent,!(r!==(n=(0,v.H2)(t.toString())?t:"0x".concat(parseInt(t,10).toString(16))))){e.next=9;break}throw v.Ty.rpcConnectionError("Invalid network, net_version is: ".concat(n,", expected: ").concat(r));case 9:return this.update({chainId:n}),this.provider.emit("connect",{chainId:this.state.chainId}),this.provider.emit("chainChanged",this.state.chainId),e.abrupt("return",this.state.chainId);case 13:case"end":return e.stop()}},e,this)})),function(){return p.apply(this,arguments)})},{key:"setupEngine",value:(f=(0,u.Z)(h().mark(function e(r){var t,n,a,s;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=E(z(r)),n=C(r),(a=new d.eI).push(t),a.push(n),s=(0,l.Xj)(a),this.updateProviderEngineProxy(s),e.next=10,this.lookupNetwork();case 10:case"end":return e.stop()}},e,this)})),function(e){return f.apply(this,arguments)})},{key:"handleInjectedProviderUpdate",value:(g=(0,u.Z)(h().mark(function e(r){var t=this;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.on("accountsChanged",function(){var e=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.provider.emit("accountsChanged",r);case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()),r.on("chainChanged",function(){var e=(0,u.Z)(h().mark(function e(n){var a;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,v.H2)(n)?n:"0x".concat(parseInt(n,10).toString(16)),t.configure({chainConfig:U(U({},t.config.chainConfig),{},{chainId:a})}),e.next=4,t.setupProvider(r);case 4:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e)})),function(e){return g.apply(this,arguments)})}]),y}(g.Zk);function L(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function W(){return(W=(0,u.Z)(h().mark(function e(r){var t,n,a,s,i;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.privKey,n=r.getProviderEngineProxy,a=function(){return x.RG.fromSecretKey(P.from(t,"hex"))},!("string"!=typeof t)){e.next=4;break}throw v.Ty.invalidParams("privKey must be a string");case 4:return s=a(),i={requestAccounts:function(){var e=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[s.publicKey.toBase58()]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getAccounts:function(){var e=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[s.publicKey.toBase58()]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getPrivateKey:function(){var e=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSecretKey:function(){var e=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y().encode(s.secretKey));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),signTransaction:function(){var e=(0,u.Z)(h().mark(function e(r){var t,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=r.params)&&void 0!==t&&t.message){e.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return(n=r.params.message).partialSign(s),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),signMessage:function(){var e=(0,u.Z)(h().mark(function e(r){var t,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=r.params)&&void 0!==t&&t.message){e.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:return n=k().sign.detached(r.params.message,s.secretKey),e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),signAndSendTransaction:function(){var e=(0,u.Z)(h().mark(function e(r){var t,a,i,c;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=r.params)&&void 0!==t&&t.message){e.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:if(a=n()){e.next=5;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 5:return(i=r.params.message).sign(s),e.next=9,a.request({method:"sendTransaction",params:[y().encode(i.serialize())]});case 9:return c=e.sent,e.abrupt("return",{signature:c});case 11:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),signAllTransactions:function(){var e=(0,u.Z)(h().mark(function e(r){var t,n,a,i,c,o;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!(null!==(t=r.params)&&void 0!==t&&t.message)||!(null!==(n=r.params)&&void 0!==n&&n.message.length))){e.next=2;break}throw w.ethErrors.rpc.invalidParams("message");case 2:c=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return L(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,r)}}(e))){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,s=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw s}}}}((i=null===(a=r.params)||void 0===a?void 0:a.message)||[]);try{for(c.s();!(o=c.n()).done;)o.value.partialSign(s)}catch(u){c.e(u)}finally{c.f()}return e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()},e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function $(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?X(Object(t),!0).forEach(function(r){(0,p.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var F=function(e){(0,i.Z)(y,e);var r,t,n,p,f,g,m=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,o.Z)(y);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function y(e){var r=e.config,t=e.state;return(0,a.Z)(this,y),m.call(this,{config:{chainConfig:$($({},r.chainConfig),{},{chainNamespace:v.EN.SOLANA})},state:t})}return(0,s.Z)(y,[{key:"enable",value:(t=(0,u.Z)(h().mark(function e(){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.privateKey){e.next=2;break}throw w.ethErrors.provider.custom({message:"Private key is not found in state, plz pass it in constructor state param",code:4902});case 2:return e.next=4,this.setupProvider(this.state.privateKey);case 4:return e.abrupt("return",this._providerEngineProxy.request({method:"eth_accounts"}));case 5:case"end":return e.stop()}},e,this)})),function(){return t.apply(this,arguments)})},{key:"setupProvider",value:(n=(0,u.Z)(h().mark(function e(r){var t,n,a,s;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(e){return W.apply(this,arguments)}({privKey:r,getProviderEngineProxy:this.getProviderEngineProxy.bind(this)});case 2:return t=E(e.sent),n=new d.eI,a=function(e){var r=e.rpcTarget,t=(0,l.v$)({rpcTarget:r});return{networkMiddleware:(0,d.UZ)([Z(e),t]),fetchMiddleware:t}}(this.config.chainConfig).networkMiddleware,n.push(this.getChainSwitchMiddleware()),n.push(this.getAccountMiddleware()),n.push(t),n.push(a),s=(0,l.Xj)(n),this.updateProviderEngineProxy(s),e.next=14,this.lookupNetwork();case 14:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"updateAccount",value:(p=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._providerEngineProxy){e.next=2;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 2:return e.next=4,this._providerEngineProxy.request({method:"solanaPrivateKey"});case 4:if(!(e.sent!==r.privateKey)){e.next=14;break}return e.next=8,this.setupProvider(r.privateKey);case 8:return e.t0=this._providerEngineProxy,e.next=11,this._providerEngineProxy.request({method:"requestAccounts"});case 11:e.t1=e.sent,e.t2={accounts:e.t1},e.t0.emit.call(e.t0,"accountsChanged",e.t2);case 14:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})},{key:"switchChain",value:(f=(0,u.Z)(h().mark(function e(r){var t,n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._providerEngineProxy){e.next=2;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 2:return t=this.getChainConfig(r.chainId),this.update({chainId:"loading"}),this.configure({chainConfig:t}),e.next=7,this._providerEngineProxy.request({method:"solanaPrivateKey"});case 7:return n=e.sent,e.next=10,this.setupProvider(n);case 10:case"end":return e.stop()}},e,this)})),function(e){return f.apply(this,arguments)})},{key:"lookupNetwork",value:(g=(0,u.Z)(h().mark(function e(){var r,t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this._providerEngineProxy){e.next=2;break}throw w.ethErrors.provider.custom({message:"Provider is not initialized",code:4902});case 2:return e.next=4,this._providerEngineProxy.request({method:"getHealth",params:[]});case 4:if(r=e.sent,t=this.config.chainConfig,!("ok"!==r)){e.next=8;break}throw v.Ty.rpcConnectionError("Failed to lookup network for following rpc target: ".concat(t.rpcTarget));case 8:return this.update({chainId:t.chainId}),this.state.chainId!==t.chainId&&(this.provider.emit("chainChanged",this.state.chainId),this.provider.emit("connect",{chainId:this.state.chainId})),e.abrupt("return",this.state.chainId);case 11:case"end":return e.stop()}},e,this)})),function(){return g.apply(this,arguments)})},{key:"getChainSwitchMiddleware",value:function(){var e,r,t,n,a,s=this;return n=(t={addNewChainConfig:(e=(0,u.Z)(h().mark(function e(r){var t,n,a,i,c,o;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.params){e.next=2;break}throw w.ethErrors.rpc.invalidParams("Missing request params");case 2:if(n=(t=r.params).chainId,a=t.chainName,i=t.rpcUrls,c=t.blockExplorerUrls,o=t.nativeCurrency,n){e.next=5;break}throw w.ethErrors.rpc.invalidParams("Missing chainId in chainParams");case 5:if(!(!i||0===i.length)){e.next=7;break}throw w.ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");case 7:if(o){e.next=9;break}throw w.ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");case 9:s.addChain({chainNamespace:v.EN.SOLANA,chainId:n,ticker:(null==o?void 0:o.symbol)||"SOL",tickerName:(null==o?void 0:o.name)||"Solana",displayName:a,rpcTarget:i[0],blockExplorer:(null==c?void 0:c[0])||""});case 10:case"end":return e.stop()}},e)})),function(r){return e.apply(this,arguments)}),switchSolanaChain:(r=(0,u.Z)(h().mark(function e(r){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.params){e.next=2;break}throw w.ethErrors.rpc.invalidParams("Missing request params");case 2:if(r.params.chainId){e.next=4;break}throw w.ethErrors.rpc.invalidParams("Missing chainId");case 4:return e.next=6,s.switchChain(r.params);case 6:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)})}).addNewChainConfig,a=t.switchSolanaChain,(0,d.UZ)([O("addSolanaChain",n),O("switchSolanaChain",a)])}},{key:"getAccountMiddleware",value:function(){var e,r,t=this;return r=({updatePrivatekey:(e=(0,u.Z)(h().mark(function e(r){var n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.params){e.next=2;break}throw w.ethErrors.rpc.invalidParams("Missing request params");case 2:if(r.params.privateKey){e.next=4;break}throw w.ethErrors.rpc.invalidParams("Missing privateKey");case 4:return n=r.params.privateKey,e.next=7,t.updateAccount({privateKey:n});case 7:case"end":return e.stop()}},e)})),function(r){return e.apply(this,arguments)})}).updatePrivatekey,(0,d.UZ)([O("updateAccount",r)])}}]),y}(g.Zk);(0,p.Z)(F,"getProviderInstance",(n=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new F({config:{chainConfig:r.chainConfig}}),e.next=3,t.setupProvider(r.privKey);case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}));var G=function(){var e,r,t,n,i,c;function o(e){(0,a.Z)(this,o),(0,p.Z)(this,"provider",void 0),this.provider=e}return(0,s.Z)(o,[{key:"requestAccounts",value:(e=(0,u.Z)(h().mark(function e(){var r;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request({method:"requestAccounts",params:{}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"signAndSendTransaction",value:(r=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request({method:"signAndSendTransaction",params:{message:r}});case 2:return t=e.sent.signature,e.abrupt("return",{signature:t});case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"signTransaction",value:(t=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request({method:"signTransaction",params:{message:r}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"signAllTransactions",value:(n=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request({method:"signAllTransactions",params:{message:r}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"signMessage",value:(i=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request({method:"signMessage",params:{message:r}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"request",value:(c=(0,u.Z)(h().mark(function e(r){var t;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.request(r);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})}]),o}()}}]);