!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vueYandexMaps=e()}(this,function(){"use strict";var t={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.ymapId}})},staticRenderFns:[],data:function(){return{ymapId:"yandexMap"+Math.round(1e5*Math.random())}},props:{latitude:{type:Number,required:!0},longtitude:{type:Number,required:!0},hintContent:String,balloonContent:String},computed:{coords:function(){return[this.latitude,this.longtitude]}},beforeCreate:function(){var t=this;if(!this.$ymapEventBus.scriptIsNotAttached)return!1;var e=document.createElement("SCRIPT");e.setAttribute("src","https://api-maps.yandex.ru/2.1/?lang=ru_RU"),e.setAttribute("async",""),e.setAttribute("defer",""),document.body.appendChild(e),this.$ymapEventBus.scriptIsNotAttached=!1,e.onload=function(){t.$ymapEventBus.ymapReady=!0,t.$ymapEventBus.$emit("scriptIsLoaded")}},created:function(){var t=this;window.addEventListener("DOMContentLoaded",function(){function e(){console.log(this.ymapId),n=new ymaps.Map(this.ymapId,{center:this.coords,zoom:18}),a=new ymaps.Placemark(this.coords,{hintContent:this.hintContent,balloonContent:this.balloonContent}),n.geoObjects.add(a)}var n,a;t.$ymapEventBus.ymapReady?ymaps.ready(e.bind(t)):t.$ymapEventBus.$on("scriptIsLoaded",function(){ymaps.ready(e.bind(t))})})}},e=function(e){e.component("yandex-map",t),e.prototype.$ymapEventBus=new e({data:{ymapReady:!1,scriptIsNotAttached:!0}})};return window.Vue&&(window.YMapPlugin=t,Vue.use(e)),t.install=e,t});