//    "baseUrl":"https://dry-ridge-67592.herokuapp.com/"
//   "baseUrl":"https://example.cypress.io/"


describe('Simple test case', function(){
    beforeEach(function(){
        cy.visit('commands/querying')
    })

    // before(function(){
    //     cy.visit('commands/querying')
    // })

    it('Using Id', function(){
        cy.get('#query-btn').should('contain', 'Button')
    })

    it('Using class', () => {
        cy.get('.query-btn').should('contain', 'Button')
    })


    it('Using CSS', () => {
        cy.get('#querying .well>button:first').should('contain', 'Button')
    })

    it('Using Xpath', function(){
        cy.xpath("//button[@id='query-btn']").should('contain', 'Button')
    })

    it('Using data attribute', () => {
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    })

    it('Invoke Attr method', function(){
        cy.get('[data-test-id = "test-example"]').invoke('attr', 'data-test-id').should('equal','test-example')
        cy.get('[data-test-id = "test-example"]').invoke('attr', 'class').should('equal','example')
        cy.get('[data-test-id="test-example"]').invoke('css', 'position').should('equal', 'static')
    })

    it('Chaining assertions', () => {
        cy.get('[data-test-id = "test-example"]').should('have.attr','class','example').and('have.css','position','static')
    })


})