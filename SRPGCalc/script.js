// IDS to remember
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

function calculate_fights(num){
    for(let i=0; i<num; i++){
        insert_monster()
    };

    return false;
};

function parse(num){
    return $.isNumeric(num) && (num > 0);
}




function main(){

    console.log("Loaded script.js");

    // setup datatable
    t = $("#"+MONSTER_TABLE_NAME).DataTable({
        "scrollX": true
    });
    

    document.getElementById(STATS_FORM_NAME).onsubmit = function() {
        show("working");
        show(TABLE_CARD_NAME);
        

        let fights = parseInt(document.getElementById('fights').value);
        let stat1 = parseInt(document.getElementById('stat1').value);
        let stat2 = parseInt(document.getElementById('stat2').value);
        let stat3 = parseInt(document.getElementById('stat3').value);
        let stat4 = parseInt(document.getElementById('stat4').value);
        let nums = [fights, stat1, stat2, stat3, stat4]

        // bad data
        let bad = false;
        nums.forEach(num => {
            if (!parse(num)){
                alert("You fill in all fields with non-zero numbers to calculate the fights.");
                bad = true;
                return;
            };
        });

        if (!bad){
            calculate_fights(fights);
        };
        
    
        return false;

    };




};

// A $( document ).ready() block.
$( document ).ready(main);


