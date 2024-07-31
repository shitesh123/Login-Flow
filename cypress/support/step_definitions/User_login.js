import { When, Then }  from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/login_page";

const user = new LoginPage()


When('I add user first and last name', () => {
    user.userName()
})

When('I add user sign in details', () => {
    user.userLoginDetails()
})

When('I click on Create an Account button', () => {
    user.submit()
})

When('I verify that user gets created by checking the successful registration message and user email', () => {
    user.userRegistrationSuccess()
})

When('I click on logout', () => {
    user.logout()
})

Then('I verify that user be logout', () => {
    user.logoutValidation()
})

When('I navigate to signin page', () => {
    user.navigateToLoginPage()
})

When('I add user login email and password and click on sign in', () => {
    user.login()
})

Then('I verify that user should be logged in', () => {
    user.loginValidation()
})