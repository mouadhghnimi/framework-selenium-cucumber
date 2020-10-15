$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": " En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 14737645500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "je ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "je saisie userName",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "je saisie le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 4021802900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieUserName()"
});
formatter.result({
  "duration": 414110900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeSaisieLeMotDePasse()"
});
formatter.result({
  "duration": 260141900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4578375400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 99192200,
  "status": "passed"
});
formatter.after({
  "duration": 2430960600,
  "status": "passed"
});
});