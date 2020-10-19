$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentificationParam/AuthentificationParam.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - Param - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m autentifier",
  "id": "authentification---param---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 12613558600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "je ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3350452300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 221083700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 189240500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2015816900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 70981500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Clique - Buzz",
  "description": "",
  "id": "authentification---param---orangehrm;clique---buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le module Buzz",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleBuzz()"
});
formatter.result({
  "duration": 4147446300,
  "status": "passed"
});
formatter.after({
  "duration": 2389148600,
  "status": "passed"
});
formatter.before({
  "duration": 10340998500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "je ouvre l application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie le nom d utilisateur \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le mot de passe \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "redirection vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeOuvreLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2701331800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeNomDUtilisateur(String)"
});
formatter.result({
  "duration": 240300800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 27
    }
  ],
  "location": "AuthentificationParamStepDefinition.jeSaisieLeMotDePasse(String)"
});
formatter.result({
  "duration": 214928500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2186754900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefintion.redirectionVersLaPageHome()"
});
formatter.result({
  "duration": 792779000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clique - Temps",
  "description": "",
  "id": "authentification---param---orangehrm;clique---temps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@temps"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Je clique sur le module Temps",
  "keyword": "When "
});
formatter.match({
  "location": "AuthentificationParamStepDefinition.jeCliqueSurLeModuleTemps()"
});
formatter.result({
  "duration": 1171490800,
  "status": "passed"
});
formatter.after({
  "duration": 2034344800,
  "status": "passed"
});
});