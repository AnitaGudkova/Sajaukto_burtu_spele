const API = "https://burtuspelesserveris.anitagudkova.repl.co/chat";

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');
let vardsChat = document.querySelector('.vardsChat');

function sutitZinu(){
    fetch(API + '/sutit/' + vardsChat.value + '/' + zina.value);
}

async function ieladetChataZinas(){
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

async function ieladetChataZinasJson(){

    let datiNoServera = await fetch(API + '/lasit');
   
    if ( datiNoServera ){
        let dati = await datiNoServera.json();
        
        zinas.innerHTML = '';
        let i = 0;
        while( i < await dati.length ) {
            
            let laiks = '[ <i>' + '????? ' + '</i>] ';
            
            if ("laiks" in dati[i]) {
                laiks = '[ <i>' + dati[i]['laiks'] + '</i>] ';
            }            
            zinas.innerHTML = zinas.innerHTML + laiks + '<b>' + dati[i]['vards'] + '</b>: ' + dati[i]['zina'] + '<br />';
            
                i++;
        }

        zinas.scrollTop = zinas.scrollHeight;
    }

}
setInterval( ieladetChataZinasJson, 1000 );
