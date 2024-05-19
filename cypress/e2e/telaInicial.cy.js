import telaInicial from '../support/pageObjects/telaInicial.page'
describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    telaInicial.inputText()
  })
})