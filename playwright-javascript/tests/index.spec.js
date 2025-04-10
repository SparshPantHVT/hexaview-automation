const{test,expect}=require("@playwright/test")
test("First Page",async function({page})
{
    await page.goto("https://stage.acmebank.org/")
    await page.waitForTimeout(1000)
    await page.getByText("Settings").first().click()
    // await page.locator("//input[@value='v390156100000']").clear().type("v1742447865212668")
    await page.locator("//input[@value='v390156100000']").fill("v1742447865212668");
    await page.waitForTimeout(1000)
    await page.locator("//button[normalize-space()='Close']").click()
    await page.waitForTimeout(1000)
    await expect(page).toHaveURL(/acmebank/);
    await page.getByText("Get Started").click()
    await page.getByPlaceholder("First Name").type("Kevin",{delay:100});
    await page.getByPlaceholder("Last Name").type("Harris",{delay:100});
    await page.getByText("Next").click() 
    await page.getByPlaceholder("Email Address").type("kharris@yahoo.com",{delay:100});
    await page.getByPlaceholder("Phone Number").type("3472636617",{delay:100});
    await page.getByText("Next").click()
    await page.locator("//div[@id='mui-component-select-country']").click()
    await page.keyboard.press('ArrowDown'); // Move to the first option
    await page.keyboard.press('Enter');
    await page.getByPlaceholder("Enter your street address").type("5327 Lee Fall",{delay:100});
    await page.getByPlaceholder("Enter your city").type("East Pamelamouth",{delay:100});
    await page.getByPlaceholder("Enter the name of your state").type("ME",{delay:100});
    await page.getByPlaceholder("Enter your postal code").type("43665",{delay:100});
    await page.locator("//div[@class='progress-stepper-next-back']").click()
    await page.waitForTimeout(4000)
})

// country disabled