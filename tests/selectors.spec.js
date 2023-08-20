import { test, expect } from '@playwright/test'

test('Selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    // It will pause the test and you can execute the code step by step and keep the test runner and browser open
    await page.pause()

    //using any object property
    await page.locator('id=user-name').click()
    await page.locator('id=user-name').fill('Test')
    await page.locator('[id="user-name"]').fill('Ravina')

    //using CSS selector
    await page.locator('#user-name').fill('Test')
    await page.locator('xpath=//input[@name="user-name"]').fill('Habbu')
    await page.locator('//input[@name="user-name"]').fill('standard_user')
    await page.locator('//input[@type="password"]').fill('secret_sauce')

    //using text
    //await page.locator('text=Login').click()
    await page.locator('input:has-text("Login")').click()


})