const MONSTER_TABLE_NAME = "monstertable";
const MONSTER_TABLE_BODY = "monstertablebody";
const STATS_FORM_NAME = "calc";

const EX_TR = ["Rat", 1, 0, 0, 0, 0, 0, 0, 0]


function insert_monster(monster){
    var row = document.getElementById(MONSTER_TABLE_BODY).insertRow();
    var i = 0;
    monster.forEach(item => {
        let y = row.insertCell(i);
        y.innerHTML = item
    });
};

function populate_monster_table(){
    setInterval(function(){
        insert_monster(EX_TR);
    }, 1000)

    return false;
};




function main(){

    console.log("Loaded script.js");

    document.getElementById(STATS_FORM_NAME).onsubmit = function() { 
        console.log(document.getElementById('fights').value);
        console.log(document.getElementById('stat2').value);
        console.log(document.getElementById('stat3').value);
        console.log(document.getElementById('stat4').value);
        console.log(document.getElementById('stat5').value);
    
        return false;

    };




};

// A $( document ).ready() block.
$( document ).ready(main);


