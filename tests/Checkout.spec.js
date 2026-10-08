const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CartPage } = require('../pages/CartPage');
const { ProductPage } = require('../pages/ProductPage');
const { LoginPage } = require('../pages/LoginPage');
const { testData } = require('../test-data/testData');


test("Verify user can checkout successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);
    await page.goto("https://automationexercise.com/login");
    await loginPage.login(testData.login.email, testData.login.password);
    await expect(page.getByText(/Logged in as/)).toBeVisible();

    await page.goto("https://automationexercise.com/products");
    await productPage.addToCart();
    await expect(page.getByText("Added!")).toBeVisible();

    await cartPage.openCart();
    await expect(page.locator("#cart_info_table")).toBeVisible();

    await checkoutPage.proceedToCheckout();
    await expect(page.getByText("Review Your Order")).toBeVisible();
    await checkoutPage.placeOrder();
    await checkoutPage.fillPaymentDetails(testData.paymentDetails.name, testData.paymentDetails.cardNumber, testData.paymentDetails.cvc, testData.paymentDetails.expiryMonth, testData.paymentDetails.expiryYear);

    await expect(page.getByText("Congratulations! Your order has been confirmed!")).toBeVisible();
})
