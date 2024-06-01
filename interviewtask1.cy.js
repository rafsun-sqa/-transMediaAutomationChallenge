describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://juice-shop.herokuapp.com/');
    cy.get('.cc-btn').click();
    cy.wait(5000);
    cy.get('.close-dialog > .mat-button-wrapper > span').click();
    cy.wait(3000);
    cy.get('#navbarAccount > .mat-button-wrapper > span').should("exist");
    cy.wait(3000);
    cy.get('#navbarAccount').click();
    cy.get('#navbarLoginButton').click();
    cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("rafsun@gmail.com");
    cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@1");
    cy.get('#loginButton').click();
    cy.wait(2000);
    cy.get('[style="left: 0px; width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-card > [style="display: flex; justify-content: center;"] > .mat-focus-indicator').click();
    cy.wait(2000);
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click();
    cy.wait(5000);
    cy.get('#checkoutButton').click();
    cy.wait(2000);
    cy.get('.mat-card > div.ng-star-inserted > .mat-focus-indicator').click();
    cy.wait(2000);
    cy.get('#mat-input-3').click().type("Bangladesh");
    cy.wait(2000);
    cy.get('#mat-input-4').click().type("Hasheme Al Rafsun");
    cy.wait(2000);
    cy.get('#mat-input-5').click().type("01723878354");
    cy.wait(2000);
    cy.get('#mat-input-6').click().type("2020");
    cy.wait(2000);
    cy.get('#address').click().type("Rampura,Dhaka");
    cy.wait(2000);
    cy.get('#mat-input-8').click().type("Dhaka");
    cy.wait(2000);
    cy.get('#mat-input-9').click().type("Dhaka North");
    cy.wait(2000);
    cy.get('#submitButton > .mat-button-wrapper').click();
  
    cy.contains('ul').end();


  })
})