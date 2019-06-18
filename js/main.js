/*Global Variable Section*/



/*Player Change Function*/
const change = () => {
  const a = document.getElementById("name-input-a").value;
  const b = document.getElementById("name-input-b").value;
  const c = document.getElementById("name-input-c").value;
  const d = document.getElementById("name-input-d").value;
  const e = document.getElementById("name-input-e").value;
  const f = document.getElementById("name-input-f").value;
  document.getElementById("name-output-a").innerHTML = a ;
  document.getElementById("name-output-b").innerHTML = b ;
  document.getElementById("name-output-c").innerHTML = c ;
  document.getElementById("name-output-d").innerHTML = d ;
  document.getElementById("name-output-e").innerHTML = e ;
  document.getElementById("name-output-f").innerHTML = f ;
};

const reset = () => {
  //Player Reset
  const resetP1 = document.getElementById("name-output-a");
  const resetP2 = document.getElementById("name-output-b");
  const resetP3 = document.getElementById("name-output-c");
  const resetP4 = document.getElementById("name-output-d");
  const resetP5 = document.getElementById("name-output-e");
  const resetP6 = document.getElementById("name-output-f");
  resetP1.innerHTML = "P1";
  resetP2.innerHTML = "P2";
  resetP3.innerHTML = "P3";
  resetP4.innerHTML = "P4";
  resetP5.innerHTML = "P5";
  resetP6.innerHTML = "P6";
  //Player Input Reset
  const inputA = document.getElementById("name-input-a");
  const inputB = document.getElementById("name-input-b");
  const inputC = document.getElementById("name-input-c");
  const inputD = document.getElementById("name-input-d");
  const inputE = document.getElementById("name-input-e");
  const inputF = document.getElementById("name-input-f");
  inputA.value = " ";
  inputB.value = " ";
  inputC.value = " ";
  inputD.value = " ";
  inputE.value = " ";
  inputF.value = " ";
};

const caluclate = () => {
  const field1 = document.getElementById("val-1").value;
  const field2 = document.getElementById("val-2").innerHTML;

  const result = parseFloat(field1) + parseFloat(field2);

  if(!isNaN(result)){
    document.getElementById("hand3-answer").innerHTML = result;
  }
};

const fourth = () => {
  const field1 = document.getElementById("hand3-answer").innerHTML;
  const field2 = document.getElementById("val-3").value;

  const result =  parseFloat(field1) + parseFloat(field2);

  if(!isNaN(result)){
    document.getElementById("hand4-answer").innerHTML = result;
  }
};







/*Buttons*/

$(document).ready(()=> {

  //Enter Players
  $('#enter-players').on('click', ()=> {
    change();
  });

  //Game Reset
  $('#new-game').on('click', () => {
    reset();
  });



});
