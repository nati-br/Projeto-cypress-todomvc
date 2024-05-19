import telaInicial from '../support/pageObjects/telaInicial.page'

describe('Validar os filtros da aplicação após a adição de itens', () => {
    beforeEach(() => {
        cy.visit('/')

        var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
        todoItens.forEach(item => {
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    })
    it('Filtrar itens ativos', () => {
      telaInicial.filtrarItem("Active")
    })

    it('Filtrar itens concluidos', () => {
      
    })
})
