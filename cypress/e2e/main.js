describe('Login Page', () => {

    beforeEach(()=>{
        cy.visit('/auth/login')
    })
    it('check the logo', () => {
        cy.get('[alt="company-branding"]').should('be.visible')
        cy.contains('Login').should('be.visible')
    });

    it('Successful authentication', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('.oxd-userdropdown').should('contain', 'Paul')

    });
});
