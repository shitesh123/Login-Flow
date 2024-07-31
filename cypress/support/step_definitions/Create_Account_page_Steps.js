import { Given, When }  from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/login_page";


const url = "https://magento.softwaretestingboard.com/"
const user = new LoginPage()

Given('I navigate to magneto software create account page', () => {
    cy.visit(url);
})

When('I click on Create an Account to navigate user creation account', () => {
    user.navigateToCreatAccountPage()
})

