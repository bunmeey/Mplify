import {login} from "../fixtures/selectors";
export const validlogin = () => {
    cy.get(login.Emailaddress).type("testtest@gmail.com")
      cy.get(login.Password).type("test1234")
      cy.get(login.Hidepassword).click()
      cy.get(login.LoginBtn).click()
}