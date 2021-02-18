const ROW_NAME = "monsterrow";
const TABLE_CARD_NAME = "tablecard";
const MONSTER_TABLE_NAME = "monstertable";
const MONSTER_TABLE_BODY = "monstertablebody";
const STATS_FORM_NAME = "calc";
var t = null;



function randomInt(min, max){
    return Math.random() * (max - min) + min;     // returns a random integer from 0 to 9
}

function show(ID){
    let a = document.getElementById(ID);
    a.classList.remove("d-none");
    return false;
};

function insert_monster(){
    t.row.add([
        "Wolf",
        5,
        randomInt(10, 50),
        randomInt(10, 50),
        randomInt(10, 50),
        randomInt(10, 50),
        randomInt(10, 50),
        randomInt(10, 50),
        randomInt(10, 50)
    ]).draw(false);
}

function populate_monster_table(){
    setInterval(function(){
        insert_monster();
    }, 1000);

    return false;
};




function main(){

    console.log("Loaded script.js");

    // setup datatable
    t = $("#"+MONSTER_TABLE_NAME).DataTable()
    

    document.getElementById(STATS_FORM_NAME).onsubmit = function() {

        show("working");
        show(TABLE_CARD_NAME);
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


