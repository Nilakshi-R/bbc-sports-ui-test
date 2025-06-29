Feature: BBC Race Results Reporting

  Scenario: Navigate to 2023 Formula 1 results and verify Las Vegas Grand Prix top 3
    Given I open the BBC Sport homepage
    When I navigate to the "2023" Formula 1 results page
    Then I should see Max Verstappen in 1st place
    And I should see George Russell in 2nd place
    And I should see Sergio Perez in 3rd place

