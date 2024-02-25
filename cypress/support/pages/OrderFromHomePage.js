import BasePage from "./BasePage";

class OrderFromHomePage extends BasePage{
    constructor() {
        super();
        this.searchField = '#filter_keyword';
        this.productCart = '.productpagecart';
        this.checkout = '#cart_checkout1';
        this.checkoutButton = '#checkout_btn';
        this.contentPanel = '.contentpanel';
    }

    getSearchField() {
        return cy.get(this.searchField);
    }

    getProductCart() {
        return cy.get(this.productCart);
    }

    getCheckout() {
        return cy.get(this.checkout);
    }

    getCheckoutButton() {
        return cy.get(this.checkoutButton);
    }

    getContentPanel() {
        return cy.get(this.contentPanel);
    }



    productOrder() {
        this.getProductCart().click();
        this.getCheckout().click();
        this.getCheckoutButton().click();
    }

}

export default OrderFromHomePage()