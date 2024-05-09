// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {Environment} from "./environment";

const url = new Environment().getBaseUrl();
Cypress.Commands.add("goToWebSite", function () {
    cy.visit(url); //passing url value to cy.visit()
    cy.get(".logo").should('be.visible');
})

Cypress.Commands.add("goToHome", function () {
    cy.get(".fa-home").click().should('be.visible');
})

Cypress.Commands.add("goToProducts", function () {
    cy.get("a[href='/products']").click().should('be.visible');
})

Cypress.Commands.add("goToCart", function () {
    cy.get("a[href='/view_cart'] i").click().should('be.visible');
})

Cypress.Commands.add("goToSignupLogin", function () {
    cy.get("a[href='/login']").click().should('be.visible');
})

Cypress.Commands.add("logoutButton", function () {
    cy.get("a[href='/logout']").click().should('be.visible');
})

Cypress.Commands.add("contactUsButton", function () {
    cy.get("a[href='/contact_us']").click().should('be.visible');
})

Cypress.Commands.add("continueButton", function () {
    cy.get("[data-qa='continue-button']").click().should('be.visible');
})



