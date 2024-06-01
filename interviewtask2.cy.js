describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://juice-shop.herokuapp.com/');
      cy.get('.cc-btn').click();
      cy.wait(1000);
      cy.get('.close-dialog > .mat-button-wrapper > span').click();
      cy.wait(1000);
      cy.get('#navbarAccount > .mat-button-wrapper > span').should("exist");
      cy.wait(1000);
      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      cy.get('.mat-form-field.ng-tns-c21-11 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("rafsun@gmail.com");
      cy.get('.mat-form-field-hide-placeholder > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Password@1");
      cy.get('#loginButton').click();
      cy.wait(1000);
      cy.get('.mat-search_icon-search').click();
      cy.get('.loading-spinner').should('not.exist');
      cy.get('#mat-input-0').type("apple{enter}");
    })
  })