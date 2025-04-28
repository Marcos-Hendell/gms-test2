/// <reference types="cypress"/>

describe('US-012-Funcinalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.56.1:8080/')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Melo')
    cy.get('#signup-email').type('fabianistaaa@teste.com')
    cy.get('#signup-phone').type('5556666')
    cy.get('#signup-password').type('Teste@12345')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})