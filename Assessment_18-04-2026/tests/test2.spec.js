import {test, expect} from "@playwright/test"

test("task2", async({page}) =>{

    await page.setViewportSize({ width: 1280, height: 720 });

    await page.goto("https://vinothqaacademy.com/demo-site/")

    await expect(page).toHaveURL(/vinothqaacademy/);
    await expect(page.locator('#vfb-5')).toBeVisible();

    await page.locator('[id="vfb-5"]').fill("John");
    await page.locator('[id="vfb-7"]').fill("Cena");

    await expect(page.locator('#vfb-5')).toHaveValue("John");

    await page.locator('[id="vfb-31-1"]').click();
    await expect(page.locator('#vfb-31-1')).toBeChecked();

    await page.locator('[id="vfb-20-2"]').click();
    await expect(page.locator('#vfb-20-2')).toBeChecked();

    await page.locator('[id="vfb-13-address"]').fill("Chandigarh University");
    await expect(page.locator('#vfb-13-address')).toHaveValue("Chandigarh University");

    await page.locator('[id="vfb-13-address-2"]').fill("NH-05 Ludhiana Chandigarh Highway");

    await page.locator('[id="vfb-13-city"]').fill("Boys Hostel");
    await page.locator('[id="vfb-13-state"]').fill("CU");
    await page.locator('[id="vfb-13-zip"]').fill("SAS Nagar, Mohali");

    await page.locator('(//span[@class="select2-selection__arrow"])[1]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("India");
    await page.keyboard.press("Enter");

    await page.locator('[id="vfb-14"]').fill("johnCena@gmail.com");
    await expect(page.locator('#vfb-14')).toHaveValue("johnCena@gmail.com");

    await page.locator('[id="vfb-18"]').fill("01/12/22");

    await page.locator('(//span[@class="select2-selection__arrow"])[2]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("04");
    await page.keyboard.press("Enter");

    await page.locator('(//span[@class="select2-selection__arrow"])[3]').click();
    await page.locator('//input[@class="select2-search__field"]').fill("15");
    await page.keyboard.press("Enter");

    await page.locator('[id="vfb-19"]').fill("5438797432");
    await expect(page.locator('#vfb-19')).toHaveValue("5438797432");

    await page.locator('[id="vfb-23"]').fill("My Query is that: SELECT * FROM SQL_QUERY 😂");
    await expect(page.locator('#vfb-23')).toHaveValue(/SQL_QUERY/);

    await page.locator('[id="vfb-3"]').fill("33");
    await expect(page.locator('#vfb-3')).toHaveValue("33");

    await page.locator('[id="vfb-4"]').click();

    await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.90 });

    await page.screenshot({path:"screenshot/sstest2.png"})
});