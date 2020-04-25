let running = false;
let runner;

let timeup = function(sorb){
    if(!running){
        let holder,tHolder;
        if(sorb == "break"){
            holder = document.getElementById("breakview");
        }
        else{
            holder = document.getElementById("sessionview");
            tHolder = document.getElementById("timeview");
        }
        if(parseInt(holder.innerHTML) != 60){
            holder.innerHTML = parseInt(holder.innerHTML)+ 1;
            if(tHolder){
                tHolder.innerHTML = parseInt(holder.innerHTML) + ":00"
            }
        }
    }
}

let timedown = function(sorb){
    if(!running){
        let holder,tHolder;
        if(sorb == "break"){
            holder = document.getElementById("breakview");
        }
        else{
            holder = document.getElementById("sessionview");
            tHolder = document.getElementById("timeview");
        }
        if(parseInt(holder.innerHTML) != 0){
            holder.innerHTML = parseInt(holder.innerHTML)- 1;
            if(tHolder){
                tHolder.innerHTML = parseInt(holder.innerHTML) + ":00"
            }
        }
    }  
}

let run = function(){
    if(!runner){
        runner = setInterval(timer,1000);
        running = true;
    }  
}

let timer = function(){
    let tholder = document.getElementById("timeview");
    let mholder = document.getElementById("modeview");
    let array;
    if((tholder.innerHTML == "0:00")){
        if(mholder.innerHTML == "Session"){
            mholder.innerHTML = "Break";
            tholder.innerHTML = document.getElementById("breakview").innerHTML + ":00";
        }
        else{
            mholder.innerHTML = "Session";
            tholder.innerHTML = document.getElementById("sessionview").innerHTML + ":00";
        }
    }
    else{
        array = tholder.innerHTML.split(":");
        if(array[1] == "00"){
            array[0] = parseInt(array[0]) - 1;
            array[1] = "59";
            tholder.innerHTML = array.join(":");
        }
        else{
            array[1] = ("0" + (parseInt(array[1]) - 1)).slice(-2);
            tholder.innerHTML = array.join(":");
        }
    }
}

let pause = function(){
    clearInterval(runner);
    runner = null;
}

let refresh = function(){
    clearInterval(runner);
    runner = null;
    running = false;
    document.getElementById("timeview").innerHTML = "25:00";
    document.getElementById("modeview").innerHTML = "Session";
    document.getElementById("breakview").innerHTML = "5";
    document.getElementById("sessionview").innerHTML = "25";
}

let stop = function(){
    clearInterval(runner);
    runner = null;
    running = false;
    document.getElementById("timeview").innerHTML = document.getElementById("sessionview").innerHTML +":00";
    document.getElementById("modeview").innerHTML = "Session";
}