let running = false;

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
        holder.innerHTML = parseInt(holder.innerHTML)+1;
        if(tHolder){
            tHolder.innerHTML = parseInt(holder.innerHTML) + ":00"
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

