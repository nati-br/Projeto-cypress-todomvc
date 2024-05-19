import telaInicial from '../support/pageObjects/telaInicial.page'

describe('Teste Regressivo ToDo App', () => {
    context.skip('Validar tela inicia',() => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Validar area labelde input de dados  ',() => {
            telaInicial.validarInput("What needs to be done?")
        })
    })
    context.skip('Validar a adição de itens ',() => {
        beforeEach(() => {
            cy.visit('/')
        })
        it('Adicionar mais de um item na lista', () => {
            var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
            todoItens.forEach(item => {
                telaInicial.inputText(item)
            })
            //Validar que o contador é igual a x
            telaInicial.validarContador(5)
        })

    })

    context('Validar conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')

            var todoItens = ['task2', 'task3', 'task4','task5', 'task6']
            todoItens.forEach(item => {
                telaInicial.inputText(item)
            })
        })

        it('concluir um item da lista toDo', () => {
            telaInicial.concluirItem()
            //telaInicial.validarContador(5)
            telaInicial.validarSizeToDo(5)
        })
       
    })


    
})