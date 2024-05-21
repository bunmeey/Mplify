const { login } = require("../fixtures/selectors");

describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("LOGIN - I Should be able to sign in my account with valid", function () {
      cy.get(login.Emailaddress).type("testtest@gmail.com")
      cy.get(login.Password).type("test1234")
      cy.get(login.Hidepassword).click()
      cy.get(login.LoginBtn).click()
      
    })




})
