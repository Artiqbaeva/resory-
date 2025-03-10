const textEl = document.querySelector(".text");
let offset = 1;

function decrement() {
  if (offset > 1) {
    offset--;
    console.log(offset);
    textEl.innerHTML = offset;
  }
}

function increment() {
  offset++;
  console.log(offset);
  textEl.innerHTML = offset;
}
function reset() {
  offset = 1;
  textEl.innerHTML = offset;
}

function daraja(kvadrad) {
  return kvadrad * kvadrad;
}
console.log(daraja(5));
console.log(daraja(7));
console.log(daraja(3));

function greeting(names) {
  return "Hello" + names;
}
console.log(greeting(" John"));
console.log(greeting(" Selema"));
