function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Y2LC:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r,a=t("tk/3"),i=t("LRne"),o=[{id:11,isSecret:!1,name:"Dr Nice"},{id:12,isSecret:!1,name:"Narco"},{id:13,isSecret:!1,name:"Bombasto"},{id:14,isSecret:!1,name:"Celeritas"},{id:15,isSecret:!1,name:"Magneta"},{id:16,isSecret:!1,name:"RubberMan"},{id:17,isSecret:!1,name:"Dynama"},{id:18,isSecret:!0,name:"Dr IQ"},{id:19,isSecret:!0,name:"Magma"},{id:20,isSecret:!0,name:"Tornado"}],c=t("fXoL"),s=((r=function(){function e(){_classCallCheck(this,e),this.logs=[]}return _createClass(e,[{key:"log",value:function(e){this.logs.push(e),console.log(e)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275prov=c.Pb({token:r,factory:r.\u0275fac,providedIn:"root"}),r);new a.f({"Content-Type":"application/json",Authorization:"my-auth-token"});var l,u=((l=function(){function e(n,t){_classCallCheck(this,e),this.http=n,this.logger=t,this.heroesUrl="http://hn.algolia.com/api/v1/search"}return _createClass(e,[{key:"getHeroes",value:function(){return this.logger&&this.logger.log("Getting heroes ..."),Object(i.a)(o)}},{key:"getHero",value:function(e){var n=o.filter((function(n){return n.id===parseInt(e)}))[0];return Object(i.a)(n)}}]),e}()).\u0275fac=function(e){return new(e||l)(c.dc(a.c),c.dc(s,8))},l.\u0275prov=c.Pb({token:l,factory:l.\u0275fac,providedIn:"root"}),l)}}]);