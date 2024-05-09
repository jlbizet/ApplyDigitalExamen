import LoginPage from "../support/pageObjects/LoginPage";
import AccountInformationPage from "../support/pageObjects/AccountInformationPage";
import ConfirmationPage from "../support/pageObjects/ConfirmationPage";

//Generate randoms emails to be used in each execution
const email = (Math.random() + 1).toString(36).substring(7) + "@gmail.com";

describe('Register User', function ()  {
    let data;
    // read data.json to be used like data driven in the test
    before(function ()  {
        cy.fixture('data').then((fData) => {
            data = fData;
        });
    });

    it('Validate Register new user', function()  {
        cy.goToWebSite();
        cy.goToSignupLogin();
        LoginPage.inputSignUpName(data.name);
        LoginPage.inputSignUpEmailAddress(email);
        LoginPage.clickSignUpButton();
        AccountInformationPage.selectMrTitle();
        AccountInformationPage.inputPassword(data.password);
        AccountInformationPage.checkNewsLetter();
        AccountInformationPage.selectDateBirthday(data.birthday[0], data.birthday[1], data.birthday[2]);
        AccountInformationPage.inputFirstName(data.name);
        AccountInformationPage.inputLastName(data.lastname);
        AccountInformationPage.inputCompany(data.company);
        AccountInformationPage.inputAddress(data.address);
        AccountInformationPage.inputAddress2(data.address2)
        AccountInformationPage.selectCountry(data.country);
        AccountInformationPage.inputState(data.state);
        AccountInformationPage.inputCity(data.city);
        AccountInformationPage.inputZipCode(data.zipCode);
        AccountInformationPage.inputMobileNumber(data.mobileNumber);
        AccountInformationPage.clickCreateAccountButton();
        ConfirmationPage.getAccountCreatedMessage().should("have.text", "Account Created!")
        cy.continueButton();
        cy.contains("Logged in as " + data.name); //Verify that the user register is logged
        cy.url().should('eq', 'https://automationexercise.com/')
    });


})
