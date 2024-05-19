import telaInicial from '../support/pageObjects/telaInicial.page'

describe('Concluir itens na lista de toDo', () => {
    beforeEach(() => {
        cy.visit('/')

        var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
        todoItens.forEach(item => {
            telaInicial.inputText(item)
        })
    })
    it('concluir um item da lista toDo', () => {
       telaInicial.concluirItem()
    })
})

