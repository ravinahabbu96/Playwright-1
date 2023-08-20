import { test, expect } from '@playwright/test'
test.describe('Test Amazon search functionality', () => {
    let context;
    let page;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        await context.tracing.start(
            {
                screenshots: true,
                screenshots: true
            })
        page = await context.newPage();
    })
    test.beforeEach(async ({ }) => {
        await page.goto('https://www.amazon.com/');
    })

    // test.afterAll(async () => {
    //     await context.tracing.stop({ path: "demo4_trace.zip" })
    // })


    test('Search and filter keyword', async ({ }) => {

        await page.goto('https://www.amazon.com/')
        await page.getByPlaceholder('Search Amazon').click()
        await page.locator('input#twotabsearchtextbox').fill("Shoes")
        await page.locator('#nav-search-submit-button').click()
        await expect(page).toHaveTitle('Amazon.com : Shoes')
        await page.getByRole('link', { name: 'Breathable', exact: true }).click();
        await page.getByLabel('4', { exact: true }).click();
    })

})





