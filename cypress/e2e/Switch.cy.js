import {Switch} from "../fixtures/selectors.js";
const access = require ('.validlogin.cy.js')
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
describe("Given I am on the Dashboard", function () {
    beforeEach(function () {
        cy.visit('/')
      access.validlogin();


    });


    //it("Switch- I Should be able to switch Business", function () {
        //cy.get(Switch.Dropdown).click()
        
      //})
    })