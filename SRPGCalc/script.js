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

};
function yieldingLoop(count, chunksize, callback, finished) {
    var i = 0;
    (function chunk() {
        var end = Math.min(i + chunksize, count);
        for ( ; i < end; ++i) {
            callback.call(null, i);
        }
        if (i < count) {
            setTimeout(chunk, 0);
        } else {
            finished.call(null);
        }
    })();
}

function getFights(){
    return parseInt(document.getElementById('fights').value);
}

function parse(num){
    return $.isNumeric(num) && (num >= 0);
}




function main(){

    console.log("Loaded script.js");

    // setup datatable
    t = $("#"+MONSTER_TABLE_NAME).DataTable({
        "scrollX": true
    });
    

    document.getElementById(STATS_FORM_NAME).onsubmit = function() {
        let fights = getFights();
        let stat1 = parseInt(document.getElementById('stat1').value);
        let stat2 = parseInt(document.getElementById('stat2').value);
        let stat3 = parseInt(document.getElementById('stat3').value);
        let stat4 = parseInt(document.getElementById('stat4').value);
        let nums = [fights, stat1, stat2, stat3, stat4]

        // bad data
        let bad = false;
        nums.forEach(num => {
            if (!parse(num)){
                bad = true;
                return false;
            };
        });

        if (bad){
            alert("You fill in all fields with non-negative numbers to calculate the fights.");
            return false;
        }else{
            show("working");
            show(TABLE_CARD_NAME);
            yieldingLoop(fights, 1, function(i) {
                insert_monster();
            }, ()=>{});
        };
        
    
        return false;

    };




};

// A $( document ).ready() block.
$( document ).ready(main);


