import LoginPage from "../support/pageObjects/LoginPage";

//Generate randoms emails to be used in each execution


describe('Login User', function ()  {
    let data;
    // read data.json to be used like data driven in the test
    before(function ()  {
        cy.fixture('data').then((fData) => {
            data = fData;
        });
    });

    it('Validate user registered can be login', function()  {
        cy.goToWebSite();
        cy.goToSignupLogin();
        LoginPage.inputLoginEmailAddress(data.email);
        LoginPage.inputLoginPassword(data.password);
        LoginPage.clickLoginButton();
        cy.contains("Logged in as " + data.name); //Verify that the user register is logged
        cy.url().should('eq', 'https://automationexercise.com/')
    });


})
