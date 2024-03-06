var questions = []
var score = 0;     



for (var i = 0; i < questions.length; i++) {
   var responce = window.prompt(questions[i].prompt);
   if (responce == questions[i].answer){
       score++;
       alert("well done!!");
   }else{
         alert("Nice try Dummmie!");}
        }
alert("Overall you got" + score + "/" + questions.length);