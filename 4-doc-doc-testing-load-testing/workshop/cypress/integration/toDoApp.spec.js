describe('What do I need to do? - E2e tests', () => {
    it('Submit new item', () => {
        cy.visit('http://localhost:5000')

        cy.get('#newTODO')
            .type('Item 1')
            .should('have.value', 'Item 1')
        cy.get('button[id="create-todo"]').click()

        cy.get('#todo-body tr:last-child td:first-child').should('have.text', 'Item 1')
    })

    it('Mark all items as done', () => {
        cy.visit('http://localhost:5000')

        cy.get('#newTODO')
            .type('Item 2')
            .should('have.value', 'Item 2')
        cy.get('button[id="create-todo"]').click()

        cy.get('#todo-body tr').last().find('button').click()

        cy.get('#done-body tr').last().find('td').should('have.text', 'Item 2')
    })
})
