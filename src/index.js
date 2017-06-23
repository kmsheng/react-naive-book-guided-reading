const pad = document.getElementById('pad');
const btnAdd = document.getElementById('btn-add');

let counterValue = 0;

btnAdd.addEventListener('click', () => {
  counterValue += 1;
  pad.innerHTML = counterValue;
});
