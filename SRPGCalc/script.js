

function update_progress_bar(amount){
    let bar = document.getElementById('progressbar');
    bar.setAttribute("style", "height: " + amount.toString() + ";");
    bar.setAttribute("arial-valuenow", amount);

    return false;
};




function main(){

    console.log("Loaded script.js");

    document.getElementById('calculator-input').onsubmit = function() { 
        console.log(document.getElementById('fights').value);
        console.log(document.getElementById('stat2').value);
        console.log(document.getElementById('stat3').value);
        console.log(document.getElementById('stat4').value);
        console.log(document.getElementById('stat5').value);
    
        return false;
    
    
    
    };

    setInterval(function(){
        let bar = document.getElementById('progressbar');
        let amount = bar.getAttribute("aria-valuenow");
        update_progress_bar(amount+3);
    }, 3000);



};

// A $( document ).ready() block.
$( document ).ready(main);


