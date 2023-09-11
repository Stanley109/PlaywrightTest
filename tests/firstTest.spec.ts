import { test, expect, chromium, webkit } from '@playwright/test'; //add modules to @playwright/test


const browserTypes = [chromium, webkit];

for (const browserType of browserTypes) {
  test(`wiki (${browserType.name()})`, async ({ page }) => {
    // Launch the browser in non-headless mode based on the provided browserType
    const browser = await browserType.launch({ headless: false });

    // Create a new page in the browser
    const pageInstance = await browser.newPage();

    // Navigate to the Wikipedia website
    await pageInstance.goto('https://wikipedia.org/');

    await new Promise(resolve => setTimeout(resolve, 5000));

    // Close the browser when you're done
    await browser.close();
  });
}
