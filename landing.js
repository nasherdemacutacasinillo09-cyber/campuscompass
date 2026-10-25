// CampusCompass welcome page
(function(){
var $=function(i){return document.getElementById(i)};
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---- background video: handled by bgvideo.js (shared with the main page) ---- */

/* ---- Continue: zoom + fade + navy wipe, then main.html (one transition at a time) ---- */
var going=false;
function goMain(href){
if(going)return;going=true;
document.body.classList.add("leaving");
setTimeout(function(){location.href=href},reduce?0:700)}
$("goBtn").addEventListener("click",function(e){
if(e.ctrlKey||e.metaKey||e.shiftKey||e.button===1)return;
e.preventDefault();goMain(this.getAttribute("href"))});
window.addEventListener("pageshow",function(e){if(e.persisted){going=false;document.body.classList.remove("leaving")}});

/* ---- optional interactive tutorial ---- */
var dlg=$("tut"),n=0;
var STEPS=[
{t:"Pick what you want to study",d:"Start at the top of the main page. Choose what you want to study and press Explore, then pick All, Metro Manila, or Bulacan. The Schools list updates. The menu on the side (the menu button on phones) jumps to any section.",
 demo:'<div class="demo-row" id="d1" role="group" aria-label="Region demo"><button aria-pressed="true">All</button><button aria-pressed="false">Metro Manila</button><button aria-pressed="false">Bulacan</button></div><p id="d1c">Showing: All. Try tapping a region.</p>'},
{t:"Check the admission status",d:"The Admission status board counts schools that are open now, upcoming, closed, or waiting for dates. Tap one to filter the schools. First, a quick guide to the three admission categories.",
 demo:'<div class="open-row"><button class="open-ic" id="openIc" type="button" aria-expanded="false" aria-controls="cats"><span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/></svg></span>Open</button><span class="open-hint">Tap the Open icon</span></div>'+
 '<div class="cats-wrap" id="cats"><ul class="cats">'+
 '<li style="--i:0"><i class="dotc"></i><div><b>Open Admissions</b><span>Applications are open now. You can apply.</span></div></li>'+
 '<li style="--i:1"><i class="dotc"></i><div><b>Ongoing Admissions</b><span>The admission process is already in progress. Applications, exams, or results may still be happening.</span></div></li>'+
 '<li style="--i:2"><i class="dotc"></i><div><b>Closed Admissions</b><span>The application period has ended.</span></div></li>'+
 '</ul><p class="cats-note">Demonstration only. These three names are a teaching guide. They do not appear on, or change, the real website.</p></div>'},
{t:"Find the school on the map",d:"Each school card shows its location, a How to get there list, and a Get directions button. The Admission map shows every school as a pin. Tap a pin to open that school's details.",
 demo:'<div class="demo-row" id="d3"><button class="pin g" data-m="Green pin: applications are open now."><i></i>Green</button><button class="pin y" data-m="Yellow pin: applications are upcoming."><i></i>Yellow</button><button class="pin r" data-m="Red pin: applications are closed."><i></i>Red</button><button class="pin n" data-m="Gray pin: the school has not shared its dates yet (Dates TBA)."><i></i>Gray</button></div><p id="d3c">Tap a pin color to see what it means.</p>'},
{t:"Watch the calendar",d:"The Admission calendar marks when applications open, when they close, and when exams happen for the schools in your filters. Use Previous and Next to change the month, and tap a day to see what is scheduled.",
 demo:'<div class="demo-row" id="d4"><button class="pin g" data-m="Green dot: applications open on this day."><i></i>Applications open</button><button class="pin r" data-m="Red dot: this is a deadline."><i></i>Deadline</button><button class="pin y" data-m="Yellow dot: an entrance exam is scheduled."><i></i>Exam</button></div><p id="d4c">Tap a dot color to see what it means.</p>'},
{t:"Compare 2 or 3 schools",d:"Tick Compare on 2 or 3 school cards. A bar appears at the bottom with Compare now, and a pop-up lines the schools up side by side. It is not a ranking.",
 demo:'<ul class="demo-chk"><li><label><input type="checkbox" class="d5"> Sample school A</label></li><li><label><input type="checkbox" class="d5"> Sample school B</label></li><li><label><input type="checkbox" class="d5"> Sample school C</label></li></ul><div class="demo-row" style="margin-top:12px"><button id="d5go" disabled>Compare now</button></div><p id="d5c">Tick at least 2 sample schools.</p>'},
{t:"Prepare your requirements",d:"The Requirements section has a checklist of documents schools commonly ask for. Tick what you already have and the progress bar fills. Open a school's Full details to see its own requirements, then follow the How to apply steps.",
 demo:'<ul class="demo-chk"><li><label><input type="checkbox" class="d6"> Report card (Form 138)</label></li><li><label><input type="checkbox" class="d6"> PSA birth certificate</label></li><li><label><input type="checkbox" class="d6"> Good moral certificate</label></li></ul><div class="bar"><div id="d6b"></div></div><p id="d6c">0 of 3 ready</p>'}
];
var last=STEPS.length-1;

function wire(){
var el=$("tutDemo"),i;
if(n===0){var b=el.querySelectorAll("#d1 button");b.forEach(function(x){x.onclick=function(){b.forEach(function(y){y.setAttribute("aria-pressed",y===x)});$("d1c").textContent="Showing: "+x.textContent+". On the real site this filters the schools."}})}
if(n===1){var ic=$("openIc"),cw=$("cats");
ic.onclick=function(){var o=!cw.classList.contains("open");cw.classList.toggle("open",o);ic.setAttribute("aria-expanded",o?"true":"false")}}
if(n===2||n===3){var g=el.querySelectorAll(".demo-row button"),c=el.querySelector("#d"+(n+1)+"c");g.forEach(function(x){x.onclick=function(){c.textContent=x.getAttribute("data-m")}})}
if(n===4){var cb=el.querySelectorAll(".d5"),go=$("d5go"),m=$("d5c");
cb.forEach(function(x){x.onchange=function(){var k=[].filter.call(cb,function(y){return y.checked}).length;
if(k>3){x.checked=false;k=3}
go.disabled=k<2;m.textContent=k<2?"Tick at least 2 sample schools.":k+" selected. Press Compare now."}});
go.onclick=function(){m.textContent="On the real site, a pop-up opens with the schools side by side. (Demo only. Nothing is saved.)"}}
if(n===5){var ck=el.querySelectorAll(".d6");ck.forEach(function(x){x.onchange=function(){var k=[].filter.call(ck,function(y){return y.checked}).length;
$("d6b").style.width=(k/ck.length*100)+"%";$("d6c").textContent=k+" of "+ck.length+" ready"}})}}

function draw(){
var s=STEPS[n];
$("tutStep").textContent="Step "+(n+1)+" of "+STEPS.length;
$("tutT").textContent=s.t;$("tutD").textContent=s.d;$("tutDemo").innerHTML=s.demo;
$("tutDots").innerHTML=STEPS.map(function(x,i){return '<span'+(i===n?' class="on"':'')+'></span>'}).join("");
$("tutBack").style.visibility=n===0?"hidden":"visible";
$("tutNext").textContent=n===last?"Continue to CampusCompass":"Next";
var tb=$("tutBody");tb.classList.remove("swap");void tb.offsetWidth;tb.classList.add("swap");
wire()}

function openT(){n=0;draw();dlg.showModal();requestAnimationFrame(function(){requestAnimationFrame(function(){dlg.classList.add("show")})})}
function closeT(){dlg.classList.remove("show");setTimeout(function(){try{dlg.close()}catch(e){}$("tutBtn").focus()},220)}

$("tutBtn").addEventListener("click",openT);
document.addEventListener("click",function(e){var b=e.target.closest(".lbtn,.tut-x,.open-ic,.demo-row button");if(!b||b.disabled)return;b.classList.remove("pulse");void b.offsetWidth;b.classList.add("pulse")});
document.addEventListener("animationend",function(e){if(e.animationName==="glowPulse")e.target.classList.remove("pulse")});
$("tutNext").onclick=function(){if(n===last){goMain("main.html");return}n++;draw()};
$("tutBack").onclick=function(){if(n>0){n--;draw()}};
$("tutSkip").onclick=$("tutX").onclick=closeT;
dlg.addEventListener("cancel",function(e){e.preventDefault();closeT()});
/* Close on a backdrop click. The position is measured when the press STARTS: measuring on "click" is wrong,
   because pressing Next changes the step first, the dialog resizes, and the same click then lands "outside". */
var downOut=false;
dlg.addEventListener("pointerdown",function(e){var r=dlg.getBoundingClientRect();downOut=e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom});
dlg.addEventListener("click",function(e){var out=downOut&&e.target===dlg;downOut=false;if(out)closeT()});
dlg.addEventListener("keydown",function(e){if(e.key==="ArrowRight"&&n<last){n++;draw()}else if(e.key==="ArrowLeft"&&n>0){n--;draw()}});

/* ---- full-screen video section below the welcome screen ----
   Plays by itself (muted, as browsers require) when at least half of the section is on screen, pauses when you scroll away,
   and shows a friendly message instead of a broken player if the file is missing or cannot be played. */
(function(){
var vin=$("vidIn"),v=$("introVid"),err=$("vidErr"),sec=$("vidSec");
if(!vin||!v||!sec)return;
var broken=false,inView=false,userPaused=false;
function showErr(){broken=true;if(err)err.hidden=false;v.removeAttribute("controls");try{v.pause()}catch(e){}}
var srcs=v.querySelectorAll("source"),left=srcs.length;
for(var i=0;i<srcs.length;i++)srcs[i].addEventListener("error",function(){left--;if(left<=0)showErr()});
v.addEventListener("error",showErr);
v.addEventListener("loadedmetadata",function(){broken=false;if(err)err.hidden=true;v.setAttribute("controls","")});
v.muted=true;v.defaultMuted=true;v.playsInline=true;v.setAttribute("muted","");v.setAttribute("playsinline","");
/* re-run the source selection now that the listeners exist, so a missing file is always reported */
v.load();
setTimeout(function(){if(v.networkState===3)showErr()},1200);

function play(){
  if(broken||userPaused)return;
  if(v.ended)v.currentTime=0;
  var p=v.play();if(p&&p.catch)p.catch(function(){/* blocked or not ready: the viewer can press play */})}
/* remember a pause the viewer chose on purpose, so scrolling back does not override it */
v.addEventListener("pause",function(){if(inView&&!v.ended&&!document.hidden)userPaused=true});
v.addEventListener("play",function(){userPaused=false});
v.addEventListener("loadeddata",function(){if(inView)play()});

if("IntersectionObserver" in window){
  new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.intersectionRatio>=.5){inView=true;play()}
    else if(e.intersectionRatio<.2){inView=false;userPaused=false;try{v.pause()}catch(x){}}
  })},{threshold:[0,.2,.5,.75,1]}).observe(sec);
}
document.addEventListener("visibilitychange",function(){if(document.hidden){try{v.pause()}catch(e){}}else if(inView)play()});
/* stop the video when leaving for the main site */
var go=$("goBtn");if(go)go.addEventListener("click",function(){try{v.pause()}catch(e){}});
})();
})();
