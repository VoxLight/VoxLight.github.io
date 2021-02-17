const MONSTER_TABLE_NAME = "monstertable";
const MONSTER_TABLE_BODY = "monstertablebody";
const STATS_FORM_NAME = "calc";

const EX_TR = document.querySelector("#monsterrow").content.cloneNode(true);
const MONSTER = ["Wolf", 5, 0, 0, 0, 0, 0, 0, 0]

function create_monster_row(monster){
    let row = EX_TR.cloneNode(true);
    let td = row.querySelectorAll("td");
    for(let i =0; i<MONSTER.length; i++){
        td[i] = MONSTER[i];
    }
    return row
};

function insert_monster(row){
    let tbody = document.getElementById(MONSTER_TABLE_BODY);
    tbody.appendChild(row);
    return false
}

function populate_monster_table(){
    setInterval(function(){
        insert_monster(create_monster_row(MONSTER));
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


