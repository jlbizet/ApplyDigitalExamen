class CheckOutPage {

    clickPlaceOrder() {
        cy.get("a[href='/payment']").click();
    }

    inputComment(value) {
        const comment = cy.get("[name='message']");
        comment.clear();
        comment.type(value);
        return this;
    }

    // Billing Address
    getInvoiceName() {
        return cy.get("ul[id='address_invoice'] li:nth-child(2)");
    }

    getInvoiceCompany() {
        return cy.get("ul[id='address_invoice'] li:nth-child(3)");
    }

    getInvoiceAddress() {
        return cy.get("ul[id='address_invoice'] li:nth-child(4)");
    }

    getInvoiceCountry() {
        return cy.get("ul[id='address_invoice'] li:nth-child(7)");
    }

    //Delivery Address
    getDeliveryName() {
        return cy.get("ul[id='address_delivery'] li:nth-child(2)");
    }

    getDeliveryCompany() {
        return cy.get("ul[id='address_delivery'] li:nth-child(3)");
    }

    getDeliveryAddress() {
        return cy.get("ul[id='address_delivery'] li:nth-child(4)");
    }

    getDeliveryCountry() {
        return cy.get("ul[id='address_delivery'] li:nth-child(7)");
    }
}

export default new CheckOutPage;