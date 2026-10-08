const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');



test("Verify user can search for a product", async ({ page }) => {
    const productPage = new ProductPage(page);
    await page.goto("https://automationexercise.com/products");
    await productPage.searchProduct("T-Shirt");
    await expect(productPage.searchedProductsTitle).toBeVisible();

})

test("Verify searched product details", async ({ page }) => {
    const productPage = new ProductPage(page);
    await page.goto("https://automationexercise.com/products");

    await productPage.searchProduct("T-Shirt");

    await expect(productPage.productName).toBeVisible();
});

test("verify user can add product to cart", async ({ page }) => {
    const productPage = new ProductPage(page);
    await page.goto("https://automationexercise.com/products");
    await productPage.addToCart();
    await expect(page.getByText("Added!")).toBeVisible();
})

test("verify user can delete product from cart", async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    await page.goto("https://automationexercise.com/products");
    await productPage.addToCart();

    await cartPage.openCart();

    await cartPage.deleteProductFromCart();
    await expect(page.getByText("Cart is empty!")).toBeVisible();
});

test.only("verify user can change product quantity", async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await page.goto("https://automationexercise.com/products", {
        waitUntil: "domcontentloaded"
    });
    await productPage.addToCart();
    await productPage.continueShopping();
    await productPage.addToCart();
    await cartPage.openCart();


    await expect(cartPage.quantityInput).toHaveText("2");
});