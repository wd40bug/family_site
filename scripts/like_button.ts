const counter = document.querySelector("#counter");
counter.textContent = (0).toString();
function test() {
  counter.textContent = (parseInt(counter.textContent) + 1).toString()
}
counter.addEventListener('click', test)