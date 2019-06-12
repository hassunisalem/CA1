
document.getElementById("buttons").addEventListener("click", function () {
    document.getElementById("display").innerHTML += event.target.innerHTML;
});



//                  SPILD AF TID  ----------->
//    Når man arbejder med flere div'er skal man hellere have en enkelt eventlistener for 
//    en ydre div og bruge target til lokalisere hvilken div der bliver klikket, som indholder
//    de andre div'er, istedet for at have eventlistener for hver enkelt div. derfor er følgende SPILD AF TID  ----------->
       
//document.getElementById("2").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "2";
//});
//
//document.getElementById("3").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "3";
//});
//
//document.getElementById("4").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "4";
//});
//
//document.getElementById("5").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "5";
//});
//
//document.getElementById("6").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "6";
//});
//
//document.getElementById("7").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "7";
//});
//
//document.getElementById("8").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "8";
//});
//
//document.getElementById("9").addEventListener("click", function () {
//    document.getElementById("display").innerHTML += "9";
//});

// stopP tager imod et event fra "calce" div'en og kalder functionen stopPropagation
function stopP(event) {
    event.stopPropagation();
}

function calculate() {
    // henter hvad der står på lommeregneren i en string
    var str = document.getElementById("display").innerHTML;
    
    // hvis str.indexOf("+") ikke retunere -1 (hvis str inholder "+")
    if (str.indexOf("+") !== -1) {
        // deler vi stringen op ved "+" i et array "r" med to indexer
        var r = str.split("+");
        // Number converter til int og index 0 og 1 bliver lagt sammen
        var res = Number(r[0]) + Number(r[1]);
    }
    
    if (str.indexOf("-") !== -1) {
        var r = str.split("-");
        var res = Number(r[0]) - Number(r[1]);
    }
    
    if (str.indexOf("*") !== -1) {
        var r = str.split("*");
        var res = Number(r[0]) * Number(r[1]);
    }
    
    if (str.indexOf("/") !== -1) {
        var r = str.split("/");
        var res = Number(r[0]) / Number(r[1]);
    }
    // vis resultat
    document.getElementById("display").innerHTML = res;
}

document.getElementById("calce").addEventListener("click", calculate  );

function clear(){
    document.getElementById("display").innerHTML = "";
}
var btn = document.getElementById("btn")
btn.onclick = clear