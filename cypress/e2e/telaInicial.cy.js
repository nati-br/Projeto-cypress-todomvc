import telaInicial from '../support/pageObjects/telaInicial.page'
describe('Acessar a pagina do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/vue/dist/#/')
    telaInicial.inputText()
  })
})