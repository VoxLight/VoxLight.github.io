const MONSTER_TABLE_NAME = "monstertable";
const MONSTER_TABLE_BODY = "monstertablebody";
const STATS_FORM_NAME = "calc";

const EX_TR = `
<tr>
    <th scope="row">Rat</th>
    <td>1</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    td>0</td>
    <td>0</td>
    <td>0</td>
</tr>`



function populate_monster_table(amount){
    setInterval(function(){
        $(EX_TR).appendTo(MONSTER_TABLE_BODY)
    }, 1000);

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


