let hour = document.getElementById("houri");

let startBtn = document.querySelector(".startBtn");
let stopBtn = document.querySelector(".stopBtn");
const countdownele = document.getElementById("countdown");
let pauseBtn = document.querySelector(".pauseBtn");
let hval = 00;
let exe=false;
let istimer=false;

hour.addEventListener("change", (e) => {
  hval = Number(hour.value);
  console.log(hval);
  exe=false;
});
let mval = 00;
let sval = 00;
// console.log(hour);
let minutes = document.getElementById("minutei");
minutes.addEventListener("change", (e) => {
  mval = Number(minutes.value);
  console.log(mval);
  
  exe=false;


});
let seconds = document.getElementById("secondi");
seconds.addEventListener("change", (e) => {
  sval = Number(seconds.value);
  console.log(sval);
  exe=false;


});




startBtn.addEventListener("click", (e) => {
  if(exe===false ){
    
if(istimer===true)
{
  clearInterval(my);
  timerFun();
}
else{
  timerFun();
}
  exe=true;
  }
  
  
  
});
stopBtn.addEventListener("click", (e) => {
  mystopfn();
});
pauseBtn.addEventListener("click", (e) => {
  clearInterval(my);
  timerFun();
  // setInterval(my);
});





let my,ho,mi,se;
let time;
function timerFun() {
  if (sval >= 60) {
    alert("Please Enter Valid in seconds section");
    return;
  } else if (mval >= 60) {
    alert("Please Enter Valid in minutes section");
    return;
  } else {
    istimer=true;
    //   countdownele.innerHTML = `${hval} : ${mval} : ${sval}`;
    // let h=`${hval} : ${mval} : ${sval}`;
    // console.log(h);
    time = exe===false ?  hval * 3600 + mval * 60 + sval:time;
    my = setInterval(startTime, 1000);
  }
}
function mystopfn() {
  // countdownele.innerHTML = "00 : 00 : 00";
  clearInterval(my);
 exe

}

function startTime() {
   ho = Math.floor(time / 3600);
   mi = Math.floor((time % 3600) / 60);
   se = Math.floor((time % 3600) % 60);

  // console.log("ayg");//
  // let se = time % 60;
  ho = ho < 10 ? "0" + ho : ho;
  mi = mi < 10 ? "0" + mi : mi;
  se = se < 10 ? "0" + se : se;

  countdownele.innerHTML = `${ho} : ${mi} : ${se}`;
  time--;

  if (ho == 0 && mi == 0 && se == 0) {
    
    countdownele.innerHTML = "00 : 00 : 00";
    mystopfn();
    alert("your time is exhausted");
  }
}
