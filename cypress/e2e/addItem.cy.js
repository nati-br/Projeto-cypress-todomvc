import telaInicial from '../support/pageObjects/telaInicial.page'

describe('Adicionar itens na minha lista de toDo', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Adicionar um item na lista', () => {
       telaInicial.inputText("task1")
    })
    it('Adicionar mais de um item na lista', () => {
        var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
        todoItens.forEach(item => {
            telaInicial.inputText(item)
        })
    })
})