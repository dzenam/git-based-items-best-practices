Feature: Git-based Items

  @tests:req-managing-items @tests:WGT-2
  Scenario: View Git-based Items page
    Given User is on landing page
    And User is on the Git-based Items page
    Then User should see the Git-based Items page

  @tests:req-managing-items
  Scenario: Do not see Git-based Items page
    Given User is on landing page
    And User is on the Git-based Items page
    Then User should see the Git-based Items page