/*
双十二红包
cron 0 0,20 * * * https://raw.githubusercontent.com/zero205/JD_tencent_scf/main/jd_1212.js
* */
const $ = new Env('暖暖红包');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const flCode = $.isNode() ? (process.env.FLCODE2 ? process.env.FLCODE2 : '') : '';
let cookiesArr = [];
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...$.toObj($.getdata("CookiesJD") || "[]").map((item) => item.cookie)].filter((item) => !!item);
}
var _0xodD='jsjiami.com.v6',_0xodD_=['‮_0xodD'],_0xc778=[_0xodD,'w5XCmcO1Gg==','bcK0RsKjwqfDlEo=','CMKULV/Dk8KZwoPDvcKbwpo=','B8ONVcOaLzXDocONw60b','ccO/wojDh8O4','L3rDpsKHZmc=','wqJrw5bDl8K+','WcKww4Ipbw==','SMKFw5Zl','w6V9IEEN','wpAJGsOzw6M=','YcOkwoDDkcO2','wo8JMMOqw6k=','wrvDvMKeEcK4','w5FCGnfDuMKVwrfDuQ==','wqU0DcO0w4J5w6Iq','X8K8w641eytJwpXDmsOpw6ZoMw8dCwpofMK3GsKkwpkYw4PCs8KF','wqnCrcKrTsKH','VCTDqwPDlHBgYTZJwrpLcFwow5hCw5vCuwPDvcKlwp3DncKvw4www6HDnWTDmEDCpQfDtMOMH8O1wq5VwqrCvcOePkvChQo/wqbCmHMt','YhgSwoVh','wqZmPsK3woMPBsK4w5jDgQ==','w5LCjDfCgSk=','b8OCRcKkGSrDvsOJw7YKwphbbMObw5zCqsKxbcKKwoTDuSAJwoVMw5nDg2pwKlNiRXRwwr/CrGXDqsK6w7PDtHzDsRZjwp0ow7/CtU0hw7JQw6DCj3HDr23DksKawpjDnXbCgFrCn8Kbw4lkZMKrKcO0NcKQK3HDjMKuK0bDocO+w5zDpijDsVDDoh/CoVzCjMO8wo8Ewo03woQof8KSw587dMK1wo8vRMO9GMKeZsKAGGBaEjPDmMOuwpnDlcO1QMO+w4U1SV3DpzFqwp5Jw7/Coi3DqMOgIsO2wotyPcOQw4YE','wr9hw7I2Fw==','LMK3ERfDvQ==','bQnCn3oi','c8Ovw77CpEA=','wqdIw6/DgMK+dQ==','Wgo4wqVw','wqMFbMOZw67Cjg==','aMKfc8KNwpY=','w6USXcKAJg==','w67ClsOfKDc=','EcONw6pjw7M=','w7bDg8OTJsKX','wr7DllrCvQc=','EcOFw6hdw4o=','wpPCqQVkNA==','EMO7And3','wpc0OcOyLw==','Cm7CmxHCig==','w6EXSlBv','w48DRsKgDQ==','CWrDoMK6Tg==','woJLw5gwBA==','DXXDgz5M','w64aesKLBA==','w6zDuMOvN8Kx','wqggAsObMw==','wo7DqMK/PsKF','w43CgVrDkw==','dsKhS8KuwrY=','wrgvM8Obwrw=','wpcRDcOxwonDvEk=','w4MAd8K3Lw==','w7zDucOwOMKz','XsKBw5Jow6zDgiU=','wp5DwrRlw60=','w5UXSXpY','w4jCkMOeMAw=','wqsYA8O+Ig==','O8OEecKtBA==','w7BmOsKkwqk=','wpbCoMK+','w7fliYvlpavlj5Z95aan6LSk','wqvCtVgzRA==','wrJkwpx0w7M=','H8O5w5d1w44=','w7M7WsKyOQ==','w6vCjjrCjRs=','woXDicKSwqN/','OlPCtA/Clg==','NG/CiyfCkg==','wqjCsw5xAw==','wrrCtQFyBA==','fMKqw6MdQA==','w5Uua3xU','Bk3ChTvCtw==','wo4dE8OIKA==','w6/CmMOiPwY=','wrUJG8O0Pg==','ccKjTsKq','X8KUw45tw7k=','w6wnwrIPbg==','F2vDizJARWI=','Z8ODwpzCo8Ok','wqMKI8OYw7I=','wo/DvcKjO8KQUMOc','w4rCg1/Dl8On','McKCHRfDgA==','NMKUOzTDsg==','wqgCw7rCigo=','wrXDssK/wqZp','wp/DisKjwpLDgQ==','MMOcE3Bt','wrLCpl4FXQ==','w6XCuyLCshs=','w7fCqhzCjC0=','w7rCsRTCkTZpdA==','JsODSMKQHQ==','d8K0V8KrwqPDhVw=','Z8Okwq4=','w5bli5LlpJLljJTDjeWns+i0uA==','w6QcTsKmPMOt','w5J2G8KAwpg=','w5tpI3sO','VMK1w6h9w5g=','wqdycyHCmQ==','wp4vLcOrHA==','w4HConnDh8OG','wol+wpdhw4Q=','w6YzWsKnPA==','eMOcwpc=','wqTlia7lp6Llj7V85aau6Lat','CGDDmDhQ','w5A6ccKSPw==','w5XCnFQ=','w5HpoJ7ljIXnuoTmna05','wq7Dk8Kiwo1+','fcOJwoPDoMO0','w7gBRsKHK8OpwqZwwp8JwopuK8KnIw==','E8ONw6V4wrTDpcKhwq/CocObw6fDqzbCrkzCjWhhw5JWw7oJwpXDoMK6RhDDuiLCvGHCtkUkwq0RLDvDgUcewpbDtEpLwqfDki8DNR4ZwqxPAzwTw4jDkWl/YcOJ','wqRCw6vCpcO8WcOcaWHCj8OVWsKMwrgSbSMcwr4=','SMOKasKLwq/Dn8OgwoJTDSjDhXJAw60Mwq4=','w5wRwqUvcg==','w7UyScKMNQ==','EH3Dqw9N','wrDDksKHA8K/','CcKkMCbDqA==','w74SZ8KKJA==','dcK+VMKz','wrlXw67DkMKm','wr8XEcOxBQ==','woPCny1TIA==','wrc5w4fChT7DpA==','GScjPMKS','wrbDoMK+woN7','Jh4mEMKZAg==','fsOyRsKZw4Y=','fsK5w6MRWA==','CQjCpAhM','CVTDpgRg','wofDtTbCsgs=','wqcUdsOOw6nDnMKmw5BTw6/CtcKIw6vCmCoaw4xLDk5xwqLDljHCu3rDssOxwpTDtQrDgxnDscKQXMKpwqRow6vDt0Ekw73DqsKOVcOUw4p/wpPDt8KlbBwhwpxIw5/CscKlwpA8wrkvAcKBwoo1wrhCw6DDiW3DtnRU','wqgWAA==','bBMuMcKSTS4twq/DuipSwrLCo8OFw7XDoGANTVpEaMOaw7jDjcKyC0TDpMKJOsORw7goQ8KeRBPDuH43KzTCqcKqw5s5b0LCisKww4/DocO4w7xkaTDCucOSwotHTMKLSmTDl8O+w5hDw53Ck1EQYMOYFMK5V1jDjyvDjcO1FMKpw7Z/dRzDvsOdwpnCkcOswpddS1Qgw6vDg8O5w4Nbw7VUw7nClEzCq8KTGCJWwpwdwpwRFQ==','QsOXwp7CvcO/','asO8w4vCvX4=','S8KBw5Y=','w4/ChsOlMTs=','wo5swo5Jw5c=','w75FCMKjwrA=','wpBbwp/CicOa','wozCisKoYcKU','w50iZ8KqGQ==','LHfDq8Knd2E=','w49XDkcpw70=','K8OZw5N2w78=','w5rDisOuOMKF','YiYIwoRv','JGnDr8KYbA==','IMOAL3Jh','W8OCasKW','w7DCh8OHIis=','w70/wqkrTQ==','YsOlwq3DgMO2w7XDqA==','w6DCrxzCnTo=','w6zCo8OKDx4=','w5QCVX9NwoQA','Kk7DvzVy','w5RKCVDDgg==','HgsxLcKP','G0vCpyrChg==','w5FuAlEL','CcKnMiHDoA==','URsL','wp7DssKRwrZZ','w5wffMKbKU8=','RQLCmmw1','w4LCqsOsLRI=','wrzCskw4ScK/wpgOw4wqGD3CuMOkKHw=','EyDCkTtU','wrrDnsKewq3DjA==','w5wVdcK5L1U=','LsOBRMKyHw==','wr1CwqfClMOzAQ==','aQjChG8p','IhQ3FMKg','d8KwScKjwq3Diw==','Y8O8wqbCi8OI','w4HCkMOpBRY=','wpdywpDCn8OQ','wps6AMOxw5l9','T8Kzw6EwbQ==','wo7CocKJTsK9','wq3Dvk3CghY=','wrHCrsKRU8K3','w5jClwXCnyM=','wqQPIMONwrc=','IgU1JcKYSnonw6jDpiNZw6nCsMOFw7bCmg==','wprDuG8=','fMObwoHCiMOH','wqRww44LNQ==','AhHCnlzCmQ==','wrTDoMKnwptk','w5HCm0LDvMOE','wpXCqcKMZ8KQ','wp5kw4M6Ew==','w7XCu8OeOw8=','wqJDw6XDgsKyUsOj','QsKzSMKewrM=','w6HCugDCmC9Fdw==','w4oIQlZewpU=','wo/Dl0/CuDQ=','b8Kcf8Kuwrs=','44K65o6n56eS44GR6K+U5Yan6I2n5YyF5Lia5LqK6LeK5Y6W5Lm/NmpWYFBhE+eYtOaMmuS9rOeVshlmBn9Ew6fnm7bku6Pkup3nr5HliLTojb3ljYo=','wpYLHcOkwoLCiQAJecO1WMOUAUVGwotMc8Kje8OIw4bCmDQ2EXzClMONBzIsL35KT0bDs8KGw4HDmzUX','woEsLMO8w6U=','wpbDjcK6wpp2','wq3CkCV3JQ==','IcOAw7dmw58=','wqsKEA==','a8KwSsKi','NsOmXG3Dpw==','Wggzwohu','woDDjMKDwpDDsw==','w7E5b8KzCg==','w7vCosOmMgk=','PcOfNA==','wr03SsOPw7U=','w4oCS3RYwo8=','worCusKqag==','J8OESMKUCQ==','wplSwpl4w6s=','w5ggwqAxTA==','JhQvMsKfGA==','wofDmsKlwp1Y','XMKAf8KGwoQ=','IsKgATPDtg==','ecOSwoA=','B8OLfw==','LSHCl3HClA==','GGnDgDhK','TcOXw77Ctm8=','FcOJw7Now7TDoA==','A8OSw5Z6w70=','I3nDuMKBbQ==','WhEY','wp9jw7s6','w6pZ5aWG6La4a2XljJnlm4cdaA==','JnHDosKDaX/Drw==','wr85w47CpQ==','w73ClBjCtzp+SA==','w41zAU9tw47DrA==','w4gsEFxOwqoo','gjsTjFiCaIwmJi.coQmI.nvu6BYOdF=='];if(function(_0x20f7ee,_0x4c63b1,_0xb8d0be){function _0x5910bd(_0x25d2d4,_0x1c2504,_0x81fb2b,_0x4f4d2d,_0x4744c8,_0x518915){_0x1c2504=_0x1c2504>>0x8,_0x4744c8='po';var _0x176af3='shift',_0x32b17c='push',_0x518915='‮';if(_0x1c2504<_0x25d2d4){while(--_0x25d2d4){_0x4f4d2d=_0x20f7ee[_0x176af3]();if(_0x1c2504===_0x25d2d4&&_0x518915==='‮'&&_0x518915['length']===0x1){_0x1c2504=_0x4f4d2d,_0x81fb2b=_0x20f7ee[_0x4744c8+'p']();}else if(_0x1c2504&&_0x81fb2b['replace'](/[gTFCIwJQInuBYOdF=]/g,'')===_0x1c2504){_0x20f7ee[_0x32b17c](_0x4f4d2d);}}_0x20f7ee[_0x32b17c](_0x20f7ee[_0x176af3]());}return 0xc26e0;};return _0x5910bd(++_0x4c63b1,_0xb8d0be)>>_0x4c63b1^_0xb8d0be;}(_0xc778,0xd6,0xd600),_0xc778){_0xodD_=_0xc778['length']^0xd6;};function _0x5e75(_0x1a4f34,_0x1302b6){_0x1a4f34=~~'0x'['concat'](_0x1a4f34['slice'](0x1));var _0x20282e=_0xc778[_0x1a4f34];if(_0x5e75['MtAAIn']===undefined){(function(){var _0x56a1dd=function(){var _0x45932d;try{_0x45932d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3c5622){_0x45932d=window;}return _0x45932d;};var _0x373024=_0x56a1dd();var _0x33893f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x373024['atob']||(_0x373024['atob']=function(_0x5c227e){var _0x91b24=String(_0x5c227e)['replace'](/=+$/,'');for(var _0x2843d5=0x0,_0xeca907,_0x5a1e27,_0x10da14=0x0,_0x3ed9d0='';_0x5a1e27=_0x91b24['charAt'](_0x10da14++);~_0x5a1e27&&(_0xeca907=_0x2843d5%0x4?_0xeca907*0x40+_0x5a1e27:_0x5a1e27,_0x2843d5++%0x4)?_0x3ed9d0+=String['fromCharCode'](0xff&_0xeca907>>(-0x2*_0x2843d5&0x6)):0x0){_0x5a1e27=_0x33893f['indexOf'](_0x5a1e27);}return _0x3ed9d0;});}());function _0x10a32b(_0x3450d9,_0x1302b6){var _0x4bf841=[],_0x35940e=0x0,_0x19e8cb,_0x9b1ccb='',_0x28802a='';_0x3450d9=atob(_0x3450d9);for(var _0x34987d=0x0,_0x3b49b9=_0x3450d9['length'];_0x34987d<_0x3b49b9;_0x34987d++){_0x28802a+='%'+('00'+_0x3450d9['charCodeAt'](_0x34987d)['toString'](0x10))['slice'](-0x2);}_0x3450d9=decodeURIComponent(_0x28802a);for(var _0x40dcc0=0x0;_0x40dcc0<0x100;_0x40dcc0++){_0x4bf841[_0x40dcc0]=_0x40dcc0;}for(_0x40dcc0=0x0;_0x40dcc0<0x100;_0x40dcc0++){_0x35940e=(_0x35940e+_0x4bf841[_0x40dcc0]+_0x1302b6['charCodeAt'](_0x40dcc0%_0x1302b6['length']))%0x100;_0x19e8cb=_0x4bf841[_0x40dcc0];_0x4bf841[_0x40dcc0]=_0x4bf841[_0x35940e];_0x4bf841[_0x35940e]=_0x19e8cb;}_0x40dcc0=0x0;_0x35940e=0x0;for(var _0x5367a3=0x0;_0x5367a3<_0x3450d9['length'];_0x5367a3++){_0x40dcc0=(_0x40dcc0+0x1)%0x100;_0x35940e=(_0x35940e+_0x4bf841[_0x40dcc0])%0x100;_0x19e8cb=_0x4bf841[_0x40dcc0];_0x4bf841[_0x40dcc0]=_0x4bf841[_0x35940e];_0x4bf841[_0x35940e]=_0x19e8cb;_0x9b1ccb+=String['fromCharCode'](_0x3450d9['charCodeAt'](_0x5367a3)^_0x4bf841[(_0x4bf841[_0x40dcc0]+_0x4bf841[_0x35940e])%0x100]);}return _0x9b1ccb;}_0x5e75['tOjoaz']=_0x10a32b;_0x5e75['HOqKPN']={};_0x5e75['MtAAIn']=!![];}var _0x4a36ca=_0x5e75['HOqKPN'][_0x1a4f34];if(_0x4a36ca===undefined){if(_0x5e75['JSmxQJ']===undefined){_0x5e75['JSmxQJ']=!![];}_0x20282e=_0x5e75['tOjoaz'](_0x20282e,_0x1302b6);_0x5e75['HOqKPN'][_0x1a4f34]=_0x20282e;}else{_0x20282e=_0x4a36ca;}return _0x20282e;};!(async()=>{var _0x532ea8={'AItmQ':function(_0x470cc3,_0x10a81c){return _0x470cc3(_0x10a81c);},'BHSGn':function(_0x3599bf,_0x288414){return _0x3599bf+_0x288414;},'wlVHX':function(_0x3e3738,_0x2faeb8){return _0x3e3738*_0x2faeb8;},'dzKvf':function(_0x20792c,_0x567868){return _0x20792c-_0x567868;},'POiUk':function(_0x5257ce,_0x557499){return _0x5257ce===_0x557499;},'FhjjD':_0x5e75('‫0','EbpR'),'PAOXh':_0x5e75('‮1','1%vg'),'lvLkF':_0x5e75('‫2','Se6M'),'xUMyV':function(_0xc0fcd5,_0x5904a7){return _0xc0fcd5>_0x5904a7;},'rWHqo':function(_0x1385cd,_0x27c0e9){return _0x1385cd<_0x27c0e9;},'SgOuM':function(_0x2ac4c1,_0x460ad6){return _0x2ac4c1+_0x460ad6;},'AXvRE':function(_0x348d50,_0x25d448){return _0x348d50===_0x25d448;},'YQXAF':_0x5e75('‫3','M^jN')};if(!cookiesArr[0x0]){if(_0x532ea8[_0x5e75('‮4','2Ip5')](_0x532ea8[_0x5e75('‫5','u&@I')],_0x532ea8[_0x5e75('‫6','*1PT')])){$[_0x5e75('‮7','Uztd')]($[_0x5e75('‫8','EbpR')],_0x532ea8[_0x5e75('‫9','jn*y')],_0x532ea8[_0x5e75('‮a','AxDC')],{'open-url':_0x532ea8[_0x5e75('‫b','Ww#z')]});return;}else{_0x532ea8[_0x5e75('‮c','AkAy')](resolve,data);}}if(_0x532ea8[_0x5e75('‮d','4jHR')](Date[_0x5e75('‫e','%UP$')](),0x17db485b000)){return;}var _0x57fdc1=[];for(var _0xa4aa1a=0x0;_0x532ea8[_0x5e75('‮f','43(h')](_0xa4aa1a,cookiesArr[_0x5e75('‮10','(7hn')]);_0xa4aa1a+=0xa){_0x57fdc1[_0x5e75('‮11','Br*1')](cookiesArr[_0x5e75('‮12','leXL')](_0xa4aa1a,_0x532ea8[_0x5e75('‮13','Bt$M')](_0xa4aa1a,0xa)));}for(let _0xa4aa1a=0x0;_0x532ea8[_0x5e75('‮14','1%vg')](_0xa4aa1a,_0x57fdc1[_0x5e75('‮15','37Ua')]);_0xa4aa1a++){if(_0x532ea8[_0x5e75('‫16','2Ip5')](_0x532ea8[_0x5e75('‮17','EbpR')],_0x532ea8[_0x5e75('‫18','h^z%')])){const _0x1e5362=_0x57fdc1[_0xa4aa1a][_0x5e75('‮19','!&SL')]((_0x55a0c4,_0x4f0c65)=>main(_0x55a0c4));await Promise[_0x5e75('‫1a','jn*y')](_0x1e5362);}else{return _0x532ea8[_0x5e75('‮1b','*YIo')](Math[_0x5e75('‫1c','iPhe')](_0x532ea8[_0x5e75('‮1d','eRj#')](Math[_0x5e75('‫1e','*1PT')](),_0x532ea8[_0x5e75('‫1f','*1PT')](max,min))),min);}}})()[_0x5e75('‫20','iZMj')](_0x2d3832=>{$[_0x5e75('‮21','AxDC')]('','❌\x20'+$[_0x5e75('‫22','RoDZ')]+_0x5e75('‫23','Uztd')+_0x2d3832+'!','');})[_0x5e75('‮24','iZMj')](()=>{$[_0x5e75('‫25','JKbN')]();});async function main(_0x3dac3b){var _0x13b550={'TvbhK':function(_0xae7713){return _0xae7713();},'FPZOM':function(_0x2f84f1,_0x13228b){return _0x2f84f1===_0x13228b;},'JQMMD':function(_0x1d5fcb,_0x35c63c){return _0x1d5fcb+_0x35c63c;},'SbrLx':function(_0x50cc40,_0x448fd4){return _0x50cc40(_0x448fd4);},'TfmfI':function(_0x5ade13,_0x479888){return _0x5ade13(_0x479888);},'ASGug':function(_0x1ab4a4,_0x430592){return _0x1ab4a4(_0x430592);},'Ncdik':_0x5e75('‮26','TvC^'),'WFHeM':_0x5e75('‮27','ue*c'),'bmtzy':_0x5e75('‫28','(7hn'),'ITVZw':function(_0x3608dd,_0x1d0307){return _0x3608dd>_0x1d0307;},'ltGFX':function(_0x5d2dc8,_0x3b8f22,_0x43d79d){return _0x5d2dc8(_0x3b8f22,_0x43d79d);},'mNTJT':function(_0x585899,_0x34c6e3){return _0x585899(_0x34c6e3);},'vewoh':function(_0x3f5fb7,_0x4f48bd,_0x575bc0,_0x3c2d78){return _0x3f5fb7(_0x4f48bd,_0x575bc0,_0x3c2d78);},'xQJyU':_0x5e75('‫29','x$ka'),'CKAlb':_0x5e75('‫2a','EbpR'),'vmuQQ':_0x5e75('‮2b','h^z%'),'QMNoe':_0x5e75('‮2c','leXL'),'GpoCC':_0x5e75('‮2d',']f[B'),'IrlXK':function(_0x29fab0,_0x4b0ad2){return _0x29fab0!=_0x4b0ad2;},'sINox':_0x5e75('‮2e','iZMj'),'fiShJ':function(_0x169d26,_0x1dec30){return _0x169d26!==_0x1dec30;},'bjvhs':_0x5e75('‮2f','l3cj'),'nYuFy':_0x5e75('‫30','&$w9'),'rkigq':function(_0x890047,_0x581e36){return _0x890047+_0x581e36;},'olXZh':_0x5e75('‫31','Fpd)'),'JsDep':function(_0x1bda2a,_0x4eb893){return _0x1bda2a!==_0x4eb893;},'HddUb':_0x5e75('‮32','ue*c'),'OebFB':_0x5e75('‫33','M^jN'),'sTZJF':_0x5e75('‮34',']f[B'),'clPkx':function(_0x495b9e,_0x308558){return _0x495b9e!==_0x308558;},'ovqYq':_0x5e75('‮35','SYM&'),'vdRFU':_0x5e75('‮36','VN5p'),'dulxc':function(_0x37130a,_0xf5e0a5){return _0x37130a===_0xf5e0a5;},'OqUGY':function(_0x19f880,_0x2ceb7f){return _0x19f880(_0x2ceb7f);},'XVZvV':_0x5e75('‮37','XC1K'),'VCAyg':_0x5e75('‫38','M^jN'),'XIXqq':function(_0x400c31,_0x14cb03,_0x1d1ee9){return _0x400c31(_0x14cb03,_0x1d1ee9);}};let _0x294db1=_0x5e75('‫39','&$w9')+_0x13b550[_0x5e75('‫3a','Br*1')](randomString,0x28)+_0x5e75('‫3b','*YIo')+_0x13b550[_0x5e75('‫3c','AxDC')](randomString,0xa)+_0x5e75('‫3d','elZ7')+_0x13b550[_0x5e75('‫3e','TvC^')](randomString,0x6)+_0x5e75('‮3f','leXL');let _0x3642c3=[_0x13b550[_0x5e75('‮40','RoDZ')],_0x13b550[_0x5e75('‮41','h^z%')],_0x13b550[_0x5e75('‫42','RFGd')]];if(flCode&&_0x13b550[_0x5e75('‫43','eRj#')](flCode[_0x5e75('‮44','l3cj')],0x0)){_0x3642c3=[''+flCode];}let _0x101a8c=_0x3642c3[_0x13b550[_0x5e75('‮45','AxDC')](random,0x0,_0x3642c3[_0x5e75('‫46','43(h')])];let _0x16e7a0='';let _0x89012d=_0x13b550[_0x5e75('‫47','EbpR')](decodeURIComponent,_0x3dac3b[_0x5e75('‫48','[s]T')](/pt_pin=([^; ]+)(?=;?)/)&&_0x3dac3b[_0x5e75('‮49','4jHR')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);let _0x3be418=await _0x13b550[_0x5e75('‮4a','*1PT')](getInfo1,_0x3dac3b,_0x101a8c,_0x294db1);let _0x303ad6=_0x3be418[_0x13b550[_0x5e75('‫4b','pG#a')]][_0x13b550[_0x5e75('‮4c','1sB2')]][_0x13b550[_0x5e75('‫4d','*1PT')]]||_0x3be418[_0x13b550[_0x5e75('‮4e','u&@I')]][_0x13b550[_0x5e75('‮4f','%UP$')]][_0x13b550[_0x5e75('‫50','Uztd')]]||'';let _0x350f05='';if(_0x303ad6){if(_0x13b550[_0x5e75('‮51','a1KX')](_0x13b550[_0x5e75('‮52','(7hn')],_0x13b550[_0x5e75('‫53','[s]T')])){if(_0x13b550[_0x5e75('‮54','iZMj')](typeof _0x303ad6,_0x13b550[_0x5e75('‫55','RoDZ')])){_0x350f05=_0x303ad6[_0x5e75('‮56','iPhe')](',');}else{_0x350f05=_0x303ad6;}for(let _0x3e5fdc of _0x350f05){if(_0x13b550[_0x5e75('‮57','[s]T')](_0x13b550[_0x5e75('‮58','pG#a')],_0x13b550[_0x5e75('‮59','Uztd')])){let _0x53cbb1=_0x3e5fdc[_0x5e75('‫5a','VN5p')](';')[0x0][_0x5e75('‫5b','KMmr')]();if(_0x53cbb1[_0x5e75('‫5c','EbpR')]('=')[0x1]){if(_0x13b550[_0x5e75('‮5d','Se6M')](_0x16e7a0[_0x5e75('‫5e','Se6M')](_0x53cbb1[_0x5e75('‮5f','AkAy')]('=')[0x1]),-0x1))_0x16e7a0+=_0x13b550[_0x5e75('‮60','pG#a')](_0x53cbb1[_0x5e75('‮61','Fpd)')](/ /g,''),';\x20');}}else{_0x13b550[_0x5e75('‫62','Bt$M')](resolve);}}}else{_0x350f05=_0x303ad6[_0x5e75('‫63','(7hn')](',');}}let _0x1bcd14=_0x3be418[_0x13b550[_0x5e75('‫64','x$ka')]][_0x5e75('‮65','Uztd')](/(https:\/\/u\.jd\.com\/jda[^']+)/)&&_0x3be418[_0x13b550[_0x5e75('‫66','leXL')]][_0x5e75('‮67','elZ7')](/(https:\/\/u\.jd\.com\/jda[^']+)/)[0x1]||'';if(!_0x1bcd14){console[_0x5e75('‫68','Br*1')](_0x89012d+_0x5e75('‫69','JKbN'));return;}let _0x2f8f1a=await _0x13b550[_0x5e75('‫6a','0jh2')](getInfo2,_0x1bcd14,_0x3dac3b+'\x20'+_0x16e7a0,_0x294db1);_0x303ad6=_0x2f8f1a[_0x13b550[_0x5e75('‮6b','Bt$M')]]&&_0x2f8f1a[_0x13b550[_0x5e75('‫6c','*1PT')]][_0x13b550[_0x5e75('‫6d','AkAy')]]&&(_0x2f8f1a[_0x13b550[_0x5e75('‮6e','TvC^')]][_0x13b550[_0x5e75('‫6f','2Ip5')]][_0x13b550[_0x5e75('‫70','a1KX')]]||_0x2f8f1a[_0x13b550[_0x5e75('‮71','a1KX')]][_0x13b550[_0x5e75('‫72','u&@I')]][_0x13b550[_0x5e75('‮73','u&@I')]]||'')||'';_0x350f05='';if(_0x303ad6){if(_0x13b550[_0x5e75('‮74','&$w9')](typeof _0x303ad6,_0x13b550[_0x5e75('‮75','(7hn')])){if(_0x13b550[_0x5e75('‮76','a1KX')](_0x13b550[_0x5e75('‫77','Uztd')],_0x13b550[_0x5e75('‮78','x$ka')])){let _0x110f33=ck[_0x5e75('‫79','Uztd')](';')[0x0][_0x5e75('‫7a','EbpR')]();if(_0x110f33[_0x5e75('‮7b','Fpd)')]('=')[0x1]){if(_0x13b550[_0x5e75('‮7c','1%vg')](_0x16e7a0[_0x5e75('‫7d','iPhe')](_0x110f33[_0x5e75('‫7e','!&SL')]('=')[0x1]),-0x1))_0x16e7a0+=_0x13b550[_0x5e75('‫7f','M^jN')](_0x110f33[_0x5e75('‫80','VN5p')](/ /g,''),';\x20');}}else{_0x350f05=_0x303ad6[_0x5e75('‮81','KMmr')](',');}}else{_0x350f05=_0x303ad6;}for(let _0xe65bac of _0x350f05){if(_0x13b550[_0x5e75('‫82','h^z%')](_0x13b550[_0x5e75('‮83','h^z%')],_0x13b550[_0x5e75('‫84','JKbN')])){let _0x53cbb1=_0xe65bac[_0x5e75('‮85','2Ip5')](';')[0x0][_0x5e75('‫7a','EbpR')]();if(_0x53cbb1[_0x5e75('‫86','Ww#z')]('=')[0x1]){if(_0x13b550[_0x5e75('‮87','%UP$')](_0x13b550[_0x5e75('‮88','0jh2')],_0x13b550[_0x5e75('‫89','TvC^')])){if(_0x13b550[_0x5e75('‫8a','TvC^')](_0x16e7a0[_0x5e75('‫8b','TvC^')](_0x53cbb1[_0x5e75('‮5f','AkAy')]('=')[0x1]),-0x1))_0x16e7a0+=_0x13b550[_0x5e75('‫8c','leXL')](_0x53cbb1[_0x5e75('‮8d','EbpR')](/ /g,''),';\x20');}else{console[_0x5e75('‫8e',']f[B')](_0x89012d+_0x5e75('‫8f','Br*1'));return;}}}else{$[_0x5e75('‫90','[s]T')](e,resp);}}}let _0x471e2a=_0x13b550[_0x5e75('‫91','elZ7')](decodeURIComponent,_0x2f8f1a[_0x13b550[_0x5e75('‫92','ue*c')]]&&_0x2f8f1a[_0x13b550[_0x5e75('‮93','Fpd)')]][_0x13b550[_0x5e75('‫6f','2Ip5')]]&&(_0x2f8f1a[_0x13b550[_0x5e75('‮71','a1KX')]][_0x13b550[_0x5e75('‫94','hMxA')]][_0x13b550[_0x5e75('‫95','Uztd')]]||_0x2f8f1a[_0x13b550[_0x5e75('‮96','KMmr')]][_0x13b550[_0x5e75('‮97','Bt$M')]][_0x13b550[_0x5e75('‫98','AkAy')]]||'')||'');if(!_0x471e2a){console[_0x5e75('‮99','!&SL')](_0x89012d+_0x5e75('‮9a','[s]T'));return;}await _0x13b550[_0x5e75('‫9b','iPhe')](getcouponUrl,_0x471e2a,_0x3dac3b+'\x20'+_0x16e7a0,_0x294db1);let _0x2277ff=await _0x13b550[_0x5e75('‮9c','[s]T')](getCoupons,_0x3dac3b+'\x20'+_0x16e7a0,_0x294db1);console[_0x5e75('‮9d','KMmr')](_0x89012d+_0x5e75('‮9e','VN5p')+_0x2277ff);}function getcouponUrl(_0x300eb0,_0x20774b,_0x16bde7){var _0x51dc04={'rzowl':function(_0x97f09,_0x5627d9){return _0x97f09!==_0x5627d9;},'ynflO':_0x5e75('‫9f','2Ip5'),'hgbNA':_0x5e75('‮a0',']f[B'),'SVbiy':function(_0x3387c9,_0x21174b){return _0x3387c9(_0x21174b);},'vfMoQ':function(_0x44b07e,_0x1e1858){return _0x44b07e(_0x1e1858);},'EBRRn':function(_0x267877){return _0x267877();},'nxDXu':_0x5e75('‫a1','[s]T'),'MJTTN':_0x5e75('‫a2','*1PT'),'rUiTX':_0x5e75('‮a3','5JUA'),'vaNij':_0x5e75('‮a4','DXXs')};return new Promise(_0x5835e7=>{var _0x59b9b0={'pbmLf':function(_0x55fd14,_0x2b5123){return _0x51dc04[_0x5e75('‮a5','1%vg')](_0x55fd14,_0x2b5123);},'QBEbE':function(_0x17f8f4){return _0x51dc04[_0x5e75('‮a6','AkAy')](_0x17f8f4);}};const _0x118e63={'url':_0x300eb0,'headers':{'Host':_0x51dc04[_0x5e75('‮a7','iPhe')],'Accept':_0x51dc04[_0x5e75('‫a8','VN5p')],'User-Agent':_0x16bde7,'Accept-Language':_0x51dc04[_0x5e75('‫a9','h^z%')],'Accept-Encoding':_0x51dc04[_0x5e75('‫aa','[s]T')],'Cookie':_0x20774b}};$[_0x5e75('‫ab','EbpR')](_0x118e63,async(_0x241a66,_0x5eaf7c,_0x5e67de)=>{if(_0x51dc04[_0x5e75('‮ac','l3cj')](_0x51dc04[_0x5e75('‮ad','Uztd')],_0x51dc04[_0x5e75('‮ae','u&@I')])){try{}catch(_0x36091a){$[_0x5e75('‫af','JKbN')](_0x36091a,_0x5eaf7c);}finally{_0x51dc04[_0x5e75('‫b0','37Ua')](_0x5835e7,_0x5e67de);}}else{try{_0x59b9b0[_0x5e75('‮b1','2Ip5')](_0x5835e7,{'resp':_0x5eaf7c,'data':_0x5e67de});}catch(_0x1fbd48){$[_0x5e75('‫b2','37Ua')](_0x1fbd48,_0x5eaf7c);}finally{_0x59b9b0[_0x5e75('‮b3','DXXs')](_0x5835e7);}}});});}async function getCoupons(_0x531fc5,_0x33281b){var _0x17fbe8={'LqNzd':function(_0x2c7949,_0x4505cd){return _0x2c7949===_0x4505cd;},'DYXDq':function(_0x20239a,_0x4df0f7){return _0x20239a+_0x4df0f7;},'cBFdq':function(_0x581738,_0x2856eb){return _0x581738(_0x2856eb);},'NqYoh':function(_0x14fe6d,_0x2cdd31){return _0x14fe6d!==_0x2cdd31;},'vEqck':_0x5e75('‫b4','&$w9'),'UQNIW':_0x5e75('‮b5','iMpL'),'TXwgG':_0x5e75('‮b6','iPhe'),'dqczi':function(_0x2318c7){return _0x2318c7();},'Vdnwo':_0x5e75('‮b7','1sB2'),'PGcCI':_0x5e75('‮a4','DXXs')};return new Promise(_0x5ef340=>{let _0x27444a={'url':_0x5e75('‮b8','43(h')+Date[_0x5e75('‮b9','Uztd')]()+_0x5e75('‫ba','37Ua'),'headers':{'Accept-Language':_0x17fbe8[_0x5e75('‮bb','!&SL')],'Accept-Encoding':_0x17fbe8[_0x5e75('‫bc','eRj#')],'Cookie':_0x531fc5,'user-agent':_0x33281b}};$[_0x5e75('‫bd','Fpd)')](_0x27444a,async(_0xf850b1,_0x5345d5,_0x29ab69)=>{var _0x2f3190={'WHAkn':function(_0x179178,_0x12cc70){return _0x17fbe8[_0x5e75('‮be','4jHR')](_0x179178,_0x12cc70);},'oTaDA':function(_0x1f6602,_0x423c69){return _0x17fbe8[_0x5e75('‮bf','Bt$M')](_0x1f6602,_0x423c69);}};try{_0x17fbe8[_0x5e75('‮c0','elZ7')](_0x5ef340,_0x29ab69);}catch(_0x3ee000){if(_0x17fbe8[_0x5e75('‮c1','5JUA')](_0x17fbe8[_0x5e75('‮c2','Br*1')],_0x17fbe8[_0x5e75('‮c3','[s]T')])){$[_0x5e75('‫c4','iZMj')](_0x3ee000,_0x5345d5);}else{$[_0x5e75('‮c5','ue*c')](_0x3ee000,_0x5345d5);}}finally{if(_0x17fbe8[_0x5e75('‮c6','*1PT')](_0x17fbe8[_0x5e75('‫c7','pG#a')],_0x17fbe8[_0x5e75('‮c8','AxDC')])){_0x17fbe8[_0x5e75('‫c9','iZMj')](_0x5ef340);}else{let _0x261baa=_0x531fc5[_0x5e75('‫ca','%UP$')](';')[0x0][_0x5e75('‫cb','DXXs')]();if(_0x261baa[_0x5e75('‮cc','4jHR')]('=')[0x1]){if(_0x2f3190[_0x5e75('‮cd','1%vg')](newCookie[_0x5e75('‫ce',']f[B')](_0x261baa[_0x5e75('‫cf','TvC^')]('=')[0x1]),-0x1))newCookie+=_0x2f3190[_0x5e75('‫d0','4jHR')](_0x261baa[_0x5e75('‫d1','(7hn')](/ /g,''),';\x20');}}}});});}async function getInfo2(_0x3aa116,_0x220be1,_0x54875b){var _0x182104={'eVjGv':function(_0x59cc9b,_0x1b7026){return _0x59cc9b(_0x1b7026);},'igpFN':function(_0x49c148,_0x24631d){return _0x49c148(_0x24631d);},'Tzpxd':function(_0x3bb017){return _0x3bb017();},'WuftA':function(_0x5ebcb4,_0x251a45){return _0x5ebcb4===_0x251a45;},'rVkSP':_0x5e75('‫d2','iPhe')};return new Promise(_0x50e541=>{var _0x1cffdc={'XpByD':function(_0xcb78f7,_0x249cbf){return _0x182104[_0x5e75('‫d3','XC1K')](_0xcb78f7,_0x249cbf);},'Jfqln':function(_0x2a735a){return _0x182104[_0x5e75('‮d4','37Ua')](_0x2a735a);}};if(_0x182104[_0x5e75('‫d5','a1KX')](_0x182104[_0x5e75('‮d6','ue*c')],_0x182104[_0x5e75('‮d7','h^z%')])){const _0x17568b={'url':_0x3aa116,'followRedirect':![],'headers':{'Cookie':_0x220be1,'user-agent':_0x54875b}};$[_0x5e75('‮d8','AxDC')](_0x17568b,async(_0x4681b5,_0x691ee8,_0x50a0f0)=>{try{_0x1cffdc[_0x5e75('‮d9','2Ip5')](_0x50e541,{'resp':_0x691ee8,'data':_0x50a0f0});}catch(_0x31d476){$[_0x5e75('‮da','AkAy')](_0x31d476,_0x691ee8);}finally{_0x1cffdc[_0x5e75('‫db','RFGd')](_0x50e541);}});}else{_0x182104[_0x5e75('‮dc','x$ka')](_0x50e541,data);}});}function randomString(_0x2e15d9){var _0x1317f6={'Ujsfk':function(_0x3bec16,_0x2f017e){return _0x3bec16||_0x2f017e;},'VdQVy':_0x5e75('‮dd','0jh2'),'zieEs':function(_0x580769,_0x44947e){return _0x580769<_0x44947e;},'hevAK':function(_0x4196ce,_0x7c9e23){return _0x4196ce*_0x7c9e23;}};_0x2e15d9=_0x1317f6[_0x5e75('‮de','iMpL')](_0x2e15d9,0x20);let _0x19d64c=_0x1317f6[_0x5e75('‮df','Ww#z')],_0x5c6b03=_0x19d64c[_0x5e75('‮e0','AkAy')],_0x198f4c='';for(i=0x0;_0x1317f6[_0x5e75('‮e1','leXL')](i,_0x2e15d9);i++)_0x198f4c+=_0x19d64c[_0x5e75('‫e2','5JUA')](Math[_0x5e75('‮e3','RFGd')](_0x1317f6[_0x5e75('‮e4','37Ua')](Math[_0x5e75('‮e5','EbpR')](),_0x5c6b03)));return _0x198f4c;}function random(_0x3e6f7b,_0x335798){var _0x344886={'wOVAX':function(_0x247d25,_0x426847){return _0x247d25+_0x426847;},'IXVyb':function(_0x59ff95,_0x34b011){return _0x59ff95*_0x34b011;},'zknuf':function(_0x467dda,_0x39f06d){return _0x467dda-_0x39f06d;}};return _0x344886[_0x5e75('‮e6','!&SL')](Math[_0x5e75('‮e7','x$ka')](_0x344886[_0x5e75('‮e8','5JUA')](Math[_0x5e75('‫e9','M^jN')](),_0x344886[_0x5e75('‫ea','&$w9')](_0x335798,_0x3e6f7b))),_0x3e6f7b);}async function getInfo1(_0x5d5c0b,_0x8f4333,_0x2fd881){var _0x35b5f9={'hhqBW':function(_0xe71c35,_0x135088){return _0xe71c35!==_0x135088;},'UrXTI':_0x5e75('‮eb','Br*1'),'mxZjc':_0x5e75('‫ec','1sB2'),'rbtTy':function(_0x47bcdc,_0x25edcd){return _0x47bcdc(_0x25edcd);},'ofUeo':_0x5e75('‫ed','Br*1'),'rJTiQ':function(_0x4f8dca){return _0x4f8dca();},'KHukm':function(_0x1fce3f,_0x3cc3f4){return _0x1fce3f===_0x3cc3f4;},'ZpIYF':function(_0x2e1dde,_0x2a2cf7){return _0x2e1dde+_0x2a2cf7;}};return new Promise(_0x338a0a=>{var _0x90da11={'vLupP':function(_0xff1259,_0x1af005){return _0x35b5f9[_0x5e75('‮ee','TvC^')](_0xff1259,_0x1af005);},'GboYq':function(_0x341f60,_0xac5871){return _0x35b5f9[_0x5e75('‮ef','Se6M')](_0x341f60,_0xac5871);}};const _0x43778e={'url':_0x5e75('‫f0','37Ua')+_0x8f4333,'followRedirect':![],'headers':{'Cookie':_0x5d5c0b,'user-agent':_0x2fd881}};$[_0x5e75('‮f1','1sB2')](_0x43778e,async(_0x5edc70,_0x22abaf,_0x5341d4)=>{try{if(_0x35b5f9[_0x5e75('‮f2','!&SL')](_0x35b5f9[_0x5e75('‮f3','RoDZ')],_0x35b5f9[_0x5e75('‫f4','*YIo')])){_0x35b5f9[_0x5e75('‮f5','2Ip5')](_0x338a0a,{'resp':_0x22abaf,'data':_0x5341d4});}else{setcookie=setcookies;}}catch(_0x406d5c){if(_0x35b5f9[_0x5e75('‮f6','KMmr')](_0x35b5f9[_0x5e75('‫f7','Br*1')],_0x35b5f9[_0x5e75('‮f8','RoDZ')])){if(_0x90da11[_0x5e75('‫f9','4jHR')](newCookie[_0x5e75('‫fa','l3cj')](name[_0x5e75('‫86','Ww#z')]('=')[0x1]),-0x1))newCookie+=_0x90da11[_0x5e75('‮fb','EbpR')](name[_0x5e75('‮fc','TvC^')](/ /g,''),';\x20');}else{$[_0x5e75('‫fd','(7hn')](_0x406d5c,_0x22abaf);}}finally{_0x35b5f9[_0x5e75('‫fe','1sB2')](_0x338a0a);}});});};_0xodD='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}