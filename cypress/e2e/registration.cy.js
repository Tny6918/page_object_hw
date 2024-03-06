import user from '../fixtures/user.json'
import registrationPage from "../support/pages/RegistrationPage";
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";


describe('register with valid data', () => {
  it('Registration', () => {
    registrationPage.visit();

    registrationPage.openRegistrationForm();

    registrationPage.fillPersonalDetails().should('contain', user.firstname);
    registrationPage.fillPersonalDetails().should('contain', user.lastname);
    registrationPage.fillPersonalDetails().should('contain', user.email);
    registrationPage.fillPersonalDetails().should('contain', user.fax);

    registrationPage.fillAddressDetails().should('contain', user.company);
    registrationPage.fillAddressDetails().should('contain', user.address_1);
    registrationPage.fillAddressDetails().should('contain', user.address_2);
    registrationPage.fillAddressDetails().should('contain', user.city);
    registrationPage.fillAddressDetails().should('contain', user.postcode);
    registrationPage.fillAddressDetails().should('contain', user.country);
    registrationPage.fillAddressDetails().should('contain', user.zone_name);

    registrationPage.fillLoginDetails().should('contain', user.loginname);
    registrationPage.fillLoginDetails().should('contain', user.password);

    registrationPage.fillNewsLetter().should('be.checked');

    registrationPage.submitRegistrationForm();
    registrationPage.getSuccessRegistrationMessage().should('contain', ' Your Account Has Been Created!')


  })

  it('Authorization', ()=>{

    loginPage.visit();
    loginPage.fillLoginFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    accountPage.getFirstNameText().should('contain', user.firstname);
  })
})
