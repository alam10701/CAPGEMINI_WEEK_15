import {test, expect} from "@playwright/test";

test("task1", async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form")

    await expect(page).toHaveURL(/automation-practice-form/);

    await expect(page.locator('#firstName')).toBeVisible();

    await page.locator('[id="firstName"]').fill("John");
    await page.locator(' [id="lastName"]').fill("Cena");

    await expect(page.locator('#firstName')).toHaveValue("John");

    await page.locator('[id="userEmail"]').fill("JohnCena@gmail.com");

    await page.locator('//div/input[@class="form-check-input"]').first().click();

    await expect(page.locator('//div/input[@class="form-check-input"]').first()).toBeChecked();

    await page.locator('[id="userNumber"]').fill("1717171717");

    await page.locator('[id="dateOfBirthInput"]').fill("18 Jan 1973");

    await page.locator('[id="subjectsInput"]').fill("Maths");
    await page.keyboard.press("Enter")

    await page.locator('[id="hobbies-checkbox-3"]').click();

    await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();

    await page.locator('[id="uploadPicture"]').click();

    await page.locator('[id="currentAddress"]').fill("Gate Number 4 Boys Hostel Nek Chand - 4, Chandigarh University")

    await page.locator('[id="react-select-3-input"]').click();
    await page.keyboard.press("Enter");

    await page.locator('[id="react-select-4-input"]').click();
    await page.keyboard.press("Enter");

    await page.locator('[id="submit"]').click();

    await expect(page.locator('.modal-content')).toContainText("Thanks for submitting the form");

    await expect(page.locator('.modal-content')).toBeVisible();

    let ss = await page.screenshot({path:"screenshot/ss.png"})
});