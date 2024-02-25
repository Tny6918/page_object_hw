import BasePage from "./BasePage";
import user from "../../fixtures/user.json";
import {faker} from '@faker-js/faker'

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.customerMenu = '#customer_menu_top';
        this.buttonContinue = '[title=Continue]';

        this.fieldFirstName = '#AccountFrm_firstname';
        this.fieldLastName = '#AccountFrm_firstname';
        this.fieldEmail = '#AccountFrm_email';
        this.fieldTelephone = '#AccountFrm_telephone';
        this.fieldFax = '#AccountFrm_fax';

        this.fieldCompany = '#AccountFrm_company';
        this.fieldAddress1 = '#AccountFrm_address_1';
        this.fieldAddress2 = '#AccountFrm_address_2';
        this.fieldCity = '#AccountFrm_city';
        this.fieldPostcode = '#AccountFrm_postcode';
        this.fieldCountryId = '#AccountFrm_country_id';
        this.fieldZoneId = '#AccountFrm_zone_id';

        this.fieldLoginName = '#AccountFrm_loginname';
        this.fieldPassword = '#AccountFrm_password';
        this.fieldConfirmPassword = '#AccountFrm_confirm';

        this.checkboxNewsLetter = '#AccountFrm_newsletter0';
        this.checkboxAgreement = '#AccountFrm_agree';

        this.buttonSubmit = '[title=Continue]';
        this.successfulRegistrationText = '.maintext';

    }

    visit() {
        cy.visit('/');
    }

    getRegistrationForm() {
        return cy.get(this.customerMenu);
    }

    getProceedToRegistration() {
        return cy.get(this.buttonContinue);
    }

    getFirstName() {
        return cy.get(this.fieldFirstName);
    }

    getLastName() {
        return cy.get(this.fieldLastName);
    }

    getEmail() {
        return cy.get(this.fieldEmail);
    }

    getTelephone() {
        return cy.get(this.fieldTelephone);
    }

    getFax() {
        return cy.get(this.fieldFax);
    }

    getCompanyName() {
        return cy.get(this.fieldCompany);
    }

    getAddress1() {
        return cy.get(this.fieldAddress1);
    }

    getAddress2() {
        return cy.get(this.fieldAddress2);
    }

    getCityName() {
        return cy.get(this.fieldCity);
    }

    getPostcode() {
        return cy.get(this.fieldPostcode);
    }

    getCountryId() {
        return cy.get(this.fieldCountryId);
    }

    getZoneId() {
        return cy.get(this.fieldZoneId);
    }

    getLoginName() {
        return cy.get(this.fieldLoginName);
    }

    getPassword() {
        return cy.get(this.fieldPassword);
    }

    getConfirmPassword() {
        return cy.get(this.fieldConfirmPassword);
    }

    getCheckboxNewsLetter() {
        return cy.get(this.checkboxNewsLetter);
    }

    getCheckboxAgreement() {
        return cy.get(this.checkboxAgreement);
    }

    getButtonSubmit() {
        return cy.get(this.buttonSubmit);
    }

    getSuccessRegistrationMessage() {
        return cy.get(this.successfulRegistrationText);
    }



    openRegistrationForm() {
        cy.log('Open registration form');
        this.getRegistrationForm().click();
        this.getProceedToRegistration().click();
    }

    fillPersonalDetails() {
        cy.log('Fill in the fields Personal Details fields');
        this.getFirstName().type(user.firstname);
        this.getLastName().type(user.lastname);
        this.getEmail().type(user.email);
        this.getTelephone().type(user.telephone);
        this.getFax().type(user.fax);
    }

    fillAddressDetails() {
        cy.log('Fill in the Your Address fields');
        this.getCompanyName().type(user.company);
        this.getAddress1().type(user.address_1);
        this.getAddress2().type(user.address_2);
        this.getCityName().type(user.city);
        this.getPostcode().type(user.postcode);
        this.getCountryId().type(user.country_id);
        this.getZoneId().type(user.zone_id);
    }

    fillLoginDetails() {
        cy.log('Fill in the Login Details fields');
        this.getLoginName().type(user.loginname);
        this.getPassword().type(user.password);
        this.getConfirmPassword().type(user.password);
    }

    fillNewsLetter() {
        cy.log('Fill in the Newsletter');
        this.getCheckboxNewsLetter().click();
        this.getCheckboxAgreement().check();
    }

    submitRegistrationForm() {
        cy.log('Submit Registration form');
        this.getButtonSubmit().click();
    }

}

export default new RegistrationPage()