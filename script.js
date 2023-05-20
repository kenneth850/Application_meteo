// Création d'une constant qui va accueillir l'API

let ville = "Paris";
recevoirTemperature(ville);

// Appeler la fonction recevoirTemperature et création du bouton "changer de ville"

let button = document.querySelector("#changer");
button.addEventListener('click', () => {
    ville = prompt("Sélectionner votre ville.");
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=8a5b75cfd653ae91950e70aa9b89f2c0&units=metric';

// Créer une requête GET AJAX

let requete = new XMLHttpRequest(); // Création d'un objet

requete.open('GET', url);
requete.responseType = 'json'; // Réponse sous format json
requete.send(); // Envoi de la requête

// Dès la reception de la réponse, j'execute la fonction suivante

requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse = requete.response;
            let meteo = reponse.main.temp;
            let ville = reponse.name;

            document.querySelector("#temperature_label").textContent = meteo;
            document.querySelector("#ville").textContent = ville;

        } else {
        alert ("La météo n'est pas disponible, merci de réessayer ultérieurement.");
    }
}
}
};