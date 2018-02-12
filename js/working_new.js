$(document).ready(function () {
    $("#exit").click(function () {
        //setTimeout(function () { window.close() }, 3000);
        $("#fadeout").fadeOut(2000);
        $("#goodbye").fadeIn(2000);
    });
});

var newresult, x;


function convertCtoF() {
    try {
        if (document.getElementById('celbtn').checked == true) {
            newresult = document.getElementById("tempinput").value * 9 / 5 + 32;
            document.getElementById("results").innerHTML = newresult;
            x = document.getElementById("tempinput").value;
        }
        if (isNaN(x) && document.getElementById('celbtn').checked == true) {
            document.getElementById("results").innerHTML = 'Must Be a Number!';
            return false;
        }
    }
    catch (err) {
        return false;
    }
    finally {
        console.log('function convertCtoF() executed');
    }
}



function convertFtoC() {
    try {
        if (document.getElementById("ferbtn").checked == true) {
            newresult = (document.getElementById("tempinput").value - 32) * 5 / 9;
            document.getElementById("results").innerHTML = newresult;
            x = document.getElementById("tempinput").value;
        }
        if
        (isNaN(x) && document.getElementById('ferbtn').checked == true) {
            document.getElementById("results").innerHTML = 'Must Be a Number!';
            return false;
        }
    }
    catch (e) {
        return false;
    }
    finally {
        console.log('function covnertFtoC() executed')
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