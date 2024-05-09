class HomePage {

    //Select View Product of any product that you input by parameter
    clickViewProduct(product) {
        cy.get('.col-sm-4:visible').each(($el, index, $list) => {
            const textProduct = $el.find('p').text()
            if (textProduct.includes(product)) {
                cy.wrap($el).find('.fa-plus-square').click();
                return false;
            }
        })

    }


}

export default new HomePage;