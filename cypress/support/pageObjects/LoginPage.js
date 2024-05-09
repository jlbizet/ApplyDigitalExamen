class LoginPage {

    inputSignUpName(value) {
        const signUpName = cy.get('input[data-qa="signup-name"]');
        signUpName.clear();
        signUpName.type(value);
        return this;
    }

    inputSignUpEmailAddress(value) {
        const signUpEmailAddress = cy.get('input[data-qa="signup-email"]');
        signUpEmailAddress.clear();
        signUpEmailAddress.type(value);
        return this;
    }

    inputLoginEmailAddress(value) {
        const loginEmailAddress = cy.get('input[data-qa="login-email"]');
        loginEmailAddress.clear();
        loginEmailAddress.type(value);
        return this;
    }

    inputLoginPassword(value) {
        const loginPassword = cy.get('input[data-qa="login-password"]');
        loginPassword.clear();
        loginPassword.type(value);
        return this;
    }

    clickSignUpButton() {
        cy.get("button[data-qa='signup-button']").click();
    }

    clickLoginButton() {
        cy.get("button[data-qa='login-button']").click();
    }
}

export default new LoginPage;