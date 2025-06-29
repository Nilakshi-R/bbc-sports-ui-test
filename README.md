# Country API Test Automation

This project contains UI automated tests for the BBC sports page. It validates the UI funtionalities against specific acceptance criteria using **Playwright**, **Typescript** and **Cucumber**.
Tested UI is [BBC Sports](https://www.bbc.com/sport)

---
## **Acceptance Criteria**
The following criteria are validated by the tests:
1. The top 3 finishers of the 2023 Las Vegas Grand Prix in 2023 are Max Verstappen 1st place, George Russell 2nd, and Sergio Perez secured 3rd place.
2. The searches for "Sport in 2023" should have at least 4 relevant results.
   
---

## **Technologies Used**
- **Playwright**: The Test automation tool.
- **Typescript**: The scripting language.
- **Cucumber**: For BDD (Behavioral Driven Development).

---

## **Setup**
1. Clone the repository:
   git clone [https://github.com/Nilakshi-R/bbc-sports-ui-test.git](https://github.com/Nilakshi-R/bbc-sports-ui-test.git)
2. cd bbc-sports-ui-test
3. npm ci
4. npx playwright install

---

## **Run the Tests**
- Run the tests using npm:
  ```
  npm run test
  ```
- The test results will be displayed in the console. If all tests pass, you will see:
  ```
  2 scenarios (1 failed, 1 passed)
  8 steps (1 failed, 1 skipped, 6 passed)
  0m13.759s (executing steps: 0m13.738s)
  ```
