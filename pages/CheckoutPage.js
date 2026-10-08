class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.CheckoutButton = page.getByText("Proceed To Checkout");
        this.placeOrderButton = page.getByText("Place Order");
        this.NameInput = page.locator('[data-qa="name-on-card"]');
        this.cardNumber = page.locator('[data-qa="card-number"]');
        this.cvc = page.locator('[data-qa="cvc"]');
        this.expirationMonth = page.locator('[data-qa="expiry-month"]');
        this.expirationYear = page.locator('[data-qa="expiry-year"]');
        this.paymentButton = page.getByText("Pay and Confirm Order");
    }

    async proceedToCheckout() {
        await this.CheckoutButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async fillPaymentDetails(name, cardNumber, cvc, expirationMonth, expirationYear) {
        await this.NameInput.fill(name);
        await this.cardNumber.fill(cardNumber);
        await this.cvc.fill(cvc);
        await this.expirationMonth.fill(expirationMonth);
        await this.expirationYear.fill(expirationYear);
        await this.paymentButton.click();
    }
}
module.exports = { CheckoutPage };