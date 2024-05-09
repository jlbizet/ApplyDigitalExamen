import HomePage from "../support/pageObjects/HomePage";
import ProductPage from "../support/pageObjects/ProductPage";
import CartPage from "../support/pageObjects/CartPage";
import LoginPage from "../support/pageObjects/LoginPage";
import AccountInformationPage from "../support/pageObjects/AccountInformationPage";
import ConfirmationPage from "../support/pageObjects/ConfirmationPage";
import CheckOutPage from "../support/pageObjects/CheckOutPage";
import PaymentPage from "../support/pageObjects/PaymentPage";
import ContactPage from "../support/pageObjects/ContactPage";

//Generate randoms emails to be used in each execution
const email = (Math.random() + 1).toString(36).substring(7) + "@gmail.com";

describe('User Flow Test', function ()  {
    let data;
    // read data.json to be used like data driven in the test
    before(function ()  {
        cy.fixture('data').then((fData) => {
            data = fData;
        });
    });

    it('Validate user can complete an entire flow of shopping', function()  {
        cy.goToWebSite();
        cy.window().scrollTo('center');
        HomePage.clickViewProduct(data.productName);
        ProductPage.getProductTitle().should('have.text',data.productName);
        ProductPage.inputQuantity(data.quantity);
        ProductPage.clickAddToCart();
        ProductPage.getProductAddedMessage().should('have.text', 'Your product has been added to cart.');
        ProductPage.clickViewCartLink();
        CartPage.getCartDescriptionProduct().should('have.text', data.productName);
        CartPage.getQuantity().should('have.text', data.quantity);
        CartPage.clickCheckOutButton();
        CartPage.clickRegisterLoginLink();
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
        cy.contains("Logged in as " + name); //Verify that the user register is logged
        cy.goToCart();
        CartPage.clickCheckOutButton();
        //Assertions to verify delivery and billing data
        CheckOutPage.getDeliveryName().should("contain", data.name+ " " + data.lastname);
        CheckOutPage.getDeliveryCompany().should("contain", data.company);
        CheckOutPage.getDeliveryAddress().should("contain", data.address);
        CheckOutPage.getDeliveryCountry().should("contain", data.country);
        CheckOutPage.getInvoiceName().should("contain", data.name+ " " + data.lastname);
        CheckOutPage.getInvoiceCompany().should("contain", data.company);
        CheckOutPage.getInvoiceAddress().should("contain", data.address);
        CheckOutPage.getInvoiceCountry().should("contain", data.country);
        CheckOutPage.inputComment("Buy All");
        CheckOutPage.clickPlaceOrder();
        PaymentPage.inputNameOnCard(data.name);
        PaymentPage.inputCard(data.cardDetails[0]);
        PaymentPage.inputCVC(data.cardDetails[1]);
        PaymentPage.inputExpiryMonth(data.cardDetails[2]);
        PaymentPage.inputExpiryYear(data.cardDetails[3]);
        PaymentPage.clickPayConfirm();
        PaymentPage.getOrderPlacedMessage().should('have.text', "Order Placed!");
        cy.continueButton();
        cy.logoutButton();
        LoginPage.inputLoginEmailAddress(email);
        LoginPage.inputLoginPassword(data.password);
        LoginPage.clickLoginButton();
        cy.contains("Logged in as " + data.name);
        cy.contactUsButton();
        ContactPage.inputName(data.name);
        ContactPage.inputEmail(email);
        ContactPage.inputSubject("Subject of Test");
        ContactPage.inputMessage("This is a message");
        ContactPage.clickSubmit();
        ContactPage.clickOKPopUP();
        ContactPage.getSuccessMessage().should("have.text", "Success! Your details have been submitted successfully.");
        cy.logoutButton();
        cy.url().should('eq', 'https://automationexercise.com/login')
    });


})
