export const navigateToSignUpPage = () => cy.visit('/signup');
export const navigateToLoginPage = () => cy.visit('/login');

export const getUserEmailControlForSignup = () => cy.get('#userEmailControl');
export const getuserPasswordEmailControlForSignup = () => cy.get('#userPasswordControl')
export const getUserConfirmPasswordControlForSignup = () => cy.get('#userConfirmPasswordControl');
export const getSignupButton = () => cy.get('#signupButton');
