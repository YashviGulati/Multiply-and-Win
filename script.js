var playing = false; 
var score;
var action;
var timeremaining;
var correctAnswer;
var k;

document.getElementById("start").onclick = function(){
    if(playing==true){
        location.reload();
    }
    else{
        
        playing= true;
        score=0;
        k=0;
document.getElementById("scorevalue").innerHTML= score; 
        
document.getElementById("timeleft").style.display="block";
        timeremaining=60;
 document.getElementById('timeleftval').innerHTML= timeremaining; 
        document.getElementById("end").style.display="none";
        document.getElementById("start").innerHTML="Reset Game";
        
Countdown();
      ques();
    }
}
for(j=1;j<5;j++){
document.getElementById("b"+j).onclick=function(){
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            score++;
            k++;
            document.getElementById("scorevalue").innerHTML= score;
            
        document.getElementById("incorrect").style.display="none";
    document.getElementById("correct").style.display="block";
            setTimeout(function(){
                document.getElementById("correct").style.display="none";
            },500);
            ques();
        }                
            else{
                k++;
                 document.getElementById("correct").style.display="none";
    document.getElementById("incorrect").style.display="block";
            setTimeout(function(){
                document.getElementById("incorrect").style.display="none";
            },500);
                ques();
            }
            
        }
}
}

function Countdown(){
    action= setInterval(function(){
     timeremaining-=1;
document.getElementById('timeleftval').innerHTML= timeremaining;
        if(timeremaining==0){
            stopcountdown();
            document.getElementById('end').style.display="block";
            document.getElementById('end').innerHTML= "<p>Game Over!</p> </p>Your score is " + score+"/"+ k +".</p>";
        document.getElementById('timeleft').style.display="none";
            
            document.getElementById('correct').style.display="none";
            document.getElementById('incorrect').style.display="none";
            

            playing=false;
            document.getElementById('start').innerHTML="Start Game";
        }
    }, 1000);
    
}

function stopcountdown(){
    clearInterval(action);
    
}

function ques(){
    var x= 1+Math.round(Math.random()*9);
    var y= 1+Math.round(Math.random()*9);
    correctAnswer= x*y;
    document.getElementById("question").innerHTML= x + "x" + y;
    var correctPos=1+Math.round(Math.random()*3);
    document.getElementById("b"+ correctPos).innerHTML= correctAnswer;
    
    var answers= [correctAnswer];
    
    
    for(i=1;i<5;i++){
        if(i!= correctPos){
           do{
    var a=1+Math.round(Math.random()*9);
    var b= 1+Math.round(Math.random()*9);
    var wrongans = a*b;
                 }while(answers.indexOf(wrongans)>-1);
            document.getElementById("b"+i).innerHTML= wrongans;
            
            answers.push(wrongans);
            
        }
    }
    
}