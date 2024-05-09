class ContactPage {

    inputName(value) {
        const name = cy.get("input[name='name']");
        name.clear();
        name.type(value);
        return this;
    }

    inputEmail(value) {
        const email = cy.get("input[name='email']");
        email.clear();
        email.type(value);
        return this;
    }


    inputSubject(value) {
        const subject = cy.get("input[name='subject']");
        subject.clear();
        subject.type(value);
        return this;
    }

    inputMessage(value) {
        const message = cy.get("#message");
        message.clear();
        message.type(value);
        return this;
    }

    clickSubmit() {
        cy.get("[name='submit']").click();
    }

    getSuccessMessage() {
        return cy.get(".status.alert.alert-success")
    }

    clickOKPopUP(){
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("Press OK to proceed!");
        });
    }
}

export default new ContactPage;