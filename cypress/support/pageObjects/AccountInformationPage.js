class AccountInformationPage {

    selectMrTitle() {
        const title = cy.get('#id_gender1')
        title.check().should('be.checked');
    }

    selectMrsTitle() {
        const title = cy.get('#id_gender2')
        title.check().should('be.checked');
    }

    inputName(value) {
        const signUpName = cy.get('#name');
        signUpName.clear();
        signUpName.type(value);
        return this;
    }

    inputPassword(value) {
        const password = cy.get('#password');
        password.clear();
        password.type(value);
        return this;
    }

    checkNewsLetter() {
        cy.get('#newsletter').check().should("be.checked");
    }

    checkReceiveOffers() {
        cy.get('#optin').check().should("be.checked");
    }

    selectDateBirthday(day, month, year) {
        cy.get('#days').select(day);
        cy.get('#months').select(month);
        cy.get('#years').select(year);
    }

//Address information Section

    inputFirstName(value) {
        const firstName = cy.get('#first_name');
        firstName.clear();
        firstName.type(value);
        return this;
    }

    inputLastName(value) {
        const lastName = cy.get('#last_name');
        lastName.clear();
        lastName.type(value);
        return this;
    }

    inputCompany(value) {
        const lastName = cy.get('#company');
        lastName.clear();
        lastName.type(value);
        return this;
    }

    inputAddress(value) {
        const address = cy.get('#address1');
        address.clear();
        address.type(value);
        return this;
    }

    inputAddress2(value) {
        const address = cy.get('#address2');
        address.clear();
        address.type(value);
        return this;
    }

    selectCountry(country) {
        cy.get('#country').select(country);
    }

    inputState(value) {
        const state = cy.get('#state');
        state.clear();
        state.type(value);
        return this;
    }


    inputCity(value) {
        const city = cy.get('#city');
        city.clear();
        city.type(value);
        return this;
    }

    inputZipCode(value) {
        const zipcode = cy.get('#zipcode');
        zipcode.clear();
        zipcode.type(value);
        return this;
    }

    inputMobileNumber(value) {
        const mobileNumber = cy.get('#mobile_number');
        mobileNumber.clear();
        mobileNumber.type(value);
        return this;
    }

    clickCreateAccountButton() {
        cy.get("button[data-qa='create-account']").click();
    }

}

export default new AccountInformationPage;