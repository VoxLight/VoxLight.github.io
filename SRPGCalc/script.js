const ROW_NAME = "monsterrow";
const MONSTER_TABLE_NAME = "monstertable";
const MONSTER_TABLE_BODY = "monstertablebody";
const STATS_FORM_NAME = "calc";

//please chnage
//comment this neesd to change
var ex_tr = null;
var monster = ["Wolf", 5, 0, 0, 0, 0, 0, 0, 0]

function create_monster_row(monster, ){
    let row = ex_tr.cloneNode(true);
    for(let i =0; i<monster.length; i++){
        row.children[0].cells[i].innerHTML = monster[i];
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
        insert_monster(create_monster_row(monster));
    }, 1000)

    return false;
};




function main(){

    console.log("Loaded script.js");

    ex_tr = document.getElementById(ROW_NAME).cloneNode(true);

    document.getElementById(STATS_FORM_NAME).onsubmit = function() {
        populate_monster_table();
        // console.log(document.getElementById('fights').value);
        // console.log(document.getElementById('stat2').value);
        // console.log(document.getElementById('stat3').value);
        // console.log(document.getElementById('stat4').value);
        // console.log(document.getElementById('stat5').value);
    
        return false;

    };




};

// A $( document ).ready() block.
$( document ).ready(main);


