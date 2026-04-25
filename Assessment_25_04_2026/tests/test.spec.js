// import {test} from "@playwright/test"
// import excel from "exceljs"



// test("flipkart", async({browser}) => {

//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://www.flipkart.com/");

//     await page.locator('[class="b3wTlE"]').click();
//     await page.locator('//div[text()="Home"]').click();

//     await page.locator('//div[@class="grid-formation grid-column-2"]').first().click();


//     await page.locator('//div[@class="ybaCDx"]').first().click();
//     await page.waitForTimeout(2000);

//     await page.locator('//div[@class="WNv7PR"]').first().click();
//     await page.waitForTimeout(2000);


//     let [page2] = await Promise.all([page.waitForEvent('popup'),
//         page.locator('(//div[@class="RGLWAk"])[5]').click()
//     ]);

//     await page2.waitForTimeout(3000);

//     let description = await page2.locator('//div[@class="_1psv1zeb9 _1psv1ze0 _1psv1ze2i"]').allInnerTexts();
//     console.log(description);

//     let price = await page2.locator('//div[@class="_1psv1zeb9 _1psv1ze0 _1psv1ze9x _1psv1ze7o _1psv1ze2u _1psv1ze5f"]').allInnerTexts();
//     console.log(price);

//     let workbook = new excel.Workbook();
//     let book = await workbook.xlsx.readFile('C:/Users/alamc/OneDrive/Desktop/Playwright_Assessment/Assessment_25_04_2026/DDT/Book1.xlsx');

//     let sheet = await book.getWorksheet("Sheet1");
//     if(!sheet) {
//         sheet = await book.addWorksheet("Sheet1");
//     }
//     sheet.getCell(1,1).value=description;
//     sheet.getCell(2,1).value=price;

//     await workbook.xlsx.writeFile('C:/Users/alamc/OneDrive/Desktop/Playwright_Assessment/Assessment_25_04_2026/DDT/Book1.xlsx');

//     await page2.locator('//div[text()="Add to cart"]').click();

//     await page2.waitForTimeout(5000);

// })

import { test, expect } from "@playwright/test"
import excel from "exceljs"

test("flipkart", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.flipkart.com/");

    await expect(page).toHaveURL(/flipkart/);

    await page.locator('[class="b3wTlE"]').click();
    await page.locator('//div[text()="Home"]').click();

    await expect(page.locator('//div[text()="Home"]')).toBeVisible();

    await page.locator('//div[@class="grid-formation grid-column-2"]').first().click();
    await page.locator('//div[@class="ybaCDx"]').first().click();
    await page.waitForTimeout(2000);

    await page.locator('//div[@class="WNv7PR"]').first().click();
    await page.waitForTimeout(2000);

    let [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//div[@class="RGLWAk"])[5]').click()
    ]);

    await page2.waitForTimeout(3000);

    await expect(page2).toHaveURL(/flipkart/);

    let description = await page2.locator('//div[@class="_1psv1zeb9 _1psv1ze0 _1psv1ze2i"]').allInnerTexts();
    console.log(description);

    await expect(description.length).toBeGreaterThan(0);

    let price = await page2.locator('//div[@class="_1psv1zeb9 _1psv1ze0 _1psv1ze9x _1psv1ze7o _1psv1ze2u _1psv1ze5f"]').allInnerTexts();
    console.log(price);

    await expect(price.length).toBeGreaterThan(0);

    let workbook = new excel.Workbook();
    let book = await workbook.xlsx.readFile('C:/Users/alamc/OneDrive/Desktop/Playwright_Assessment/Assessment_25_04_2026/DDT/Book1.xlsx');

    let sheet = await book.getWorksheet("Sheet1");
    if (!sheet) {
        sheet = await book.addWorksheet("Sheet1");
    }

    sheet.getCell(1, 1).value = description;
    sheet.getCell(2, 1).value = price;

    await workbook.xlsx.writeFile('C:/Users/alamc/OneDrive/Desktop/Playwright_Assessment/Assessment_25_04_2026/DDT/Book1.xlsx');

    await page2.locator('//div[text()="Add to cart"]').click();

    await expect(page2.locator('//div[text()="Add to cart"]')).toBeVisible();

    await page2.waitForTimeout(5000);
})