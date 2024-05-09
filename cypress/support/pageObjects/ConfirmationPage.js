class ConfirmationPage {

    getAccountCreatedMessage(){
        return cy.get("h2[class='title text-center'] b");
    }

}
export default new ConfirmationPage;