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

/*Player Change Enter Button*/

$(document).ready(()=> {

  $('#enter-players').on('click', () => {
    change();
  });
});
