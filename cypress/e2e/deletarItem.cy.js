import telaInicial from '../support/pageObjects/telaInicial.page'

describe('Deletar itens da lista', () => {
    beforeEach(() => {
        cy.visit('/')

        var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
        todoItens.forEach(item => {
            telaInicial.inputText(item)
        })

    })
    it('deleção de um item da lista', () => {
      telaInicial.deletarItem()
    })

})