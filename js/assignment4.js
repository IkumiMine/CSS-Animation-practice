https://www.w3schools.com/jsref/event_animationend.asp

//VARIALBES
var questionForm = document.forms.questionForm;
questionForm.onsubmit = displayResult;

var flex = document.getElementsByClassName("flex");
var spendTime; 

/*
var background = document.getElementsByClassName("background");

var cloud1 = document.getElementById("cloud1");
var cloud2 = document.getElementById("cloud2");
var minicloud = document.getElementById("minicloud");
var title = document.getElementById("title");
var instruction = document.getElementById("instruction");
var label = document.getElementsByTagName("label");
console.log(label);
*/
//**STILL WORKING ON
//FUNCTION TO START ANIMATION WHEN FORM IS SUBMITTED
/*function startAnimation() {
  spendTime = document.getElementById("spendTime").selectedIndex;
  
  if(spendTime === 0){
    var label = document.getElementById("label");
    label.innerHTML = "How would you like to spend your time? Please answer the question."
    return false
  } else {

    for(var i = 0; i < questionForm.length; i++){
      console.log(questionForm[i])
      questionForm[i].classList.add("hideElements");
    }
    label.classList.add("hideElements");
    background[0].classList.add("background-dark");
    cloud1.classList.add("hideElements");
    cloud2.classList.add("hideElements");
    minicloud.classList.add("hideElements");
    title.classList.add("hideElements");
    instruction.classList.add("hideElements");
  }
}*/

//FUNCTION TO DISPLAY RESULT WHEN FORM IS SUBMITTED
function displayResult() {

  spendTime = document.getElementById("spendTime").selectedIndex; 
  var label = document.getElementById("label");  

  //DISPLAY RESULT ACCORDING TO THE SELECTED INDEX
  if(spendTime === 0){
    label.innerHTML = "How would you like to spend your time? Please answer the question.";  
  } else if (spendTime === 1) {
    label.innerHTML = "How would you like to spend your time?";
    flex[0].classList.add("showResult");
  } else if (spendTime === 2) {
    label.innerHTML = "How would you like to spend your time?";
    flex[1].classList.add("showResult");
  } else if (spendTime === 3) {
    label.innerHTML = "How would you like to spend your time?";
    flex[2].classList.add("showResult");
  } else if (spendTime === 4) {
    label.innerHTML = "How would you like to spend your time?";
    flex[3].classList.add("showResult");
  }
  return false;
}//END DISPLAYRESULT

//ASSIGN EACH BUTTON
var resetBtn = document.getElementsByClassName("resetBtn");
resetBtn[0].onclick = resetResult;
resetBtn[1].onclick = resetResult;
resetBtn[2].onclick = resetResult;
resetBtn[3].onclick = resetResult;

//FUNCTION TO DELETE RESULT WHEN THE BUTTON IS CLICKED
function resetResult () { 
   
  spendTime = document.getElementById("spendTime").selectedIndex; 
 
  //
  if(flex[0].classList.contains("showResult")){
    flex[0].classList.remove("showResult");
    spendTime = 0;
  } else if (flex[1].classList.contains("showResult")){
    flex[1].classList.remove("showResult");
    spendTime = 0;
  } else if (flex[2].classList.contains("showResult")){
    flex[2].classList.remove("showResult");
    spendTime = 0;
  } else if (flex[3].classList.contains("showResult")){
    flex[3].classList.remove("showResult");
    spendTime = 0;
  }

}//END RESETRESULT FUNCTION
