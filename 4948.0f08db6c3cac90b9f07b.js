(self.webpackChunkEduSocial=self.webpackChunkEduSocial||[]).push([[4948],{4948:(t,n,o)=>{"use strict";o.r(n),o.d(n,{HomePageModule:()=>u});var e=o(6274),i=o(4683),s=o(4988),c=o(3991),r=o(3606),p=o(1887),g=o(4357);function a(t,n){if(1&t&&(r.TgZ(0,"div",21),r.TgZ(1,"h6"),r._uU(2),r.qZA(),r.TgZ(3,"p"),r._uU(4),r.qZA(),r.qZA()),2&t){const t=n.$implicit;r.xp6(2),r.Oqu(t.user.first_name+" "+t.user.last_name),r.xp6(2),r.Oqu(t.content)}}function d(t,n){if(1&t&&(r.TgZ(0,"div",19),r.YNc(1,a,5,2,"div",20),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(1),r.Q6J("ngForOf",t.comments)}}function l(t,n){if(1&t){const t=r.EpF();r.TgZ(0,"div",8),r.TgZ(1,"div",9),r.TgZ(2,"div",10),r.TgZ(3,"div",11),r.TgZ(4,"h3"),r._uU(5),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(6,"div",12),r.TgZ(7,"p"),r._uU(8),r.qZA(),r.qZA(),r.TgZ(9,"div",13),r._UZ(10,"img",14),r.qZA(),r.TgZ(11,"div",15),r.TgZ(12,"ion-item"),r.TgZ(13,"ion-input",16),r.NdJ("ngModelChange",function(n){const o=r.CHM(t).index;return r.oxw().postComment[o]=n}),r.qZA(),r.qZA(),r.TgZ(14,"h6",5),r.NdJ("click",function(){const n=r.CHM(t).index;return r.oxw().postNewComment(n)}),r._uU(15,"Comentar"),r.qZA(),r.qZA(),r.YNc(16,d,2,1,"div",17),r.TgZ(17,"h6",18),r.NdJ("click",function(){const n=r.CHM(t).index;return r.oxw().toggle(n)}),r._uU(18),r.qZA(),r.qZA()}if(2&t){const t=n.$implicit,o=n.index,e=r.oxw();r.xp6(5),r.Oqu(t.user.first_name+" "+t.user.last_name),r.xp6(3),r.hij(" ",t.content," "),r.xp6(2),r.s9C("src",t.public_url,r.LSH),r.xp6(3),r.Q6J("ngModel",e.postComment[o]),r.xp6(3),r.Q6J("ngIf",e.hideRuleContent[o]),r.xp6(2),r.Oqu(e.hideRuleContent[o]?"Esconder Coment\xe1rios":"Exibir Coment\xe1rios")}}const m=[{path:"",component:(()=>{class t{constructor(t,n){this.http=t,this.storage=n,this.hideRuleContent=[],this.postComment=[],this.buttonName="Expand",this.postList=[],this.post="",this.userId=null,this.getPosts()}toggle(t){this.hideRuleContent[t]=!this.hideRuleContent[t]}getPosts(){this.http.get("https://edu-social.herokuapp.com/api/posts").subscribe(t=>{this.postList=t.data,console.log(t)})}sendPost(){if(this.post){let t=new FormData;t.append("file",this.file,this.file.name),t.append("content",this.post),t.append("user_id",this.userId),this.http.post("https://edu-social.herokuapp.com/api/posts",t).subscribe(t=>{this.getPosts(),this.post="",this.fileComponent="",console.log(t)})}}postNewComment(t){console.log(this.postComment[t]),this.postComment[t]&&this.http.post("https://edu-social.herokuapp.com/api/comments",{content:this.postComment[t],user_id:this.userId,post_id:t+1}).subscribe(n=>{this.getPosts(),this.postComment[t]="",console.log(n)})}onFileChange(t){this.file=t.target.files[0],console.log(this.file)}ionViewDidEnter(){this.storage.get("userId").then(t=>{console.log(t),this.userId=t},t=>{}).catch(t=>{})}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(p.eN),r.Y36(g.V))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-home"]],decls:12,vars:4,consts:[[1,"head-spacer"],[1,"bg-gray",3,"fullscreen"],[1,"create-post"],[3,"ngModel","ngModelChange"],["type","file",3,"ngModel","ngModelChange","change"],[3,"click"],[1,"post-list"],["class","post-card",4,"ngFor","ngForOf"],[1,"post-card"],[1,"post_topbar"],[1,"usy-dt"],[1,"usy-name"],[1,"post-text"],[1,"image"],[3,"src"],[1,"post-comment"],["placeholder","Adicionar coment\xe1rio",1,"",3,"ngModel","ngModelChange"],["class","post_bottom",4,"ngIf"],[1,"show-comments",3,"click"],[1,"post_bottom"],["class","comments",4,"ngFor","ngForOf"],[1,"comments"]],template:function(t,n){1&t&&(r._UZ(0,"div",0),r.TgZ(1,"ion-content",1),r.TgZ(2,"div",2),r.TgZ(3,"ion-item"),r.TgZ(4,"ion-label"),r._uU(5,"Nova postagem"),r.qZA(),r.TgZ(6,"ion-textarea",3),r.NdJ("ngModelChange",function(t){return n.post=t}),r.qZA(),r.qZA(),r.TgZ(7,"input",4),r.NdJ("ngModelChange",function(t){return n.fileComponent=t})("change",function(t){return n.onFileChange(t)}),r.qZA(),r.TgZ(8,"h6",5),r.NdJ("click",function(){return n.sendPost()}),r._uU(9,"Enviar"),r.qZA(),r.qZA(),r.TgZ(10,"div",6),r.YNc(11,l,19,6,"div",7),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("fullscreen",!0),r.xp6(5),r.Q6J("ngModel",n.post),r.xp6(1),r.Q6J("ngModel",n.fileComponent),r.xp6(4),r.Q6J("ngForOf",n.postList))},directives:[i.W2,i.Ie,i.Q$,i.g2,i.j9,s.JJ,s.On,s.Fj,e.sg,i.pK,e.O5],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.bg-gray[_ngcontent-%COMP%]{background-color:#f8f9fa}.head-spacer[_ngcontent-%COMP%]{display:block;height:76px}.create-post[_ngcontent-%COMP%]{z-index:5;width:750px;border-radius:10px;margin-left:auto;margin-right:auto;position:sticky;top:0;background-color:#fff;padding:10px;margin-bottom:10px;border:1px solid #dee1e6}.create-post[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#f8f8f8;background-color:#f8f8f8}.create-post[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#474747;text-align:right;margin-top:5px}.create-post[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}.post-list[_ngcontent-%COMP%]{width:750px;margin-left:auto;margin-right:auto}.post-card[_ngcontent-%COMP%]{background-color:#fff;padding:20px;margin-bottom:10px;border:1px solid #dee1e6;border-radius:10px}.post-card[_ngcontent-%COMP%]   .post_topbar[_ngcontent-%COMP%]   .usy-dt[_ngcontent-%COMP%]{border-bottom:1px solid #c0c3c8}.post-card[_ngcontent-%COMP%]   .post_topbar[_ngcontent-%COMP%]   .usy-dt[_ngcontent-%COMP%]   .usy-name[_ngcontent-%COMP%]{color:#000;font-size:18px;text-transform:capitalize;font-weight:600}.post-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{max-height:250px;margin-bottom:10px}.post-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:240px;display:block;margin-left:auto;margin-right:auto}.post-card[_ngcontent-%COMP%]   .post-comment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#f8f8f8;background-color:#f8f8f8}.post-card[_ngcontent-%COMP%]   .post-comment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#474747;text-align:right;margin-top:5px}.post-card[_ngcontent-%COMP%]   .post-comment[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}.post-card[_ngcontent-%COMP%]   .post_bottom[_ngcontent-%COMP%]{padding-left:15px}.post-card[_ngcontent-%COMP%]   .post_bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{padding-top:5px;border-top:1px solid #d1d1d1;margin-bottom:5px}.post-card[_ngcontent-%COMP%]   .post_bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#474747;font-size:16px;margin-top:5px}.post-card[_ngcontent-%COMP%]   .show-comments[_ngcontent-%COMP%]{color:#474747;margin-top:5px;font-size:14px}.post-card[_ngcontent-%COMP%]   .show-comments[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary);cursor:pointer}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(m)],c.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[e.ez,s.u5,i.Pc,h]]}),t})()}}]);