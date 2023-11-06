import { getSignupButton, getUserConfirmPasswordControlForSignup, getUserEmailControlForSignup, getuserPasswordEmailControlForSignup, navigateToSignUpPage } from "../support/utils/auth.utils"

describe('Signup',()=>{
    beforeEach(()=>{
        navigateToSignUpPage();
    });

    it('should have email, password, confirmPassword controls and on entering correct values button should be enabled',()=>{
         getUserEmailControlForSignup().type("sgarg5858@gmail.com");
         getuserPasswordEmailControlForSignup().type("Iphone@1234");
         getUserConfirmPasswordControlForSignup().type("Iphone@1234");

         getSignupButton().should('be.enabled',true);
    })

    it('should have email, password, confirmPassword controls and on entering invalid values button should be disabled',()=>{
        getUserEmailControlForSignup().type("sgarg5858@gmail.com");
        getuserPasswordEmailControlForSignup().type("Iphone@1234");
        getUserConfirmPasswordControlForSignup().type("Iphone@1234");

        getSignupButton().should('be.enabled',false);
   })
})