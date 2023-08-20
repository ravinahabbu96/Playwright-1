// import { test, expect, devices } from '@playwright/test';

// test.use({
//     ...devices['iPhone 11'],
// });

// test('test', async ({ page }) => {
//     await page.goto('about:blank');
//     await page.goto('https://www.google.com/?gws_rd=ssl');
//     await page.getByRole('textbox', { name: 'Google Search' }).click();
//     await page.getByRole('textbox', { name: 'Google Search' }).fill('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByRole('textbox', { name: 'Google Search' }).press('Enter');
//     await page.getByRole('link', { name: 'OrangeHRM https://opensource-demo.orangehrmlive.com OrangeHRM' }).getByRole('link').click();
//     await page.locator('#app').click();
//     await page.getByPlaceholder('Username').click();
//     await page.getByPlaceholder('Username').fill('admin');
//     await page.getByPlaceholder('Password').click();
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await page.locator('span').filter({ hasText: 'Paul Collings' }).locator('i').click();
//     await page.getByRole('menuitem', { name: 'Logout' }).click();
// });

import { test, expect, devices } from '@playwright/test';

test.use({
    ...devices['iPhone 11'],
});

test('test', async ({ page, context }) => {
    await page.goto('https://www.google.com/?gws_rd=ssl');
    await page.getByRole('textbox', { name: 'Google Search' }).click();
    await page.getByRole('textbox', { name: 'Google Search' }).fill('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Google Search' }).press('Enter');
    await page.getByRole('link', { name: 'OrangeHRM https://opensource-demo.orangehrmlive.com OrangeHRM' }).getByRole('link').click();
    await context.tracing.start(
        {
            screenshots: true,
            screenshots: true
        })
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('A');
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').press('CapsLock');
    await page.getByPlaceholder('Password').press('CapsLock');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('OrangeHRM')
    await page.locator('span').filter({ hasText: 'Paul Collings' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await context.tracing.stop({ path: "test1_trace.zip" })
});