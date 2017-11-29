webpackJsonp([3],[,,,,,,,,,function(t,n,e){"use strict";function i(t,n,e){var i;return function(){var r=this,s=arguments;clearTimeout(i),i=setTimeout(function(){i=null,e||t.apply(r,s)},n),e&&!i&&t.apply(r,s)}}n.a=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var i=e(7),r=e(255),s=e(234),o=e.n(s),a=function(){return e.e(0).then(e.bind(null,259))},c=function(){return e.e(1).then(e.bind(null,260))};i.a.use(r.a),n.a=new r.a({mode:"history",routes:[{path:"/",name:"Dashboard",component:o.a},{path:"/coins/:coin/details",component:a},{name:"AllCoins",path:"/coins/all",component:c}]})},function(t,n,e){"use strict";var i=e(7),r=e(3),s=e(189),o=e(187),a=e(188);i.a.use(r.c);var c={topCoins:[],currency:"USD",selectedCoin:"BTC",exchange:"CCCAGG",loading:[],coinHistory:{},chartType:"month",coinDetails:{},allCoins:{}},u=new r.c.Store({state:c,actions:o,mutations:s,getters:a});n.a=u},function(t,n,e){function i(t){e(222)}var r=e(1)(e(170),e(247),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(219)}var r=e(1)(e(171),e(244),i,null,null);t.exports=r.exports},,function(t,n,e){function i(t){e(227)}var r=e(1)(e(175),e(252),i,"data-v-84ff0d98",null);t.exports=r.exports},,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(242),r=e.n(i),s=e(239),o=e.n(s);n.default={name:"app",components:{"app-header":r.a,"app-Footer":o.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"DotLoader",props:{color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},computed:{spinnerStyle:function(){return{backgroundColor:this.color,height:parseFloat(this.size)/2+"px",width:parseFloat(this.size)/2+"px",borderRadius:this.radius}},spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3),o=e(238),a=e.n(o),c=e(150),u=e.n(c);n.default={created:function(){this.topCoins.length<10&&this.fetchTopCoins()},computed:r()({},e.i(s.a)(["topCoins"])),methods:r()({},e.i(s.b)(["fetchTopCoins"])),components:{"app-topCoinList":a.a,"app-chartData":u.a}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3),o=e(185),a=e(9);n.default={data:function(){return{error:"",chart:{}}},created:function(){google.charts.load("current",{packages:["corechart"]}),window.addEventListener("resize",e.i(a.a)(this.drawChart,300))},mounted:function(){"Error"===this.coinHistory.Response?this.error="OHLC Chart not available. The market does not exist for this coin pair, try changing the exchange or currency":(this.error="",this.loadChart())},computed:r()({},e.i(s.a)(["currency"]),{chartOptions:function(){return{legend:"none",title:"Open-high-low-close chart of "+this.coinHistory.CoinName+" price",chartArea:{width:"91%"},width:"100%"}},chartData:function(){var t=e.i(o.a)(this.coinHistory,this.currency);return t=google.visualization.arrayToDataTable(t,!0),t.setColumnProperty(5,"role","tooltip"),t}}),methods:{drawChart:function(){this.chart=new google.visualization.CandlestickChart(this.$el),this.chart.draw(this.chartData,this.chartOptions)},loadChart:function(){google.charts.setOnLoadCallback(this.drawChart)}},props:["coinHistory"],destroyed:function(){window.removeEventListener("resize",e.i(a.a)(this.drawChart,300))}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3),o=e(182);n.default={data:function(){return{chartTypes:o.a}},methods:r()({},e.i(s.b)(["changeChartType"]),{nicerChartTypeName:function(t){switch(t){case"month":return"Last 30 days";case"24h":return"Last 24 hours";case"6months":return"Last 6 months";case"year":return"Last year";case"all":return"All time"}}})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3),o=e(148),a=e.n(o),c=e(235),u=e.n(c),l=e(236),d=e.n(l);n.default={computed:r()({},e.i(s.a)(["coinHistory","selectedCoin","loading"]),{isCoinHistoryLoading:function(){if(0!=this.loading.length)return-1!==this.loading.indexOf("coinHistory")},percentChange:function(){if(this.coinHistory.Data.length){var t=this.coinHistory.Data.find(function(t){return 0!==t.close}).close,n=this.coinHistory.Data[this.coinHistory.Data.length-1].close,e=(n-t)/t*100;return parseFloat(e).toFixed(3)}return 0},percentChangPositive:function(){return parseFloat(this.percentChange)>0}}),methods:r()({},e.i(s.b)(["fetchCoinHistory"])),components:{"app-loader":a.a,"app-Chart":u.a,"app-ChartButtons":d.a},created:function(){this.coinHistory.hasOwnProperty("Data")||this.fetchCoinHistory()}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3);n.default={props:["coin"],computed:r()({},e.i(s.a)(["currency","exchange"]),{price:function(){var t=this.coin["price_"+this.currency.toLowerCase()];if(t){var n=t.toLocaleString();return n.substring(0,n.indexOf(".")+4)+" "+this.currency}}}),methods:r()({},e.i(s.b)(["changeSelectedCoin"]),{imgError:function(t){t.target.src="http://via.placeholder.com/180x180",console.log("Switch to chrome to view .webp images")}})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(237),r=e.n(i);n.default={components:{"app-top-coin-list-item":r.a},props:["topCoins"]}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["currency","changeCurrency","currencies"]}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:["exchange","changeExchange","exchanges"]}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e.n(i),s=e(3),o=e(240),a=e.n(o),c=e(241),u=e.n(c),l=e(183),d=e(184);n.default={computed:r()({},e.i(s.a)(["currency","exchange"]),{currencies:function(){return l.a},exchanges:function(){return d.a}}),methods:r()({},e.i(s.b)(["changeCurrency","changeExchange"]),{toggleDisplayMenu:function(){this.$refs.menu.classList.toggle("is-active")}}),components:{"app-currencyDropdown":a.a,"app-exchangeDropdown":u.a}}},function(t,n,e){"use strict";var i=["month","24h","6months","year","all"];n.a=i},function(t,n,e){"use strict";var i=["AUD","BRL","CAD","CHF","CLP","CNY","CZK","DKK","EUR","GBP","HKD","HUF","IDR","ILS","INR","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PKR","PLN","RUB","SEK","SGD","THB","TRY","TWD","USD","ZAR"];n.a=i},function(t,n,e){"use strict";var i=["CCCAGG","TC38","BTCC","BTER","BIT2C","BITFINEX","BITSTAMP","BITTREX","CEXIO","COINBASE","COINFLOOR","COINSE","CRYPTOPIA","GATECOIN","GEMINI","HITBTC","HUOBI","ITBIT","KRAKEN","LAKEBTC","LOCALBITCOINS","MONETAGO","OKCOIN","POLONIEX","YACUNA","YUNBI","YOBIT","KORBIT","BITBAY","BTCMARKETS","QUADRIGACX","COINCHECK","BITSQUARE","VAULTORO","MERCADOBITCOIN","UNOCOIN","BITSO","BTCXINDIA","PAYMIUM","THEROCKTRADING","BITFLYER","QUOINE","LUNO","ETHERDELTA","LIQUI","BITFLYERFX","BITMARKET","LIVECOIN","COINONE","TIDEX","BLEUTRADE","ETHEXINDIA"];n.a=i},function(t,n,e){"use strict";var i=e(0),r=e.n(i),s=function(t,n){var e=[],i="Do MMM";switch(t.TimeTo-t.TimeFrom){case 86400:i="HH:MM UTC Z";break;case 2592e3:i="Do MMM";break;default:i="Do MMM YYYY"}return t.Data.forEach(function(t){var s=t.high,o=t.low,a=t.open,c=t.close,u=r.a.unix(t.time).format(i);e.push([u,o,a,c,s,u+"\nOpen: "+a.toLocaleString()+" "+n+"\nHigh: "+s.toLocaleString()+" "+n+"\nLow: "+o.toLocaleString()+" "+n+"\nClose: "+c.toLocaleString()+" "+n])}),e};n.a=s},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7),r=(e(3),e(147)),s=e.n(r),o=e(145),a=e(146);i.a.config.productionTip=!1,new i.a({el:"#app",router:o.a,store:a.a,render:function(t){return t(s.a)}})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"fetchTopCoins",function(){return c}),e.d(n,"changeSelectedCoin",function(){return u}),e.d(n,"fetchCoinHistory",function(){return l}),e.d(n,"changeCurrency",function(){return d}),e.d(n,"changeChartType",function(){return f}),e.d(n,"changeExchange",function(){return h}),e.d(n,"fetchCoinDetails",function(){return p}),e.d(n,"fetchAllCoins",function(){return v});var i=e(149),r=e.n(i),s=e(152),o=e.n(s),a=e(9),c=e.i(a.a)(function(t,n){var e=t.commit;t.state;e("loadItem","topCoins");var i=n||"USD";o.a.get("/api/coins/top?currency="+i).then(function(t){e("setTopCoins",t.data),e("loadItemFinished","topCoins")}).catch(function(t){console.log(t),e("loadItemFinished","topCoins")})},250),u=e.i(a.a)(function(t,n){var e=t.commit,i=t.state;n!=i.selectedCoin&&(e("selectCoin",n),l({commit:e,state:i}))},250),l=function(t){var n=t.commit,e=t.state,i=e.exchange,r=e.currency,s=e.chartType,a=e.selectedCoin;n("loadItem","coinHistory"),o.a.get("/api/coins/"+a+"/history?type="+s+"&e="+i+"&currency="+r).then(function(t){n("setCoinHistory",t.data),n("loadItemFinished","coinHistory")}).catch(function(t){console.log(t),n("loadItemFinished","coinHistory")})},d=e.i(a.a)(function(t,n){var e=t.commit,i=t.state;n!=i.currency&&(e("setCurrency",n),c({commit:e},n),l({commit:e,state:i}))},250),f=e.i(a.a)(function(t,n){var e=t.commit,i=t.state;n!=i.chartType&&(e("setChartType",n),n.coinToLoad?l({commit:e,state:i},n.coinToLoad):l({commit:e,state:i}))},250),h=e.i(a.a)(function(t,n){var e=t.commit,i=t.state;n!=i.exchange&&(e("setExchange",n),l({commit:e,state:i}))},250),p=function(t,n){var e=t.commit,i=t.state;(!r()(i.coinDetails).length||i.coinDetails.Data.General.Symbol!=n)&&(e("loadItem","coinDetails"),o.a.get("/api/coins/"+n+"/details").then(function(t){e("setCoinDetails",t.data),e("loadItemFinished","coinDetails")}).catch(function(t){console.log(t),e("loadItemFinished","coinDetails")}))},v=e.i(a.a)(function(t,n){var e=t.commit;e("loadItem","allCoins"),o.a.get("/api/coins/all").then(function(t){e("setAllCoins",t.data),e("loadItemFinished","allCoins")}).catch(function(t){console.log(t),e("loadItemFinished","allCoins")})},250)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"topCoins",function(){return i}),e.d(n,"currency",function(){return r}),e.d(n,"selectedCoin",function(){return s}),e.d(n,"coinHistory",function(){return o}),e.d(n,"loading",function(){return a}),e.d(n,"exchange",function(){return c}),e.d(n,"chartType",function(){return u}),e.d(n,"coinDetails",function(){return l}),e.d(n,"allCoins",function(){return d});var i=function(t){return t.topCoins},r=function(t){return t.currency},s=function(t){return t.selectedCoin},o=function(t){return t.coinHistory},a=function(t){return t.loading},c=function(t){return t.exchange},u=function(t){return t.chartType},l=function(t){return t.coinDetails},d=function(t){return t.allCoins}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"setTopCoins",function(){return i}),e.d(n,"selectCoin",function(){return r}),e.d(n,"loadItem",function(){return s}),e.d(n,"loadItemFinished",function(){return o}),e.d(n,"setCoinHistory",function(){return a}),e.d(n,"setCurrency",function(){return c}),e.d(n,"setChartType",function(){return u}),e.d(n,"setExchange",function(){return l}),e.d(n,"setCoinDetails",function(){return d}),e.d(n,"setAllCoins",function(){return f});var i=function(t,n){n.forEach(function(t){t.img=t.symbol+".webp"}),t.topCoins=n},r=function(t,n){t.selectedCoin=n},s=function(t,n){t.loading.push(n)},o=function(t,n){var e=t.loading.indexOf(n);-1!=e&&t.loading.splice(e,1)},a=function(t,n){t.coinHistory=n},c=function(t,n){t.currency=n},u=function(t,n){t.chartType=n},l=function(t,n){t.exchange=n},d=function(t,n){t.coinDetails=n},f=function(t,n){t.allCoins=n}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){function i(t){return e(r(t))}function r(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var s={"./af":27,"./af.js":27,"./ar":34,"./ar-dz":28,"./ar-dz.js":28,"./ar-kw":29,"./ar-kw.js":29,"./ar-ly":30,"./ar-ly.js":30,"./ar-ma":31,"./ar-ma.js":31,"./ar-sa":32,"./ar-sa.js":32,"./ar-tn":33,"./ar-tn.js":33,"./ar.js":34,"./az":35,"./az.js":35,"./be":36,"./be.js":36,"./bg":37,"./bg.js":37,"./bm":38,"./bm.js":38,"./bn":39,"./bn.js":39,"./bo":40,"./bo.js":40,"./br":41,"./br.js":41,"./bs":42,"./bs.js":42,"./ca":43,"./ca.js":43,"./cs":44,"./cs.js":44,"./cv":45,"./cv.js":45,"./cy":46,"./cy.js":46,"./da":47,"./da.js":47,"./de":50,"./de-at":48,"./de-at.js":48,"./de-ch":49,"./de-ch.js":49,"./de.js":50,"./dv":51,"./dv.js":51,"./el":52,"./el.js":52,"./en-au":53,"./en-au.js":53,"./en-ca":54,"./en-ca.js":54,"./en-gb":55,"./en-gb.js":55,"./en-ie":56,"./en-ie.js":56,"./en-nz":57,"./en-nz.js":57,"./eo":58,"./eo.js":58,"./es":61,"./es-do":59,"./es-do.js":59,"./es-us":60,"./es-us.js":60,"./es.js":61,"./et":62,"./et.js":62,"./eu":63,"./eu.js":63,"./fa":64,"./fa.js":64,"./fi":65,"./fi.js":65,"./fo":66,"./fo.js":66,"./fr":69,"./fr-ca":67,"./fr-ca.js":67,"./fr-ch":68,"./fr-ch.js":68,"./fr.js":69,"./fy":70,"./fy.js":70,"./gd":71,"./gd.js":71,"./gl":72,"./gl.js":72,"./gom-latn":73,"./gom-latn.js":73,"./gu":74,"./gu.js":74,"./he":75,"./he.js":75,"./hi":76,"./hi.js":76,"./hr":77,"./hr.js":77,"./hu":78,"./hu.js":78,"./hy-am":79,"./hy-am.js":79,"./id":80,"./id.js":80,"./is":81,"./is.js":81,"./it":82,"./it.js":82,"./ja":83,"./ja.js":83,"./jv":84,"./jv.js":84,"./ka":85,"./ka.js":85,"./kk":86,"./kk.js":86,"./km":87,"./km.js":87,"./kn":88,"./kn.js":88,"./ko":89,"./ko.js":89,"./ky":90,"./ky.js":90,"./lb":91,"./lb.js":91,"./lo":92,"./lo.js":92,"./lt":93,"./lt.js":93,"./lv":94,"./lv.js":94,"./me":95,"./me.js":95,"./mi":96,"./mi.js":96,"./mk":97,"./mk.js":97,"./ml":98,"./ml.js":98,"./mr":99,"./mr.js":99,"./ms":101,"./ms-my":100,"./ms-my.js":100,"./ms.js":101,"./my":102,"./my.js":102,"./nb":103,"./nb.js":103,"./ne":104,"./ne.js":104,"./nl":106,"./nl-be":105,"./nl-be.js":105,"./nl.js":106,"./nn":107,"./nn.js":107,"./pa-in":108,"./pa-in.js":108,"./pl":109,"./pl.js":109,"./pt":111,"./pt-br":110,"./pt-br.js":110,"./pt.js":111,"./ro":112,"./ro.js":112,"./ru":113,"./ru.js":113,"./sd":114,"./sd.js":114,"./se":115,"./se.js":115,"./si":116,"./si.js":116,"./sk":117,"./sk.js":117,"./sl":118,"./sl.js":118,"./sq":119,"./sq.js":119,"./sr":121,"./sr-cyrl":120,"./sr-cyrl.js":120,"./sr.js":121,"./ss":122,"./ss.js":122,"./sv":123,"./sv.js":123,"./sw":124,"./sw.js":124,"./ta":125,"./ta.js":125,"./te":126,"./te.js":126,"./tet":127,"./tet.js":127,"./th":128,"./th.js":128,"./tl-ph":129,"./tl-ph.js":129,"./tlh":130,"./tlh.js":130,"./tr":131,"./tr.js":131,"./tzl":132,"./tzl.js":132,"./tzm":134,"./tzm-latn":133,"./tzm-latn.js":133,"./tzm.js":134,"./uk":135,"./uk.js":135,"./ur":136,"./ur.js":136,"./uz":138,"./uz-latn":137,"./uz-latn.js":137,"./uz.js":138,"./vi":139,"./vi.js":139,"./x-pseudo":140,"./x-pseudo.js":140,"./yo":141,"./yo.js":141,"./zh-cn":142,"./zh-cn.js":142,"./zh-hk":143,"./zh-hk.js":143,"./zh-tw":144,"./zh-tw.js":144};i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id=231},,,function(t,n,e){function i(t){e(228)}var r=e(1)(e(172),e(253),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(225)}var r=e(1)(e(173),e(250),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(229)}var r=e(1)(e(174),e(254),i,"data-v-e8459f32",null);t.exports=r.exports},function(t,n,e){function i(t){e(220)}var r=e(1)(e(176),e(245),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(226)}var r=e(1)(e(177),e(251),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(224)}var r=e(1)(e(178),e(249),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(218)}var r=e(1)(e(179),e(243),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(221)}var r=e(1)(e(180),e(246),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(223)}var r=e(1)(e(181),e(248),i,"data-v-3d5e8542",null);t.exports=r.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v("\n    Currency "+t._s(t.currency)+"\n  ")]),t._v(" "),e("div",{staticClass:"navbar-dropdown "},t._l(t.currencies,function(n){return e("a",{key:n,staticClass:"navbar-item",on:{click:function(e){t.changeCurrency(n)}}},[t._v("\n      "+t._s(n)+"\n    ")])}))])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-spinner"},[e("div",{staticClass:"v-dot v-dot1",style:t.spinnerBasicStyle},[e("div",{staticClass:"v-dot v-dot2",style:t.spinnerStyle}),e("div",{staticClass:"v-dot v-dot3",style:t.spinnerStyle})])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"top-coin",attrs:{title:t.coin.name},on:{click:function(n){t.changeSelectedCoin(t.coin.symbol)}}},[e("figure",[e("img",{key:t.coin.rank,attrs:{src:"static/img/coins/"+t.coin.img,alt:t.coin.name},on:{error:t.imgError}}),t._v(" "),e("figcaption",[e("p",[t._v(t._s(t.coin.symbol))]),t._v(" "),e("p",[t._v(t._s(t.coin.name))])]),t._v(" "),e("span",[t._v(t._s(t.price))]),t._v(" "),e("router-link",{attrs:{to:"/coins/"+t.coin.symbol+"/details"}},[t._v("Details")])],1)])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v("\n    Exchange "+t._s(t.exchange)+"\n  ")]),t._v(" "),e("div",{staticClass:"navbar-dropdown "},t._l(t.exchanges,function(n){return e("a",{key:n,staticClass:"navbar-item",on:{click:function(e){t.changeExchange(n)}}},[t._v("\n      "+t._s(n)+"\n    ")])}))])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("app-header"),t._v(" "),e("router-view",{staticClass:"container view"}),t._v(" "),e("app-Footer")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("nav",{staticClass:"navbar is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[e("router-link",{attrs:{to:"/",tag:"a"}},[e("span",[t._v("CryptoVuewer")])]),t._v(" "),e("router-link",{attrs:{to:"/coins/all?page=1",tag:"a"}},[e("span",[t._v("AllCoins")])]),t._v(" "),e("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenuTransparentExample"},on:{click:t.toggleDisplayMenu}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])],1),t._v(" "),e("div",{ref:"menu",staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("app-currencyDropdown",{attrs:{currency:t.currency,changeCurrency:t.changeCurrency,currencies:t.currencies}}),t._v(" "),e("app-exchangeDropdown",{attrs:{exchange:t.exchange,changeExchange:t.changeExchange,exchanges:t.exchanges}})],1)])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v("CryptoVuewer")])])])])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",[t._v("\n  "+t._s(t.error)+"\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("ol",{staticClass:"level is-mobile"},t._l(t.topCoins,function(t){return e("li",{staticClass:"level-item"},[e("app-top-coin-list-item",{attrs:{coin:t}})],1)}))])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.isCoinHistoryLoading?e("app-loader",{staticStyle:{"min-width":"98%","min-height":"65vh"}}):e("div",{staticStyle:{width:"100%",height:"65vh",position:"relative"}},[e("span",{staticClass:"percent-change",class:{positive:t.percentChangPositive,negative:!t.percentChangPositive}},[t._v(t._s(t.percentChange+"%"))]),t._v(" "),e("app-Chart",{staticStyle:{"min-width":"98%","min-height":"100%"},attrs:{coinHistory:t.coinHistory}}),t._v(" "),e("app-ChartButtons")],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("app-topCoinList",{attrs:{topCoins:t.topCoins}}),t._v(" "),e("app-chartData")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("Show data from")]),t._v(" "),t._l(t.chartTypes,function(n){return e("button",{staticClass:"button",on:{click:function(e){t.changeChartType(n)}}},[t._v(t._s(t.nicerChartTypeName(n)))])})],2)},staticRenderFns:[]}}],[186]);
//# sourceMappingURL=app.77c6e9b99fca4c6df232.js.map