let turn = "o";
let winner;
var owi = 0;
var xwi = 0;
let gB = ["","","","","","","","",""]
let tie = 0;
document.getElementById("turtitle").textContent= "turn: x"

function place(id){
  if (id.textContent == "" && winner == null){
    tie += 1;
    document.getElementById("turtitle").textContent= "turn: " +turn
    if (turn == "x")
  {turn = "o";}
   else
   {turn = "x";}
  id.textContent = turn
  const index = parseInt(id.getAttribute("id"));
  gB[index] = turn
  if (winner == null) { 
  if (gB[0]==gB[1] && gB[1] == gB[2] && gB[2]!="")
    {
    document.getElementById("0").style.backgroundColor = "yellow";
    document.getElementById("1").style.backgroundColor = "yellow";
    document.getElementById("2").style.backgroundColor = "yellow";}
else if (gB[3]==gB[4] && gB[4] == gB[5] && gB[5]!="")
   {
    document.getElementById("3").style.backgroundColor = "yellow";
    document.getElementById("4").style.backgroundColor = "yellow";
    document.getElementById("5").style.backgroundColor = "yellow";}
else if (gB[6]==gB[7] && gB[7] == gB[8] && gB[8]!="")
    {
    document.getElementById("6").style.backgroundColor = "yellow";
    document.getElementById("7").style.backgroundColor = "yellow";
    document.getElementById("8").style.backgroundColor = "yellow";}
else if (gB[0]==gB[3] && gB[3] == gB[6] && gB[6]!="")
    {
    document.getElementById("0").style.backgroundColor = "yellow";
    document.getElementById("3").style.backgroundColor = "yellow";
    document.getElementById("6").style.backgroundColor = "yellow";}
else if (gB[1]==gB[4] && gB[4] == gB[7] && gB[7]!="")
    {
    document.getElementById("1").style.backgroundColor = "yellow";
    document.getElementById("4").style.backgroundColor = "yellow";
    document.getElementById("7").style.backgroundColor = "yellow";}
else if (gB[2]==gB[5] && gB[5] == gB[8] && gB[8]!="")
  {
  document.getElementById("2").style.backgroundColor = "yellow";
  document.getElementById("5").style.backgroundColor = "yellow";
  document.getElementById("8").style.backgroundColor = "yellow";}
else if (gB[0]==gB[3] && gB[3] == gB[6] && gB[6]!="")
    {
    document.getElementById("0").style.backgroundColor = "yellow";
    document.getElementById("3").style.backgroundColor = "yellow";
    document.getElementById("6").style.backgroundColor = "yellow";}
else if (gB[2]==gB[4] && gB[4] == gB[6] && gB[6]!="")
  {
  document.getElementById("2").style.backgroundColor = "yellow";
    document.getElementById("4").style.backgroundColor = "yellow";
    document.getElementById("6").style.backgroundColor = "yellow";}
else if (gB[0]==gB[4] && gB[4] == gB[8] && gB[8]!="")
    {
    document.getElementById("0").style.backgroundColor = "yellow";
    document.getElementById("4").style.backgroundColor = "yellow";
    document.getElementById("8").style.backgroundColor = "yellow";}}
   
  if (id.style.backgroundColor == "yellow")
     {winner = turn;
  
      
 document.getElementById("turtitle").textContent="winner: " + winner;  
  if (winner == "x"){xwi += 1; document.getElementById("win"+winner).innerHTML = "score x <br>"+ xwi;
                     return 0;
}
  else {owi += 1; document.getElementById("win"+winner).innerHTML="score o <br>" + owi;
        return 0;
 }
}    
}if (tie == 9){document.getElementById("turtitle").textContent="tie"}}

function reset(){
tie = 0;  
turn = "o";
winner = null;
gB = ["","","","","","","","",""];
document.getElementById("turtitle").textContent= "turn: x";
for (let i = 0; i <= 8; i++) {
  const sqr = document.getElementById(String(i))
  sqr.textContent = "";
  sqr.style.backgroundColor = "white";
}}