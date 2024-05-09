class CartPage {

    getQuantity(){
        return cy.get("td[class='cart_quantity'] button");
    }

    getCartDescriptionProduct(){
        return cy.get("td[class='cart_description'] h4");
    }

    clickCheckOutButton(){
        cy.get('.btn.btn-default.check_out').click()
    }
    clickRegisterLoginLink(){
        cy.get("p a[href='/login']").click()
    }

}
export default new CartPage;