@tag
Feature: configuration user - OrangeHRM
  As a user i want to edit and configurate my users

  Background: 
    Given je ouvre l application OrangeHRM
    When Je saisie le nom d utilisateur "Admin"
    And Je saisie le mot de passe "admin123"
    And je clique sur le bouton login
    Then redirection vers la page Home

  @configUser
  Scenario: Add-User
    When je clique sur le module PIM
    And je clique sur le bouton Add
    And je rempli First name
    And je repmli LastName
    And je clique sur le bouton Save
    Then user has been added on system users
