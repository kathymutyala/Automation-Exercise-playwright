class ProductPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsTitle = page.locator('.title.text-center');
        this.productName = page.getByText("Pure Cotton V-Neck T-Shirt").first();
        this.addToCartButton = page.locator('a[data-product-id="28"]').first();
        this.continueShoppingButton = page.getByText('Continue Shopping');
    }

    async searchProduct(productName) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async verifyProduct(productName) {
        return this.page.getByText(productName);
    }

    async addToCart() {
        await this.addToCartButton.hover();
        await this.addToCartButton.click();
    }
    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}
module.exports = { ProductPage };