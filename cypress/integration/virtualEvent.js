/// <reference types='Cypress' />

const URL = '192.168.0.133:8080';

context('virtual event web', () => {
  before(() => {
    cy.visit(URL);
  });

  describe('verify webs content', () => {
    const NUMBER_OF_INPUTS = 6;

    it('verifies forms inputs', () => {
      cy.get('#form').find('input').should('have.length', NUMBER_OF_INPUTS);
    });

    it('verifies submit button', () => {
      cy.get('#form button').should('exist');
    });

    it('verifies headers content', () => {
      cy.get('header .webinar-button').should('have.text', 'WEBINAR');
      cy.get('header .title').should('have.text', 'El reto de humanizar el CX financiero en 2021.\n        La experiencia de un Unicornio de Latam');
      cy.get('header .sub-title').should('have.text', 'Miércoles 16 de diciembre | 17 hs (Horario de Quito)');
    });
  });

  describe('form', () => {
    it('sends form with data', () => {
      cy.get('#first-name').type('example');
      cy.get('#sur-name').type('example');
      cy.get('#mail').type('example');
      cy.get('#country').type('example');
      cy.get('#phone').type('example');
      cy.get('#job').type('example');
      cy.get('#submit-button').click();

      cy.get('.modal-content p').should('have.text', 'Muchas gracias por su interes!');
    });

    it('doesnt send form if a field is empty', () => {
      cy.reload();
      cy.get('#first-name').type('example');
      cy.get('#sur-name').type('example');
      cy.get('#mail').type('example');
      cy.get('#country').type('example');
      cy.get('#phone').type('example');
      cy.get('#submit-button').click();

      cy.on('window:alert', (str) => {
        expect(str).to.equal(`por favor agregar todos los campos`)
      })
    });
  });
});
