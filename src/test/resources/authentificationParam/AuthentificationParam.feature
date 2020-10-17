@tag
Feature: Authentification - Param - OrangeHRM
  As a user i want to authenticate

  Background: 
    Given je ouvre l application OrangeHRM
    When je saisie le nom d utilisateur "Admin"
    And je saisie le mot de passe "admin123"
    And je clique sur le bouton login
    Then redirection vers la page Home

  @buzz
  Scenario: Clique - Buzz
    When je clique sur le bouton buzz

  @temps
  Scenario: Clique - Temps
    When je clique sur le module Temps
