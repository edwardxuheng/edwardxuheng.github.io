(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{wC4F:function(e,t,c){"use strict";c.r(t),c.d(t,"HeroListModule",(function(){return a}));var n=c("ofXK"),o=c("tyNb"),s=c("eIep"),r=c("fXoL"),i=c("Y2LC");const b=function(e){return["/customers",e]};function d(e,t){if(1&e&&(r.Zb(0,"li"),r.Zb(1,"a",3),r.Zb(2,"span",4),r.Kc(3),r.Yb(),r.Kc(4),r.Yb(),r.Yb()),2&e){const e=t.$implicit,c=r.kc();r.Jb("selected",e.id===c.selectedId),r.Db(1),r.sc("routerLink",r.vc(5,b,e.id)),r.Db(2),r.Lc(e.id),r.Db(1),r.Mc("",e.name," ")}}const u=[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.route=t}ngOnInit(){this.heroes$=this.route.paramMap.pipe(Object(s.a)(e=>(this.selectedId=+e.get("id"),this.service.getHeroes())))}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(i.a),r.Tb(o.a))},e.\u0275cmp=r.Nb({type:e,selectors:[["app-hero-list"]],decls:7,vars:3,consts:[[1,"heroes"],[3,"selected",4,"ngFor","ngForOf"],["routerLink","/sidekicks"],[3,"routerLink"],[1,"badge"]],template:function(e,t){1&e&&(r.Zb(0,"h2"),r.Kc(1,"HEROES"),r.Yb(),r.Zb(2,"ul",0),r.Ic(3,d,5,7,"li",1),r.lc(4,"async"),r.Yb(),r.Zb(5,"button",2),r.Kc(6,"Go to sidekicks"),r.Yb()),2&e&&(r.Db(3),r.sc("ngForOf",r.mc(4,1,t.heroes$)))},directives:[n.k,o.e,o.f],pipes:[n.b],styles:[".heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc}"]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(u)],o.g]}),e})(),a=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[n.c,l]]}),e})()}}]);