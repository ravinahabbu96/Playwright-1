// const { test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test';
test.describe('Verify navigation', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.google.com/')
        // expect(await page.screenshot()).toMatchSnapshot('ss.png')
    })


    test('Verify Google page title', async ({ page }) => {
        await expect(page).toHaveTitle('Google')
        // expect(await page.screenshot()).toMatchSnapshot('ss1.png')
    })
})