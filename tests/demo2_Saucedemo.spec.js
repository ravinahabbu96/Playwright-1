import { test, expect } from '@playwright/test'

test('Verify the login page', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator('input[id="user-name"]').click()
    await page.locator('input[id="user-name"]').fill('standard_user')
    await page.locator('input[id="password"]').click()
    await page.locator('input[id="password"]').fill('secret_sauce')
    await page.locator('input#login-button').click()
    await expect(page).toHaveTitle('Swag Labs')
})