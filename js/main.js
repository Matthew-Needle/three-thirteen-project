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

  if(!isNaN(p4Result)){
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

const fourthHand = () => {
  //Player 1 Fourth Hand
  const p1Field1 = document.getElementById("p1-3-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-4-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-4-answer").innerHTML = p1Result;
  }

  //Player 2 Fourth Hand
  const p2Field1 = document.getElementById("p2-3-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-4-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-4-answer").innerHTML = p2Result;
  }

  //Player 3 Fourth Hand
  const p3Field1 = document.getElementById("p3-3-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-4-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-4-answer").innerHTML = p3Result;
  };

  //Player 4 Fourth Hand
  const p4Field1 = document.getElementById("p4-3-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-4-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-4-answer").innerHTML = p4Result;
  };

  //Player 5 Fourth Hand
  const p5Field1 = document.getElementById("p5-3-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-4-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-4-answer").innerHTML = p5Result;
  };

  //Player 6 Fourth Hand
  const p6Field1 = document.getElementById("p6-3-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-4-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-4-answer").innerHTML = p6Result;
  };

}

const fifthHand = () => {
  //Player 1 Fifth Hand
  const p1Field1 = document.getElementById("p1-4-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-5-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-5-answer").innerHTML = p1Result;
  };

  //Player 2 Fifth Hand
  const p2Field1 = document.getElementById("p2-4-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-5-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-5-answer").innerHTML = p2Result;
  };

  //Player 3 Fifth Hand
  const p3Field1 = document.getElementById("p3-4-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-5-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-5-answer").innerHTML = p3Result;
  };

  //Player 4 Fifth Hand
  const p4Field1 = document.getElementById("p4-4-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-5-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-5-answer").innerHTML = p4Result;
  };


  //Player 5 Fifth Hand
  const p5Field1 = document.getElementById("p5-4-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-5-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-5-answer").innerHTML = p5Result;
  };

  //Player 6 Fifth Hand
  const p6Field1 = document.getElementById("p6-4-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-5-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-5-answer").innerHTML = p6Result;
  };

};

const sixthHand = () => {
  //Player 1 Sixth Hand
  const p1Field1 = document.getElementById("p1-5-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-6-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-6-answer").innerHTML = p1Result;
  };

  //Player 2 Sixth Hand
  const p2Field1 = document.getElementById("p2-5-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-6-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-6-answer").innerHTML = p2Result;
  };

  //Player 3 Sixth Hand
  const p3Field1 = document.getElementById("p3-5-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-6-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-6-answer").innerHTML = p3Result;
  };

  //Player 4 Sixth Hand
  const p4Field1 = document.getElementById("p4-5-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-6-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-6-answer").innerHTML = p4Result;
  };

  //Player 5 Sixth Hand
  const p5Field1 = document.getElementById("p5-5-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-6-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-6-answer").innerHTML = p5Result;
  };

  //Player 6 Sixth Hand
  const p6Field1 = document.getElementById("p6-5-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-6-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-6-answer").innerHTML = p6Result;
  };

};

const seventhHand = () => {
  //Player 1 Seventh Hand
  const p1Field1 = document.getElementById("p1-6-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-7-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-7-answer").innerHTML = p1Result;
  };

  //Player 2 Seventh Hand
  const p2Field1 = document.getElementById("p2-6-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-7-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-7-answer").innerHTML = p2Result;
  };

  //Player 3 Seventh Hand
  const p3Field1 = document.getElementById("p3-6-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-7-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-7-answer").innerHTML = p3Result;
  };

  //Player 4 Seventh Hand
  const p4Field1 = document.getElementById("p4-6-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-7-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-7-answer").innerHTML = p4Result;
  };

  //Player 5 Seventh Hand
  const p5Field1 = document.getElementById("p5-6-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-7-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-7-answer").innerHTML = p5Result;
  };

  //Player 6 Seventh Hand
  const p6Field1 = document.getElementById("p6-6-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-7-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-7-answer").innerHTML = p6Result;
  };

};

const eighthHand = () => {
  //Player 1 Eighth Hand
  const p1Field1 = document.getElementById("p1-7-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-8-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-8-answer").innerHTML = p1Result;
  };

  //Player 2 Eighth Hand
  const p2Field1 = document.getElementById("p2-7-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-8-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-8-answer").innerHTML = p2Result;
  };

  //Player 3 Eighth Hand
  const p3Field1 = document.getElementById("p3-7-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-8-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-8-answer").innerHTML = p3Result;
  };

  //Player 4 Eighth Hand
  const p4Field1 = document.getElementById("p4-7-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-8-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-8-answer").innerHTML = p4Result;
  };

  //Player 5 Eighth Hand
  const p5Field1 = document.getElementById("p5-7-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-8-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-8-answer").innerHTML = p5Result;
  };

  //Player 6 Eighth Hand
  const p6Field1 = document.getElementById("p6-7-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-8-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-8-answer").innerHTML = p6Result;
  };

};

const ninethHand = () => {
  //Player 1 Nineth Hand
  const p1Field1 = document.getElementById("p1-8-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-9-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-9-answer").innerHTML = p1Result;
  };

  //Player 2 Nineth Hand
  const p2Field1 = document.getElementById("p2-8-answer").innerHTML;
  const p2Field2 = document.getElementById("p2-9-value2").value;
  const p2Result =  parseFloat(p2Field1) + parseFloat(p2Field2);

  if(!isNaN(p2Result)){
    document.getElementById("p2-9-answer").innerHTML = p2Result;
  };

  //Player 3 Nineth Hand
  const p3Field1 = document.getElementById("p3-8-answer").innerHTML;
  const p3Field2 = document.getElementById("p3-9-value2").value;
  const p3Result =  parseFloat(p3Field1) + parseFloat(p3Field2);

  if(!isNaN(p3Result)){
    document.getElementById("p3-9-answer").innerHTML = p3Result;
  };

  //Player 4 Nineth Hand
  const p4Field1 = document.getElementById("p4-8-answer").innerHTML;
  const p4Field2 = document.getElementById("p4-9-value2").value;
  const p4Result =  parseFloat(p4Field1) + parseFloat(p4Field2);

  if(!isNaN(p4Result)){
    document.getElementById("p4-9-answer").innerHTML = p4Result;
  };

  //Player 5 Nineth Hand
  const p5Field1 = document.getElementById("p5-8-answer").innerHTML;
  const p5Field2 = document.getElementById("p5-9-value2").value;
  const p5Result =  parseFloat(p5Field1) + parseFloat(p5Field2);

  if(!isNaN(p5Result)){
    document.getElementById("p5-9-answer").innerHTML = p5Result;
  };

  //Player 6 Nineth Hand
  const p6Field1 = document.getElementById("p6-8-answer").innerHTML;
  const p6Field2 = document.getElementById("p6-9-value2").value;
  const p6Result =  parseFloat(p6Field1) + parseFloat(p6Field2);

  if(!isNaN(p6Result)){
    document.getElementById("p6-9-answer").innerHTML = p6Result;
  };
};

const tenthHand = () => {
  //Player 1 Tenth Hand
  const p1Field1 = document.getElementById("p1-9-answer").innerHTML;
  const p1Field2 = document.getElementById("p1-10-value2").value;
  const p1Result =  parseFloat(p1Field1) + parseFloat(p1Field2);

  if(!isNaN(p1Result)){
    document.getElementById("p1-10-answer").innerHTML = p1Result;
  };



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
