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

const thirdHand = () => {
  //Player 1 Third Hand
  const p1Field1 = document.getElementById("p1-3-value1").value;
  const p1Field2 = document.getElementById("p1-3-value2").innerHTML;
  const p1Result = parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-3-answer").innerHTML = p1Result;
  }

  //Player 2 Third Hand
  const p2Field1 = document.getElementById("p2-3-value1").value;
  const p2Field2 = document.getElementById("p2-3-value2").innerHTML;
  const p2Result = parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-3-answer").innerHTML = p2Result;
  }

  //Player 3 Third Hand
  const p3Field1 = document.getElementById("p3-3-value1").value;
  const p3Field2 = document.getElementById("p3-3-value2").innerHTML;
  const p3Result = parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-3-answer").innerHTML = p3Result;
  }

  //Player 4 Third Hand
  const p4Field1 = document.getElementById("p4-3-value1").value;
  const p4Field2 = document.getElementById("p4-3-value2").innerHTML;
  const p4Result = parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p4-3-answer").innerHTML = p4Result;
  }

  //Player 5 Third Hand
  const p5Field1 = document.getElementById("p5-3-value1").value;
  const p5Field2 = document.getElementById("p5-3-value2").innerHTML;
  const p5Result = parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-3-answer").innerHTML = p5Result;
  }

  //Player 6 Third Hand
  const p6Field1 = document.getElementById("p6-3-value1").value;
  const p6Field2 = document.getElementById("p6-3-value2").innerHTML;
  const p6Result = parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-3-answer").innerHTML = p6Result;
  }

};

/*const fourth = () => {
  const field1 = document.getElementById("hand3-answer").innerHTML;
  const field2 = document.getElementById("val-3").value;

  const result =  parseFloat(field1) + parseFloat(field2);

  if(!isNaN(result)){
    document.getElementById("hand4-answer").innerHTML = result;
  }
}; */







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
