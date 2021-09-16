describe('Form App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsBox = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id=submitBtn]')

    it('Test Check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Proper Elements'), () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsBox().should('exist');
        submitBtn().should('exist');
    }

    // describe('Testing Real Inputs'), () => {
        it('Navigate', () => {
            cy.url().should('include', 'localhost');
        })
        it('Name, Email, Password Inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Adam')
                .should('have.value', 'Adam')
            emailInput()
                .should('have.value', '')
                .type('beenza@beenza.com')
                .should('have.value', 'beenza@beenza.com')
            passwordInput()
                .should('have.value', '')
                .type('beenza')
                .should('have.value', 'beenza')
            termsBox()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        it('Submit Button', () => {
            submitBtn()
                .should('be.disabled')
                nameInput().type('Adam')
                emailInput().type('beenza@beenza.com')
                passwordInput().type('beenza')
                termsBox().check()
                submitBtn().should('not.be.disabled')
        })

        it('Form Submit Validation', () => {
                nameInput().type('Adam')
                emailInput().type('beenza@beenza.com')
                submitBtn().should('be.disabled')
        })

    // }
})
//DANGER ZONE