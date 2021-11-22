var vards = "EDOMTE";
var pVards = "METODE";
var rezultatsIndex = 0;
var startsLaiks;

function startSpele() {

    startsLaiks = Date.now();
    rezultatsIndex = 0;
    document.getElementById("rezultats").textContent = "";
    for (var i=0; i<6; i++) {
        document.getElementById("b"+i).textContent = vards[i];
        document.getElementById("rb"+i).textContent = "";
    }

}

function izveleBurta(element) {

    var elementTeksts = element.textContent;
    document.getElementById("rb"+rezultatsIndex++).textContent = elementTeksts;

    if (rezultatsIndex == 6) {
        beigaSpele();
    }

}

function beigaSpele() {

    var iegVards = "";
    for (var i=0; i<6; i++) {
        iegVards += document.getElementById("rb"+i).textContent;
    }

    var rezultatsTeksts;
    if (pVards == iegVards) {
        var rezultatsLaiks = (Date.now() - startsLaiks) / 1000;
        rezultatsTeksts = "Uzminēji vārdu " + rezultatsLaiks + " sek.";
    } else {
        rezultatsTeksts = "Neuzminēji vārdu";
    }
    document.getElementById("rezultats").textContent = rezultatsTeksts;

}