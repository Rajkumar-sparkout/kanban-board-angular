import{b as Oe}from"./chunk-J35XS42S.js";import{$ as X,Aa as H,Ca as $,Da as Q,Ea as Z,a as Pe,b as Ie,c as Re,d as ke,g as Ae,h as F,i as Ne,k as I,la as U,m as v,o as R,oa as S,p as k,pa as z,q as A,s as b,t as N,ta as V,u as D,ua as q,v as O,va as B,w as j,x as L,y as De,za as G}from"./chunk-DZCCE5F4.js";import{$a as Ce,Aa as ue,Bc as M,Cb as w,D as ie,Eb as T,Fb as xe,Ga as fe,Gb as W,Ib as Me,Kb as Fe,Lb as Se,Pb as l,Ta as m,Ua as g,Va as ge,Wb as h,X as re,Xa as he,Z as x,Za as ve,_ as ne,a as ee,ca as E,da as ae,fc as Te,ha as f,ia as le,ja as se,ka as me,lb as p,nb as C,o as te,ob as we,pa as de,pb as be,qa as pe,qb as ye,s as oe,sb as d,tc as P,wb as a,xb as n,ya as ce,yb as c,yc as Ee,zb as _e}from"./chunk-DWLGW65G.js";var J=(()=>{class e{http;apiUrl="http://localhost:3000";constructor(t){this.http=t}createUser(t){return this.http.post(`${this.apiUrl}/users`,t)}getUserByEmail(t){return this.http.get(`${this.apiUrl}/users?email=${t}`)}checkEmailExists(t){return this.http.get(`${this.apiUrl}/users?email=${t}`).pipe(oe(r=>r.some(i=>i.email===t)),ie(()=>te(!1)))}static \u0275fac=function(r){return new(r||e)(E(Pe))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function et(e,o){e&1&&(a(0,"mat-error"),l(1,"Username is required"),n())}function tt(e,o){e&1&&(a(0,"mat-error"),l(1,"password is required"),n())}var Ue=(()=>{class e{route;authService;message="";messageType="success";constructor(t,r){this.route=t,this.authService=r}ngOnInit(){localStorage.getItem("email")&&this.route.navigate(["dashboard"])}loginForm=new A({email:new b("",v.required),password:new b("",v.required)});get loginFormControl(){return this.loginForm.controls}gotoRegister(){this.route.navigate(["register"])}login(){let{email:t,password:r}=this.loginForm.value;this.authService.getUserByEmail(t).subscribe(i=>{i.length>0&&i[0].password===r?(localStorage.setItem("email",t),this.message="Login successfull",this.messageType="success",setTimeout(()=>{window.location.href=window.location.href},1e3)):(this.message="Username or password is wrong",this.messageType="error")},i=>{console.log(i),this.message="Login failed",this.messageType="error"})}static \u0275fac=function(r){return new(r||e)(g(F),g(J))};static \u0275cmp=f({type:e,selectors:[["app-login"]],standalone:!0,features:[h],decls:25,vars:5,consts:[[3,"message","type"],[1,"container"],["appearance","outlined",1,"example-card"],[1,"formTag",3,"formGroup"],[1,"form"],["matInput","","type","email","formControlName","email","placeholder","UserName"],["matInput","","type","password","formControlName","password","placeholder","Password"],["mat-flat-button","",3,"click"],[1,"text-sm","font-light","mt-2","text-gray-500","dark:text-gray-400"],["color","primary",1,"primary",3,"click"]],template:function(r,i){r&1&&(c(0,"app-popup",0),a(1,"div",1)(2,"mat-card",2)(3,"form",3)(4,"div")(5,"h6"),l(6,"Login Here"),n()(),a(7,"div",4)(8,"mat-form-field")(9,"mat-label"),l(10,"Username"),n(),c(11,"input",5),p(12,et,2,0,"mat-error"),n(),a(13,"mat-form-field")(14,"mat-label"),l(15,"Password"),n(),c(16,"input",6),p(17,tt,2,0,"mat-error"),n(),a(18,"button",7),w("click",function(){return i.login()}),l(19,"Sign in"),n(),c(20,"hr"),a(21,"p",8),l(22," Don't have an account yet? "),a(23,"a",9),w("click",function(){return i.gotoRegister()}),l(24,"Sign up"),n()()()()()()),r&2&&(C("message",i.message)("type",i.messageType),m(3),C("formGroup",i.loginForm),m(9),d(i.loginFormControl.email.invalid&&i.loginFormControl.email.touched?12:-1),m(5),d(i.loginFormControl.password.invalid&&i.loginFormControl.password.touched?17:-1))},dependencies:[j,N,I,R,k,L,D,O,M,H,G,q,B,Q,$,V,z,S,U,Z],styles:[".example-card[_ngcontent-%COMP%]{width:450px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:5%}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}mat-form-field[_ngcontent-%COMP%]{margin-top:7px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.formTag[_ngcontent-%COMP%]{padding:30px}.primary[_ngcontent-%COMP%]{color:#00f;cursor:pointer;font-weight:600;font-size:16px}mat-error[_ngcontent-%COMP%]{font-size:14px;margin-bottom:7px}"]})}return e})();function ot(e,o){e&1&&(a(0,"mat-error"),l(1,"Name is required"),n())}function it(e,o){e&1&&(a(0,"mat-error"),l(1,"Email is required"),n())}function rt(e,o){e&1&&(a(0,"mat-error"),l(1,"Eamil should be valid"),n())}function nt(e,o){if(e&1&&(a(0,"div"),p(1,rt,2,0,"mat-error"),n()),e&2){let t=T();m(),d(!(t.email==null||t.email.value==null)&&t.email.value.match("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")?-1:1)}}function at(e,o){e&1&&(a(0,"mat-error"),l(1,"Password is required"),n())}function lt(e,o){e&1&&(a(0,"mat-error"),l(1,"At least one uppercase letter."),n())}function st(e,o){e&1&&(a(0,"mat-error"),l(1,"At least one lowercase letter."),n())}function mt(e,o){e&1&&(a(0,"mat-error"),l(1,"At least one digit."),n())}function dt(e,o){e&1&&(a(0,"mat-error"),l(1,"At least one special character."),n())}function pt(e,o){e&1&&(a(0,"mat-error"),l(1,"At least 8 character long."),n())}function ct(e,o){if(e&1&&p(0,lt,2,0,"mat-error")(1,st,2,0,"mat-error")(2,mt,2,0,"mat-error")(3,dt,2,0,"mat-error")(4,pt,2,0,"mat-error"),e&2){let t=T();d(!(t.passwordFormField==null||t.passwordFormField.value==null)&&t.passwordFormField.value.match("^(?=.*[A-Z])")?-1:0),m(),d(!(t.passwordFormField==null||t.passwordFormField.value==null)&&t.passwordFormField.value.match("(?=.*[a-z])")?-1:1),m(),d(!(t.passwordFormField==null||t.passwordFormField.value==null)&&t.passwordFormField.value.match("(.*[0-9].*)")?-1:2),m(),d(!(t.passwordFormField==null||t.passwordFormField.value==null)&&t.passwordFormField.value.match("(?=.*[!@#$%^&*])")?-1:3),m(),d(!(t.passwordFormField==null||t.passwordFormField.value==null)&&t.passwordFormField.value.match(".{8,}")?-1:4)}}function ut(e,o){e&1&&(a(0,"mat-error"),l(1,"Confirm password is required"),n())}var ze=(()=>{class e{router;authService;color="";passwordCheck=!0;constructor(t,r){this.router=t,this.authService=r}ngOnInit(){}register=new A({name:new b("",v.required),email:new b("",[v.required,v.email]),password:new b("",[v.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),v.required]),confirmPassword:new b("",v.required)});get registerFormControl(){return this.register.controls}get email(){return this.register.get("email")}get mobileNumber(){return this.register.get("mobileNumber")}get passwordFormField(){return this.register.get("password")}checkConfirmPassword(){let t=this.register.value.password,r=this.register.value.confirmPassword;t.length===r.length&&t===r?(this.color="black",this.passwordCheck=!0):(this.color="red",this.passwordCheck=!1)}gotoLogin(){this.router.navigate(["login"])}message="";messageType="success";onSubmit(){if(this.register.valid&&this.passwordCheck){let t=ee({},JSON.parse(JSON.stringify(this.register.value)));delete t.confirmPassword;let r=t.email;this.authService.checkEmailExists(r).subscribe(i=>{console.log(i),i?(this.message="Already registered with this email",this.messageType="error",setTimeout(()=>{window.location.href=window.location.href},1e3)):this.authService.createUser(t).subscribe(s=>{s&&(this.message="User registration is success",this.messageType="success",setTimeout(()=>{this.router.navigate(["/login"])},1e3))},s=>{console.log(s),this.message="Registration failed",this.messageType="error"})},i=>{console.log(i),this.message="Registration failed",this.messageType="error"})}}static \u0275fac=function(r){return new(r||e)(g(F),g(J))};static \u0275cmp=f({type:e,selectors:[["app-resgistration"]],standalone:!0,features:[h],decls:37,vars:11,consts:[[3,"message","type"],[1,"container"],["appearance","outlined",1,"example-card"],[1,"formTag",3,"formGroup"],[1,"form"],["matInput","","type","name","formControlName","name","placeholder","UserName"],["matInput","","type","email","formControlName","email","placeholder","Password"],["matInput","","type","password","formControlName","password","placeholder","Password"],["matInput","","type","password","formControlName","confirmPassword","placeholder","Password",3,"input"],["mat-flat-button","",3,"click"],[1,"text-sm","font-light","mt-2","text-gray-500","dark:text-gray-400"],["color","primary",1,"primary",3,"click"]],template:function(r,i){r&1&&(c(0,"app-popup",0),a(1,"div",1)(2,"mat-card",2)(3,"form",3)(4,"div")(5,"h6"),l(6,"Signup"),n()(),a(7,"div",4)(8,"mat-form-field")(9,"mat-label"),l(10,"Name"),n(),c(11,"input",5),p(12,ot,2,0,"mat-error"),n(),a(13,"mat-form-field")(14,"mat-label"),l(15,"Email"),n(),c(16,"input",6),p(17,it,2,0,"mat-error"),n(),p(18,nt,2,1,"div"),a(19,"mat-form-field")(20,"mat-label"),l(21,"Password"),n(),c(22,"input",7),p(23,at,2,0,"mat-error"),n(),p(24,ct,5,5),a(25,"mat-form-field")(26,"mat-label"),l(27,"Confirm password"),n(),a(28,"input",8),w("input",function(){return i.checkConfirmPassword()}),n(),p(29,ut,2,0,"mat-error"),n(),a(30,"button",9),w("click",function(){return i.onSubmit()}),l(31,"Sign up"),n(),c(32,"hr"),a(33,"p",10),l(34," Already have an account? "),a(35,"a",11),w("click",function(){return i.gotoLogin()}),l(36,"Sign in"),n()()()()()()),r&2&&(C("message",i.message)("type",i.messageType),m(3),C("formGroup",i.register),m(9),d(i.registerFormControl.name.invalid&&i.registerFormControl.name.touched?12:-1),m(5),d(i.registerFormControl.email.invalid&&i.registerFormControl.email.touched?17:-1),m(),d(i.email!=null&&i.email.dirty?18:-1),m(5),d(i.registerFormControl.password.invalid&&i.registerFormControl.password.touched?23:-1),m(),d(i.passwordFormField!=null&&i.passwordFormField.dirty?24:-1),m(4),we("color",i.color),m(),d(i.registerFormControl.confirmPassword.invalid&&i.registerFormControl.confirmPassword.touched?29:-1))},dependencies:[M,j,N,I,R,k,L,D,O,H,G,q,B,Q,$,V,z,S,U,Z],styles:[".example-card[_ngcontent-%COMP%]{width:450px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:5%}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}mat-form-field[_ngcontent-%COMP%]{margin-top:7px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.formTag[_ngcontent-%COMP%]{padding:30px}.primary[_ngcontent-%COMP%]{color:#00f;cursor:pointer;font-weight:600;font-size:16px}mat-error[_ngcontent-%COMP%]{font-size:14px;margin-bottom:7px}"]})}return e})();var K=(()=>{class e{router;constructor(t){this.router=t}canActivate(t,r){return localStorage.getItem("email")?!0:(this.router.navigate(["/login"]),!1)}static \u0275fac=function(r){return new(r||e)(E(F))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ve=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:Ue},{path:"register",component:ze},{path:"dashboard",canActivate:[K],loadComponent:()=>import("./chunk-NLCRCAST.js").then(e=>e.DashboardComponent)},{path:"createTask",canActivate:[K],loadComponent:()=>import("./chunk-WPZICN6P.js").then(e=>e.CreateTaskComponent)},{path:"createTask/:id",canActivate:[K],loadComponent:()=>import("./chunk-WPZICN6P.js").then(e=>e.CreateTaskComponent)}];var ft="@",gt=(()=>{let o=class o{constructor(r,i,s,u,y){this.doc=r,this.delegate=i,this.zone=s,this.animationType=u,this.moduleImpl=y,this._rendererFactoryPromise=null,this.scheduler=ae(he,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ROFICTY3.js").then(i=>i)).catch(i=>{throw new re(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let u=new s(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(r,i){let s=this.delegate.createRenderer(r,i);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let u=new Y(s);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(y=>{let Ze=y.createRenderer(r,i);u.use(Ze),this.scheduler?.notify(9)}).catch(y=>{u.use(s)}),u}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};o.\u0275fac=function(i){ge()},o.\u0275prov=x({token:o,factory:o.\u0275fac});let e=o;return e})(),Y=class{constructor(o){this.delegate=o,this.replay=[],this.\u0275type=1}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,r,i){this.delegate.insertBefore(o,t,r,i)}removeChild(o,t,r){this.delegate.removeChild(o,t,r)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,r,i){this.delegate.setAttribute(o,t,r,i)}removeAttribute(o,t,r){this.delegate.removeAttribute(o,t,r)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,r,i){this.delegate.setStyle(o,t,r,i)}removeStyle(o,t,r){this.delegate.removeStyle(o,t,r)}setProperty(o,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(o,t,r)),this.delegate.setProperty(o,t,r)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(o,t,r)),this.delegate.listen(o,t,r)}shouldReplay(o){return this.replay!==null&&o.startsWith(ft)}};function qe(e="animations"){return Ce("NgAsyncAnimations"),me([{provide:ve,useFactory:(o,t,r)=>new gt(o,t,r,e),deps:[P,Re,ce]},{provide:fe,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Be={providers:[Te({eventCoalescing:!0}),Ne(Ve),qe(),Ie()]};var ht=["*",[["mat-toolbar-row"]]],vt=["*","mat-toolbar-row"],Ct=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275dir=se({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let e=o;return e})(),Ge=(()=>{let o=class o{constructor(r,i,s){this._elementRef=r,this._platform=i,this._document=s}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};o.\u0275fac=function(i){return new(i||o)(g(ue),g(De),g(P))},o.\u0275cmp=f({type:o,selectors:[["mat-toolbar"]],contentQueries:function(i,s,u){if(i&1&&Me(u,Ct,5),i&2){let y;Fe(y=Se())&&(s._toolbarRows=y)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,s){i&2&&(ye(s.color?"mat-"+s.color:""),be("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[h],ngContentSelectors:vt,decls:2,vars:0,template:function(i,s){i&1&&(xe(ht),W(0),W(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let e=o;return e})();var He=(()=>{let o=class o{};o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=le({type:o}),o.\u0275inj=ne({imports:[X,X]});let e=o;return e})();function bt(e,o){e&1&&(a(0,"span",4),l(1,"Login"),n())}function yt(e,o){if(e&1){let t=_e();a(0,"span",7),w("click",function(){de(t);let i=T();return pe(i.logout())}),l(1,"Logout"),n()}}var $e=(()=>{class e{constructor(){}loginTab=!0;ngOnInit(){localStorage.getItem("email")&&(this.loginTab=!1)}logout(){localStorage.removeItem("email"),window.location.href=window.location.href}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=f({type:e,selectors:[["app-header"]],standalone:!0,features:[h],decls:15,vars:2,consts:[["color","primary",1,"navbar","stickyTop"],[1,"space-between"],[1,"nav-title"],[1,"menus"],[1,"menu"],["class","menu",4,"ngIf"],["class","menu",3,"click",4,"ngIf"],[1,"menu",3,"click"]],template:function(r,i){r&1&&(a(0,"mat-toolbar",0)(1,"div",1)(2,"div",2),l(3,"Kanban"),n(),a(4,"div",3)(5,"span",4),l(6,"Home"),n(),a(7,"span",4),l(8,"About"),n(),a(9,"span",4),l(10,"Service"),n(),a(11,"span",4),l(12,"Contact"),n(),p(13,bt,2,0,"span",5)(14,yt,2,0,"span",6),n()()()),r&2&&(m(13),C("ngIf",i.loginTab),m(),C("ngIf",!i.loginTab))},dependencies:[He,Ge,S,Oe,M,Ee],styles:[".navbar[_ngcontent-%COMP%]{background-color:#2c4c66;position:sticky}.nav-title[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin:0% 10%;font-family:Verdana,Geneva,Tahoma,sans-serif}.menu[_ngcontent-%COMP%]{color:#fff;font-size:14px;margin:0% 5%;cursor:pointer;font-family:Verdana,Geneva,Tahoma,sans-serif}.space-between[_ngcontent-%COMP%]{display:flex;flex-direction:row}.menus[_ngcontent-%COMP%]{margin-left:280%}"]})}return e})();var Qe=(()=>{class e{title="kanban";static \u0275fac=function(r){return new(r||e)};static \u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:2,vars:0,template:function(r,i){r&1&&c(0,"app-header")(1,"router-outlet")},dependencies:[Ae,$e]})}return e})();ke(Qe,Be).catch(e=>console.error(e));
