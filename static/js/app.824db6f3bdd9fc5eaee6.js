webpackJsonp([1],{"065o":function(t,e,i){"use strict";var s={name:"WTag",props:{closable:Boolean,color:{type:String,default:"primary"}},data:function(){return{isclosed:!1}},methods:{hiddenTag:function(){this.isclosed=!0,this.$emit("close")}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"w-zoom-in-center"}},[e("div",{staticClass:"w__tag",class:"w__tag--"+this.color},[e("span",{staticClass:"w__tag--desc"},[this._t("default")],2),this._v(" "),this.closable?e("i",{staticClass:"w-icon-close2 w__tag--close",on:{click:this.hiddenTag}}):this._e()])])},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},"43uR":function(t,e,i){"use strict";var s={name:"WLoadingBar",props:{type:{type:Number,default:1}},data:function(){return{speed:5,easing:"linear",percentNum:0,totalProgress:0,showSpinner:!0,isError:!1}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w__loading-bar"},[e("div",{staticClass:"w__loading-bar--bar",class:this.isError?"w__loading-bar--error":"",style:{transform:"translate3d(-"+(100-this.totalProgress)+"%, 0, 0)"},attrs:{role:"bar"}},[e("div",{staticClass:"w__loading-bar--peg"})]),this._v(" "),this.showSpinner?e("div",{staticClass:"w__loading-bar--spinner",attrs:{role:"spinner"}},[e("div",{staticClass:"spinner-icon",class:this.isError?"spinner-icon--error":"",style:{animation:"w-spinner 400ms "+this.easing+" infinite"}})]):this._e()])},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},"4WCW":function(t,e,i){"use strict";var s={name:"WLimit",props:{placeholder:{type:String,default:"请输入内容"},rows:{type:Number,default:4},maxLen:{type:Number,default:20},isCut:{type:Boolean,default:!1},value:{type:[String,Number],default:""}},data:function(){return{isOver:!1,num:this.maxLen,currentValue:""}},methods:{handleInput:function(t){var e=t.target.value;this.$emit("input",e),this.setCurrentValue(e),this.$emit("change",e)},setCurrentValue:function(t){if(t!==this.currentValue)if(this.currentValue=t,this.currentValue.length<=this.maxLen)this.isOver=!1,this.num=this.maxLen-this.currentValue.length;else{if(this.isCut)return this.currentValue=this.currentValue.substring(0,this.maxLen),void(this.num=this.currentValue.length-this.maxLen);this.isOver=!0,this.num=this.currentValue.length-this.maxLen,this.$emit("overText",this.currentValue)}}},watch:{}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("textarea",t._b({staticClass:"w__limit--textarea",class:{"w__limit-over":t.isOver},domProps:{value:t.currentValue},on:{input:t.handleInput}},"textarea",t.$props,!1)),t._v(" "),i("span",{staticClass:"w__limit--text"},[t._v("\n    "+t._s(t.isOver?"已超出":"还可以输入")),i("span",{staticClass:"w__limit--num",class:{"w__limit--num-over":t.isOver}},[t._v(t._s(t.num))]),t._v("个字\n  ")])])},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},"7MU0":function(t,e,i){"use strict";var s={name:"WButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},plain:Boolean,disabled:Boolean,round:Boolean},data:function(){return{msg:"button"}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"w__button",class:["w__button--"+t.type,{"is-plain":t.plain,"is-disabled":t.disabled,"is-round":t.round},"w__button--size-"+t.size],attrs:{disabled:t.disabled},on:{click:function(e){t.$emit("click")}}},[""!==t.icon?i("i",{class:t.icon}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},"8x5e":function(t,e,i){"use strict";var s={name:"WShowmore",props:{len:{type:Number,default:-1},text:{type:String,default:""},showText:{type:String,default:"显示更多"},hiddenText:{type:String,default:"收起"},allowFold:Boolean},data:function(){return{textLen:this.len}},methods:{showMore:function(){this.textLen=this.textLen===this.text.length?this.len:this.text.length}},filters:{filterText:function(t,e){return-1!==e&&e<t.length?t.substring(0,e)+"...":t}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"w__show-more"},[e("span",[this._v(this._s(this._f("filterText")(this.text,this.textLen)))]),this._v(" "),-1!==this.textLen&&this.textLen<this.text.length?e("a",{on:{click:this.showMore}},[this._v(this._s(this.showText))]):this._e(),this._v(" "),-1!==this.textLen&&this.textLen===this.text.length&&this.allowFold?e("a",{on:{click:this.showMore}},[this._v(this._s(this.hiddenText))]):this._e()])},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},"9lNg":function(t,e,i){"use strict";var s={name:"WAlert",props:{title:{type:String,requre:!0,default:function(){var t=this.$slots.default;return function(t){return!(!Array.isArray(t)||1!==t.length||void 0!==t[0].tag||!t[0].text)}(t)?t[0].text:void 0}},type:{type:String,default:"info"},showIcon:{type:Boolean,default:!1},center:{type:Boolean,default:!1},closeText:{type:String},closable:{type:Boolean,default:!0},description:{type:String}},data:function(){return{visible:!0}},computed:{typeClass:function(){return"w-alert--"+this.type},iconClass:function(){return"w-icon-fav"},isBoldTitle:function(){return this.description?"is-bold":""},isBigIcon:function(){return this.description?"is-big":""}},methods:{close:function(t){this.visible=!1,this.$emit("close")}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"w-alert-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"w-alert",class:[this.typeClass,{"is-center":this.center}]},[this.showIcon?e("i",{staticClass:"w-alert__icon",class:[this.iconClass,this.isBigIcon]}):this._e(),this._v(" "),e("div",{staticClass:"w-alert__content"},[e("span",{staticClass:"w-alert__title",class:this.isBoldTitle},[this._v(this._s(this.title))]),this._v(" "),this.description?e("p",{staticClass:"w-alert__description"},[this._v(this._s(this.description))]):this._e(),this._v(" "),this.closable?e("i",{staticClass:"w-alert__closebtn",class:[this.closeText?"is-customed":"w-icon-close2"],on:{click:this.close}},[this._v(this._s(this.closeText))]):this._e()])])])},staticRenderFns:[]},a=i("/Xao")(s,n,!1,null,null,null);e.a=a.exports},DEN3:function(t,e){t.exports={apiEnv:"development"}},NHnr:function(t,e,i){"use strict";function s(t){return P({method:"get",url:"/v2/movie/in_theaters",opts:t})}function n(t){return P({method:"get",url:"/v2/movie/subject/"+t})}function a(t){function e(t,e){T()(t).forEach(function(e){i+="/"+t[e]}),T()(e).forEach(function(t,i){s+=i?"&"+t+"="+e[t]:"?"+t+"="+e[t]})}var i="",s="";return{push:function(n){e(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),t.go(n+i+s)},replace:function(n){e(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),t.replace(n+i+s)},go:function(e){t.go(e)},getQuery:function(e){return e?t.query[e]:t.query},getParams:function(e){return e?t.params[e]:t.params}}}Object.defineProperty(e,"__esModule",{value:!0});var r={};i.d(r,"v2_movie_in_theaters_get",function(){return s}),i.d(r,"v2_movie_subject_get",function(){return n});i("ex9e");var o,l,c,u,v=i("bsue"),h=i.n(v),d=i("2M6E"),_=i.n(d),m=i("lC5x"),f=i.n(m),p=i("J0Oq"),g=i.n(p),b=i("Ct0J"),C=i.n(b),y=i("1Mrq"),w=i.n(y),x=i("AA3o"),j=i.n(x),L=i("xSur"),E=i.n(L),$=i("Jr9z"),k={props:{subject:{type:Object,default:{rating:{}}}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"co-movie-tag"},[i("ul",[i("li",{staticClass:"film-pic"},[i("a",{on:{click:function(e){t.showDetail(t.subject.id)}}},[i("img",{staticClass:"movieImg",attrs:{src:t.subject.images.large,alt:""}})])]),t._v(" "),i("li",{staticClass:"film-name"},[i("a",{attrs:{href:""}},[t._v(t._s(t.subject.title))])]),t._v(" "),i("li",{staticClass:"film-rate"},[i("span",{staticClass:"rateNum"},[t._v("评分："+t._s(t.subject.rating.average))])]),t._v(" "),t._m(0,!1,!1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"film-button"},[e("span",[e("a",{attrs:{href:""}},[this._v("特惠选座")])])])}]},S=i("/Xao")(k,D,!1,null,null,null).exports,N=i("ZLEe"),T=i.n(N),z=i("aA9S"),B=i.n(z),O=i("2sCs"),I=i.n(O).a.create(),R=i("DEN3"),V=i.n(R),P=function(t){return function(e){return e=e||{},I(B()({},{url:e.url,baseURL:t,method:e.method},e.opts))}}({mock:"https://www.easy-mock.com/mock/5a24d0ef475c043670250893/api",development:"/api",prepub:"http://api.douban.com/v2",production:"http://api.douban.com/v2"}[production||V.a.apiEnv||"mock"]),F=Object($.Component)({components:{MovieTag:S}})((l=function(){function t(){j()(this,t),this.city="杭州",this.moviesList=[],this.value=0,this.maxNum=12}return E()(t,[{key:"mounted",value:function(){var t=this;r.v2_movie_in_theaters_get().then(function(e){t.moviesList=e.data.subjects})}},{key:"showDetail",value:function(t){this.$router.push("/detail",{subjectId:t})}}]),t}(),function(t,e,i,s,n){var a={};Object.keys(s).forEach(function(t){a[t]=s[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=i.slice().reverse().reduce(function(i,s){return s(t,e,i)||i},a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null)}(l.prototype,"mounted",[$.life],w()(l.prototype,"mounted"),l.prototype),o=l))||o,X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"moving"},[i("div",{staticClass:"tit"},[i("h1",[t._v("电影票 - "+t._s(t.city))])]),t._v(" "),i("div",{staticClass:"moviesList"},[i("div",{staticClass:"movie-container"},[t._l(t.moviesList,function(e,s){return s<t.maxNum?i("div",{staticClass:"movieTag"},[i("MovieTag",{attrs:{subject:e}})],1):t._e()}),t._v(" "),t.maxNum<t.moviesList.length?i("div",{staticClass:"load-more",on:{click:function(e){t.maxNum=t.moviesList.length}}},[t._v("加载更多")]):t._e()],2)])])},staticRenderFns:[]},M=i("/Xao")(F,X,!1,function(t){i("PU3t")},null,null).exports,q=Object($.Component)((u=function(){function t(){j()(this,t),this.movieDetail={images:[],rating:{}}}return E()(t,[{key:"mounted",value:function(){var t=this;console.log(this.$router.getParams("subjectId")),r.v2_movie_subject_get(this.$router.getParams("subjectId")).then(function(e){t.movieDetail=e.data})}}]),t}(),function(t,e,i,s,n){var a={};Object.keys(s).forEach(function(t){a[t]=s[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=i.slice().reverse().reduce(function(i,s){return s(t,e,i)||i},a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null)}(u.prototype,"mounted",[$.life],w()(u.prototype,"mounted"),u.prototype),c=u))||c,A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-moving"},[i("div",{staticClass:"content"},[i("h1",[i("span",{staticClass:"title"},[t._v(t._s(t.movieDetail.title)+" "+t._s(t.movieDetail.original_title))]),t._v(" "),i("span",{staticClass:"year"},[t._v("("+t._s(t.movieDetail.year)+")")])]),t._v(" "),i("div",{staticClass:"detail clearfix"},[i("div",{staticClass:"left-side"},[i("div",{staticClass:"actor-list"},[i("div",{staticClass:"subject"},[i("div",{staticClass:"mainpic"},[i("a",{attrs:{href:"https://movie.douban.com/subject/25900945/photos?type=R"}},[i("img",{staticClass:"movieImg",attrs:{src:t.movieDetail.images.medium,alt:"",title:"点击查看更多海报"}})])]),t._v(" "),i("div",{staticClass:"info"},[i("span",{staticClass:"p1"},[t._v("导演: ")]),t._l(t.movieDetail.directors,function(e){return i("span",{staticClass:"attrs"},[t._v(t._s(e.name))])}),i("br"),t._v(" "),i("span",{staticClass:"p1"},[t._v("主演: ")]),t._l(t.movieDetail.casts,function(e){return i("span",{staticClass:"attrs"},[t._v(t._s(e.name)+"/")])}),i("br"),t._v(" "),i("span",{staticClass:"p1"},[t._v("类型: ")]),t._l(t.movieDetail.genres,function(e){return i("span",{staticClass:"attrs"},[t._v(t._s(e)+"/")])}),i("br"),t._v(" "),i("span",{staticClass:"p1"},[t._v("制片国家/地区: ")]),t._l(t.movieDetail.countries,function(e,s){return i("span",{staticClass:"attrs"},[t._v(t._s(e))])}),i("br"),t._v(" "),i("span",{staticClass:"p1"},[t._v("IMDb链接: ")]),i("span",{staticClass:"attrs"}),i("br")],2)]),t._v(" "),i("div",{staticClass:"people-sroce"},[i("div",[i("p",[t._v("豆瓣评分")]),t._v(" "),2*t.movieDetail.rating.average?i("span",{staticClass:"score"},[t._v(t._s(t.movieDetail.rating.average))]):t._e(),t._v(" "),2*!t.movieDetail.rating.average?i("p",{staticClass:"no-publish"},[t._v("尚未上映")]):t._e(),t._v(" "),2*t.movieDetail.rating.average?i("p",{staticClass:"comment-num"},[t._v(t._s(t.movieDetail.ratings_count)+"人评价")]):t._e()])])]),t._v(" "),t._m(0,!1,!1),t._v(" "),t._m(1,!1,!1),t._v(" "),i("div",{staticClass:"summary"},[i("p",{staticClass:"summary-title"},[t._v(t._s(t.movieDetail.title)+"的剧情简介 · · · · · ·")]),t._v(" "),i("p",{staticClass:"intro"},[t._v("       "+t._s(t.movieDetail.summary))])])]),t._v(" "),t._m(2,!1,!1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"insterest-people"},[e("div",{staticClass:"top"},[e("a",{attrs:{href:""}},[e("button",[this._v("想看")])]),this._v(" "),e("a",{attrs:{href:""}},[e("button",[this._v("看过")])]),this._v(" "),e("span",{staticClass:"score-to"},[this._v("评价:")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gtleft"},[e("ul",{staticClass:"ul"},[e("li",[e("img",{attrs:{src:"https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif",alt:""}}),e("a",{attrs:{href:""}},[this._v("写短评")])]),this._v(" "),e("li",[e("img",{attrs:{src:"https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif",alt:""}}),e("a",{attrs:{href:""}},[this._v("写影评")])]),this._v(" "),e("li",[e("img",{attrs:{src:"https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif",alt:""}}),e("a",{attrs:{href:""}},[this._v("提问题")])]),this._v(" "),e("li",[e("img",{attrs:{src:"https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif",alt:""}}),e("a",{attrs:{href:""}},[this._v("添加到豆列")])]),this._v(" "),e("li",[e("img",{attrs:{src:"",alt:""}}),e("a",{attrs:{href:""}},[this._v("分享到")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-side"},[e("div",{staticClass:"ticket"},[e("a",{staticClass:"ticket-btn",attrs:{href:"https://movie.douban.com/subject/25900945/cinema/?from=subject-page"}},[this._v("豆瓣购票23元起")])]),this._v(" "),e("div",{staticClass:"game-pic"},[e("img",{attrs:{src:" https://img3.doubanio.com/img/files/file-1489162292.jpg ",alt:""}})]),this._v(" "),e("div",{staticClass:"qrcode-app"},[e("a",{attrs:{href:""}})])])}]},W=i("/Xao")(q,A,!1,function(t){i("qmAL")},null,null).exports,U=this,J=new C.a;J.patch("/",function(){var t=g()(f.a.mark(function t(e){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.render(M);case 2:case"end":return t.stop()}},t,U)}));return function(e){return t.apply(this,arguments)}}()),J.patch("/detail/:subjectId",function(){var t=g()(f.a.mark(function t(e){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.render(W);case 2:case"end":return t.stop()}},t,U)}));return function(e){return t.apply(this,arguments)}}());var H=J,K=(i("xyU1"),i("qRXP")),Q=i("KXQK");a.install=function(t,e){t.prototype.$router=a(e)};var Z=a;K.default.use(Q.a);var G=new h.a;G.on("500",function(t){return console.error(t.stack)}),G.on("404",function(t){return console.warn("404 Not found")}),G.on("process:start",function(){return console.log("process:start")}),G.on("process:end",function(){return console.log("process:end")}),G.install(_.a),G.use(H.routes()),K.default.use(Z,G);e.default=G.listen()},PU3t:function(t,e){},ex9e:function(t,e){},qmAL:function(t,e){},xyU1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.824db6f3bdd9fc5eaee6.js.map