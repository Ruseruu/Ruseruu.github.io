let elem = [];
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
// elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};
for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]); over(elem[i]); totalSums(elem[i])};
  elem[i].children[4].children[1].onclick = function(){minus1(elem[i]); over(elem[i]); totalSums(elem[i])};
  elem[i].children[4].children[2].onclick = function(){clearBtn(elem[i]); over(elem[i]); totalSums(elem[i])};
}
  function clearBtn(elem)
    {
    elem.children[2].innerHTML = "-"
    elem.children[3].innerHTML = "-"
}
function totalSums(){
    let par = 0, over = 0, total = 0;
for(let i=1; i<=18; i++) {

    if(elem[i].children[1].innerHTML != "-")  
  par += Number.parseInt(elem[i].children[1].innerHTML);
     if(elem[i].children[2].innerHTML != "-")  
  total += Number.parseInt(elem[i].children[2].innerHTML);
    if(elem[i].children[3].innerHTML != "-")  
  over += Number.parseInt(elem[i].children[3].innerHTML);
}
     let totals = document.getElementById("totals")
    totals.children[1].innerHTML = par;
    totals.children[2].innerHTML = total;
    totals.children[3].innerHTML = over;
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
 function over(elem)
{
  if(elem.children[2].innerHTML != "-")
    elem.children[3].innerHTML = elem.children[1].innerHTML - elem.children[2].innerHTML;
  }
//create a minus1 function
  function minus1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  
  }
  }


