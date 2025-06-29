import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Given('I open the BBC Sport homepage', async () => {
  browser = await chromium.launch({ headless: true }); // Set to true for CI
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.bbc.com/sport');
});

When('I navigate to the {string} Formula 1 results page', async (year: string) => {

  await page.locator('.ssrcss-1u47p8g-LinkTextContainer.eis6szr1', { hasText: 'Formula 1' }).click();
  await page.waitForURL('**/formula1');

  await page.getByText('Results', { exact: true }).click();
  await page.waitForURL('**/formula1/results');

  await page.getByText(year, { exact: true }).click();
  await page.waitForURL(`**/formula1/${year}/results`);

});

Then('I should see Max Verstappen in 1st place', async () => {
  const row = await page.locator('tr', { hasText: 'Max Verstappen' }).first().innerText();
  expect(row).toMatch(/1\s+Max Verstappen/);
});

Then('I should see George Russell in 2nd place', async () => {
  const row = await page.locator('tr', { hasText: 'George Russell' }).first().innerText();
  expect(row).toMatch(/2\s+George Russell/);
});

Then('I should see Sergio Perez in 3rd place', async () => {
  const row = await page.locator('tr', { hasText: 'Sergio Perez' }).first().innerText();
  expect(row).toMatch(/3\s+Sergio Perez/);

  await browser.close();
});
