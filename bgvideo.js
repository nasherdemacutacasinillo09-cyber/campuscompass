(function(){
"use strict";
var v=document.getElementById("bgv");
if(!v)return;
var root=document.documentElement,KEY="cc-bgv",failed=false;

/* A slow or "data saver" connection used to HIDE the video completely. Browsers (Edge especially) often report "2g" for ordinary
   connections, and for localhost, so that hid the video for no good reason. Now it only picks the lighter phone-size file. */
var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
var saver=!!(conn&&(conn.saveData||/(^|-)2g$/.test(conn.effectiveType||"")));

/* video attributes that browsers (especially iOS Safari) need for silent autoplay */
v.muted=true;v.defaultMuted=true;v.volume=0;v.loop=true;v.autoplay=true;v.playsInline=true;
v.setAttribute("muted","");v.setAttribute("playsinline","");v.setAttribute("webkit-playsinline","");

function list(a){var s=v.getAttribute(a);return s?s.split("|").map(function(x){return x.trim()}).filter(Boolean):[]}
function mime(u){return /\.webm(\?|$)/i.test(u)?"video/webm":/\.ogv(\?|$)/i.test(u)?"video/ogg":"video/mp4"}
function base(u){return(u||"").split("?")[0].split("/").pop()}

/* small screens try the lighter file first; if it does not exist the browser simply tries the next one */
var small=saver||(window.matchMedia&&window.matchMedia("(max-width:768px), (pointer:coarse) and (max-width:1024px)").matches);
var urls=(small?list("data-mobile"):[]).concat(list("data-video"));
if(!urls.length)return;

var left=urls.length;
function fail(){left--;if(left<=0&&v.readyState===0){if(window.console)console.warn("[CampusCompass] video file not found or not playable:",urls.join(", "));failed=true;v.classList.remove("ready");root.classList.remove("has-video")}}
urls.forEach(function(u){
  var s=document.createElement("source");s.src=u;s.type=mime(u);
  s.addEventListener("error",fail);
  v.appendChild(s)});
v.preload="auto";

var warnedPlay=false;
function play(){var p=v.play();if(p&&p.catch)p.catch(function(err){
  if(!warnedPlay&&window.console){warnedPlay=true;console.info("[CampusCompass] background video is loaded but the browser blocked autoplay ("+(err&&err.name||"error")+"). It starts on the first click, tap or key press.")}})}

/* show the video only once it is really playing, so a blocked autoplay never leaves a frozen frame */
v.addEventListener("playing",function(){failed=false;v.classList.add("ready");root.classList.add("has-video")});
/* if the browser decodes the first frame but holds playback (autoplay policy, power saving), still show the video's first frame instead of nothing */
v.addEventListener("loadeddata",function(){if(!failed){v.classList.add("ready");root.classList.add("has-video")}});
/* a file that exists but cannot be decoded raises an error on the video itself, not on a <source>: report it clearly and fall back */
v.addEventListener("error",function(){var e=v.error;failed=true;v.classList.remove("ready");root.classList.remove("has-video");
  if(window.console)console.warn("[CampusCompass] background video error"+(e?" (code "+e.code+(e.message?": "+e.message:"")+")":"")+" while playing "+base(v.currentSrc))});
/* watchdog: if nothing is playing after a few seconds, say why in the console and try once more */
setTimeout(function(){if(failed||!v.paused||document.hidden)return;
  if(window.console)console.info("[CampusCompass] background video not playing yet. readyState="+v.readyState+", networkState="+v.networkState+", source="+(v.currentSrc?base(v.currentSrc):"none"));play()},3500);

/* continue from where the other page left off (same file only) */
v.addEventListener("loadedmetadata",function(){
  try{var s=JSON.parse(sessionStorage.getItem(KEY)||"null");
  if(s&&s.src===base(v.currentSrc)&&v.duration>0&&isFinite(v.duration)){
    var t=(s.t+Math.min((Date.now()-s.ts)/1000,6))%v.duration;if(t>0.2&&t<v.duration-0.2)v.currentTime=t}}catch(e){}});
function save(){try{if(v.currentSrc&&v.currentTime>0)sessionStorage.setItem(KEY,JSON.stringify({src:base(v.currentSrc),t:v.currentTime,ts:Date.now()}))}catch(e){}}
window.addEventListener("pagehide",save);

/* keep it looping and keep it playing */
v.addEventListener("ended",function(){v.currentTime=0;play()});
v.addEventListener("pause",function(){if(!document.hidden&&!v.ended&&!failed)setTimeout(function(){if(v.paused&&!document.hidden)play()},120)});
document.addEventListener("visibilitychange",function(){if(document.hidden){save();v.pause()}else play()});
window.addEventListener("pageshow",function(e){if(e.persisted)play()});

/* if the browser blocked autoplay (e.g. some phones in power-saving mode), start on the first tap or key press */
["pointerdown","touchstart","keydown"].forEach(function(t){
  window.addEventListener(t,function(){if(v.paused&&!failed)play()},{once:true,passive:true})});

v.load();play();
})();
