console.log("Loaded script.js")



function update_progress_bar(amount){
    let bar = document.getElementById('progress-bar');
    bar.setAttribute("aria-valuenow", amount);
    return false;
}

setInterval(function(){
    let bar = document.getElementById('progress-bar');
    let amount = bar.getAttribute("aria-valuenow");
    update_progress_bar(amount+3);
}, 3000);


document.getElementById('calculator-input').onsubmit = function() { 
    console.log(document.getElementById('fights').value);
    console.log(document.getElementById('stat2').value);
    console.log(document.getElementById('stat3').value);
    console.log(document.getElementById('stat4').value);
    console.log(document.getElementById('stat5').value);

    return false;



};