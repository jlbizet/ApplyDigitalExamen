class ProductPage {


    getProductTitle() {
        return cy.get("div[class='product-information'] h2");
    }

    inputQuantity(value) {
        const quantity = cy.get('#quantity');
        quantity.clear();
        quantity.type(value);
        return this;
    }

    clickAddToCart() {
        cy.get('.btn-default.cart').click();
    }

    getProductAddedMessage() {
        return cy.get("div[id='cartModal'] p:nth-child(1)");
    }

    clickViewCartLink() {
        cy.get("p a[href='/view_cart']").click()
    }


}

export default new ProductPage;