(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210666"],{b871:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.fail?e._e():n("el-menu-item",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{index:this.index+""},on:{click:this.load}},[n("template",{slot:"title"},[n("span",[e._v(" ☕ JDK Source Code Analysis (notes) ")])])],2),e.fail?n("el-alert",{attrs:{title:"Loading failed",type:"error",description:e.failReason,closable:!1,"show-icon":""}}):e._e()],1)},o=[],s={props:["index"],data:function(){return{notes:null,loading:!1,fail:!1,failReason:""}},methods:{load:function(){var e=this.$store.state.githubapi.api[this.index].content;this.$store.commit("setNotesUrl",{url:e}),this.$store.commit("setCurrentAsideIndex",{index:this.index}),this.$store.commit("setCurrentContent",{currentComponent:"ContentNoteList"})}}},a=s,l=n("2877"),r=Object(l["a"])(a,i,o,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d210666.dda2cccb.js.map