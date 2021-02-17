

function update_progress_bar(amount){
    $('.progress-bar').css('width', amount+'%').attr('aria-valuenow', amount);
    // let bar = document.getElementById('progressbar');
    // bar.setAttribute("style", "width: " + amount.toString() + ";");
    // bar.setAttribute("aria-valuenow", amount);

    return false;
};




function main(){

    console.log("Loaded script.js");

    document.getElementById('calc').onsubmit = function() { 
        console.log(document.getElementById('fights').value);
        console.log(document.getElementById('stat2').value);
        console.log(document.getElementById('stat3').value);
        console.log(document.getElementById('stat4').value);
        console.log(document.getElementById('stat5').value);
    
        return false;

    };

    setInterval(function(){
        let bar = document.getElementById('progressbar');
        let amount = parseInt(bar.getAttribute("aria-valuenow"));
        update_progress_bar(amount+0.2);
    }, 10);



};

// A $( document ).ready() block.
$( document ).ready(main);


