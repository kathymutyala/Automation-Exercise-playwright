class CartPage {
    constructor(page) {
        this.page = page;
        this.viewCartButton = page.getByRole('link', { name: 'View Cart', exact: true });
        this.deleteButton = page.locator(".cart_quantity_delete");
        this.quantityInput = page.locator(".cart_quantity button");
    }

    async openCart() {
        await this.viewCartButton.click();
    }

    async deleteProductFromCart() {
        await this.deleteButton.click();
    }
    async changeProductQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }
}

module.exports = { CartPage };