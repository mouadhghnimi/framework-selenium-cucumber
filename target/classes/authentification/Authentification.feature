@connexion
Feature: Authentification - OrangeHRM
   En tant que utilisateur je souhaite m authentifier

  @cnx
  Scenario: Authentification - OrangeHRM
    Given je ouvre l application OrangeHRM
    When je saisie userName
    And je saisie le mot de passe
    And je clique sur le bouton login
    Then redirection vers la page Home
    
    @buzz
    Scenario: Clique - Buzz
    when Je clique sur le module buzz
    
    @temps
    Scenario: Clique - Temps
    When je clique sur le module temps
