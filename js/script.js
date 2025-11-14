// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo quelle precedenti)
// Far sì che le email vengono stampati solo quando arrivano tutti i 10 email



const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

const lista = document.querySelector("ul");

//chiamare API del server per prelevare 1 mail random
//ciclo for per creare 10 mail random

arrayMail = [];

for (let i = 0; i < 10; i++){
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(resp){
    const randomMail = resp.data.response;
    const li = document.createElement("li");
    li.innerHTML = randomMail;
    lista.append(li);
});
}



