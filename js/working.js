//JS
$(document).ready(function () {
    $("#exit").click(function () {
        //setTimeout(function () { window.close() }, 3000);
        $("#fadeout").fadeOut(2000);
        $("#goodbye").fadeIn(2000);
    });
}); 

function convertCtoF() {
    try {
        if (document.getElementById('celbtn').checked == true) {
            var newresult;
            newresult = document.getElementById("tempinput").value * 9 / 5 + 32;
            document.getElementById("results").innerHTML = newresult;
        }
        else (document.getElementById('celbtn').checked == false)
    }
    catch (e) {
            console.log('not working');
            return 'not working';
            document.getElementById("result").innerHTML = 'not working';

        }
    }
  


function convertFtoC() {
    try {
        if (document.getElementById("ferbtn").checked == true) {
        var fresult;
        newresult = (document.getElementById("tempinput").value - 32) * 5 / 9;
        document.getElementById("results").innerHTML = newresult;
    }
    else 
        (document.getElementById("ferbtn").checked == false)
    } catch (e) {
        console.log('not working');
        return 'not working';


    }
}


function clearSelection() {
    document.getElementById("celbtn").checked = false;
    document.getElementById("ferbtn").checked = false;
    document.getElementById("tempinput").value = "";
    document.getElementById("results").innerHTML = "";
}




function results() {
    convertCtoF();
    convertFtoC();
   

}


results();
clearSelection();



