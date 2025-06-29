Feature: Search for sport content in 2023

  Scenario: Search for "sport in 2023" and verify relevant results
    Given I navigate to the BBC Sport homepage
    When I search for "sport in 2023"
    Then I should see at least 4 relevant results
