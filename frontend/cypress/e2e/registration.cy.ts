describe('Testing user Registration Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888/');
    cy.contains('Login').click();
    cy.contains('Login').click();
    cy.contains('Create an account').click();
  });
  it('Redirecting to registration page from home page', () => {
    cy.url().should('include', '/register');
  });
  it('Testing registration validator: valid email ', () => {
    cy.get('input[placeholder="Email"]').type('sak');
    cy.get('.mx-auto > .tracking-wide').click();
    cy.contains('Please enter the valid email').should('be.visible');
    cy.contains('Please enter the password').should('be.visible');
  });
});
