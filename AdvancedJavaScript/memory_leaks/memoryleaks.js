let cnt = 0;
let int = setInterval(function(){
    if(cnt < 10)
    {
        cnt++;
    console.log(cnt)
    }
    else{
        clearInterval(int);  //even if the if statement finsihes the setTimerval remains so we should clear it to prevent memory leaks
        console.log("finished");
    }
}, 500);