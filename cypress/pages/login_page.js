import { faker } from "@faker-js/faker";

const user_email = faker.internet.email()
const password = faker.internet.password()
const user_first_name = faker.person.firstName()
const user_last_name = faker.person.lastName()


export class LoginPage {
    constructor() {}
    firstName='#firstname';
    lastName='#lastname';
    email='#email_address';
    password='#password';
    confirm_password = '#password-confirmation';
    submit_button='.action.submit.primary';
    userRegistrationSuccessMessage = '[data-ui-id="message-success"]';
    user_email = '.box-content';
    logout_dropdown = '.action.switch > span';
    button = '.customer-menu .authorization-link';
    signin_email = '#email';
    sigin_password= '#pass';
    signin_button = '#send2';
    signed_in_user = '.header .logged-in';
    logout_message= '[data-ui-id="page-title-wrapper"]';
    sign_in_page_navigation_link = '.header .authorization-link';
    create_account_navigation_link = 'div.panel.wrapper > div > ul > li:nth-child(3) > a'


    navigateToCreatAccountPage(){
        cy.get(this.create_account_navigation_link).contains("Create an Account").click({force: true}).wait(3000)
    }

    userName(){
        cy.get(this.firstName).type(user_first_name)
        cy.get(this.lastName).type(user_last_name)
    }

    userLoginDetails(){
        cy.get(this.email).type(user_email)
        cy.get(this.password).type(password)
        cy.get(this.confirm_password).type(password)
    }

    submit(){
        cy.get(this.submit_button)
        .click({force: true}).wait(2000)
    }

    userRegistrationSuccess(){
        cy.get(this.userRegistrationSuccessMessage).invoke("text").should("be.equal", "\nThank you for registering with Main Website Store.\n")
        cy.get(this.user_email).invoke("text").should("contains", user_email)
        cy.get(this.logout_dropdown).first().click({force: true})
        cy.get(this.button).first().click({force: true})
    }

    logout(){
        cy.get(this.logout_dropdown).first().click({force: true}).wait(1000)
        cy.get(this.button).first().contains("Sign Out").click({force: true}).wait(3000)
        
    }

    logoutValidation(){
        cy.get(this.logout_message).invoke("text").should("be.equal", "You are signed out")
    }

    navigateToLoginPage(){
        cy.wait(5000)
        cy.get(this.sign_in_page_navigation_link).first().contains("Sign In").click({force: true})
    }

    login(){
        cy.get(this.signin_email).type(user_email)
        cy.get(this.sigin_password).type(password)
        cy.get(this.signin_button).contains("Sign In").click({force: true})
    }

    loginValidation(){
        cy.get(this.signed_in_user).first().invoke("text").should("be.equal", "Welcome, " + user_first_name + " " +user_last_name + "!")
    }
  
  }
  export default LoginPage;