const{test,expect}=require("@playwright/test")
test("Neg Res",async function({page}) {
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
    await page.getByPlaceholder("Email Address").type("kharris",{delay:100});
    // const errorMessage=await page.locator("//p[@id='email-helper-text']").textContent()
    // console.log("Error message is"+errorMessage);
    await page.getByPlaceholder("Phone Number").type("3472636617",{delay:100});
    await page.locator("//div[@class='progress-stepper-next-back']").click()
    const errorMessage=await page.locator("//p[@id='email-helper-text']").textContent()
    console.log("Error message is"+errorMessage);
    await page.waitForTimeout(5000)
})