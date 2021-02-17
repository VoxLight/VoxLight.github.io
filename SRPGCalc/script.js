function create_monster_row(monster, rtwmp){
    let row = rtwmp.cloneNode(true);
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

function populate_monster_table(monster, rtwmp){
    setInterval(function(){
        insert_monster(create_monster_row(monster, rtwmp));
    }, 1000)

    return false;
};


function main(){

    console.log("Loaded script.js");


    const ROW_NAME = "monsterrow";
    const MONSTER_TABLE_NAME = "monstertable";
    const MONSTER_TABLE_BODY = "monstertablebody";
    const STATS_FORM_NAME = "calc";

    var ex_tr = document.getElementById(ROW_NAME).cloneNode(true);
    var monster = ["Wolf", 5, 0, 0, 0, 0, 0, 0, 0]

    







    document.getElementById(STATS_FORM_NAME).onsubmit = function() {
        populate_monster_table(monster, ex_tr);
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


