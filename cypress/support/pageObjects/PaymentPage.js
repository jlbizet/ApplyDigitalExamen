class PaymentPage {

    inputNameOnCard(value) {
        const nameOnCard = cy.get("input[name='name_on_card']");
        nameOnCard.clear();
        nameOnCard.type(value);
        return this;
    }

    inputCard(value) {
        const card = cy.get("input[name='card_number']");
        card.clear();
        card.type(value);
        return this;
    }


    inputCVC(value) {
        const cvc = cy.get("input[name='cvc']");
        cvc.clear();
        cvc.type(value);
        return this;
    }

    inputExpiryMonth(value) {
        const expiryMonth = cy.get("input[name='expiry_month']");
        expiryMonth.clear();
        expiryMonth.type(value);
        return this;
    }

    inputExpiryYear(value) {
        const expiryYear = cy.get("input[name='expiry_year']");
        expiryYear.clear();
        expiryYear.type(value);
        return this;
    }

    clickPayConfirm() {
        cy.get("#submit").click();
    }

    getOrderPlacedMessage() {
        return cy.get("[data-qa='order-placed'] b")
    }
}

export default new PaymentPage;