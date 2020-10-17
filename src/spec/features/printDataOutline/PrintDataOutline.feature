@print-data
Feature: Print Data - TextBox
  As a user i want to print my data

  @outline
  Scenario Outline: Print Data - TextBox
    Given I open application text Box
    When I want to print full Name "<fullName>" 
    And I want to print email "<email>" 

    Examples: 
      | fullName | email            |  
      | Achref   | Achref@gmail.com |  
      | Mariem   | Mariem@gmail.com |  
