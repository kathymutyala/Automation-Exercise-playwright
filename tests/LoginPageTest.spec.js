const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { testData } = require('../test-data/testData');

test("Login Page with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://automationexercise.com/login");
    await loginPage.login(testData.login.email, testData.login.password);
    await expect(page).toHaveURL("https://automationexercise.com");

})

test("Login Page with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://automationexercise.com/login");
    await loginPage.loginWithInvalidCredentials(testData.invalidLogin.email, testData.invalidLogin.password);
    await expect(loginPage.loginError).toBeVisible();
})