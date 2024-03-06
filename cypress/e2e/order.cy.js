import user from '../fixtures/user.json'
import {findProduct} from '../support/helper'
import loginPage from "../support/pages/LoginPage";
import orderFromHomePage from "../support/pages/OrderFromHomePage";


describe('Order suite', () => {
    it('Order from homepage', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        orderFromHomePage.getSearchField()
            .type('i')
            .closest("form")
            .submit();


        findProduct('Benefit Bella Bamba');


        orderFromHomePage.productOrder();
        orderFromHomePage.getContentPanel().should('contain', "Thank you for shopping with us!");

    })
})
