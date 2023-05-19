const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = 0;
document.querySelector("h1").onmouseover = event => {
  const interval = setInterval(() =>{
  event.target.innerText = event.target.innerText.split("")
  .map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)]
  })
  .join("");

  if(iterations>= event.target.dataset.value.length) {
   clearInterval(interval);
  }
  iterations += 1/3;  
}, 30);
}
let iter = 0;
document.querySelector("#jiaansh").onmouseover = event => {
  const interval = setInterval(() =>{
  event.target.innerText = event.target.innerText.split("")
  .map((letter, index) => {
    if(index < iter) {
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)]
  })
  .join("");

  if(iter>= event.target.dataset.value.length) {
   clearInterval(interval);
  }
  iter += 1/3;  
}, 30);
}