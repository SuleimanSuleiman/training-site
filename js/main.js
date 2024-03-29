window.onclick = function(){

  console.log(window.scrollY);
}

/*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  };
}, 1000);

/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

 let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let statsSection = document.querySelector(".stats");


window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
}
let elements = document.querySelectorAll(".Our-Awesome-Stats-1 .container .number");
let sectionn =  document.querySelector(".Our-Awesome-Stats-1"); 
let started = false;

function startCount(ele){

    let goal = ele.dataset.goal;
    let count = setInterval(() =>{

      
  
    ele.textContent++;

    if(ele.textContent == goal){
          clearInterval(count);
      }
    },3000/goal);
};

window.onscroll = function (){

  if(window.scrollY >= sectionn.offsetTop){

    if(!started){

      elements.forEach((ele) =>{

        startCount(ele);

      });

      started = true;
    }
  }
}

// let nums = document.querySelectorAll(".stats .number");
// let started = false; // Function Started ? No

//   // Stats Increase Number
//   if (window.scrollY >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }