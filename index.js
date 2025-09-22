function cal(){
  question=document.getElementById("question").value;
  answer=eval(question);
  console.log(answer);
  document.getElementById("answer").textContent=`Answer Is: ${answer}`;
}
