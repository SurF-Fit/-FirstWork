describe('Просмотр уведомлений', () => {
    it('Просмотр уведомлений', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('Kulmenev');
        cy.get('.form-input--password').type('Password1');

        cy.get(':nth-child(3) > .button').click();

        cy.get('[href="/notification"] > .header__label').click();
    });
});
