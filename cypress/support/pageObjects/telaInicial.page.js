const elem = require('../elements/telaInicial.elements').ELEMENTS;
const concluirItem = require('../elements/telaInicial.elements').ITENS
const filtrarItem = require('../elements/telaInicial.elements').FILTROS

class telaInicial{

    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}');
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
       .should('have.attr', 'placeholder')
       .and('include',texto)
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .first()
        .click()

    }

    filtrarItem(menu){
        cy.get(filtrarItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()

    }

}
export default new telaInicial();