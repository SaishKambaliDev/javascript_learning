let pr = new Promise(function (resolved, reject){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if(rn > 5) resolved("resolved with " + rn);
        else reject("rejected with " + rn);
    }, 2000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});