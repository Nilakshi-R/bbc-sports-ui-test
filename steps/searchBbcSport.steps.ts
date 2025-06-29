import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I navigate to the BBC Sport homepage', async () => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.bbc.com/sport');
});

When('I search for {string}', async (searchTerm: string) => {
  
  await page.locator('.ssrcss-1rstd29-SearchText.eki2hvo12').click();

  const searchInput = page.locator('.ssrcss-9pm56o-StyledInput.e1ld3nu72');
  await searchInput.fill(searchTerm);

  await page.locator('.ssrcss-j5h0mc-Button.eoocusk1').click();

  await page.waitForLoadState('networkidle');
});

Then('I should see at least {int} relevant results', async (minCount: number) => {
  
  const results = page.locator('p.ssrcss-1b1mki6-PromoHeadline.exn3ah99');
  const count = await results.count();

  let relevantCount = 0;

  for (let i = 0; i < count; i++) {
    const text = await results.nth(i).innerText();
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes('sport') &&
      lowerText.includes('2023') &&
      lowerText.includes('in')
    ) {
      relevantCount++;
    }
  }

  expect(relevantCount).toBeGreaterThanOrEqual(minCount);

  await browser.close();
});

