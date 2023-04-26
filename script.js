const bpmInput = document.querySelector(".bpm-input");
const beat = document.querySelectorAll(".beat");
let ms = document.querySelectorAll(".ms");
const bgText = document.querySelector(".background-text");
const calcArray = [0.25, 0.5, 0.333, 1, 2, 4];
console.log(ms, calcArray);

bpmInput.addEventListener("input", function () {
  for (let i = 0; i < calcArray.length; i++) {
    if (bpmInput.value === "" || bpmInput.value == 0) {
      let result = 0;
      ms[i].innerHTML = "-";
      ms[i].style.color = "gray";
    } else {
      let result = Math.trunc(calcArray[i] * (60 / bpmInput.value) * 1000);
      ms[i].innerHTML = result;
      ms[i].style.color = "black";

      console.log(result);
    }
    if (bpmInput.value >= 160 && bpmInput.value <= 180) {
      bgText.innerHTML = "idk... nightcore?";
    } else if (bpmInput.value >= 140 && bpmInput.value <= 159) {
      bgText.innerHTML = "dubstep?";
    } else if (bpmInput.value >= 116 && bpmInput.value <= 139) {
      bgText.innerHTML = "house?";
    } else if (bpmInput.value >= 100 && bpmInput.value <= 115) {
      bgText.innerHTML = "midtempo?";
    } else if (bpmInput.value >= 80 && bpmInput.value <= 100) {
      bgText.innerHTML = "lo-fi?";
    } else if (bpmInput.value >= 60 && bpmInput.value <= 79) {
      bgText.innerHTML = "... reggae?";
    } else if (bpmInput.value >= 40 && bpmInput.value <= 59) {
      bgText.innerHTML = "why?";
    } else if (
      (bpmInput.value >= 20 && bpmInput.value <= 39) ||
      bpmInput.value > 180
    ) {
      bgText.innerHTML = "are you ok?";
    } else {
      bgText.innerHTML = "._.";
    }
  }
});

// for (let i = 0; i < calcArray.length; i++) {
//   console.log(calcArray[i]);
// }
