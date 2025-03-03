describe('Негативные тесты Авторизации', () => {
    it('Попытка авторизации с неверным паролем', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('Kulmenev');
        cy.get('.form-input--password').type('Password2');

        cy.get(':nth-child(3) > .button').click();
    });

    it('Попытка авторизации с несуществующим email', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('Test123');
        cy.get('.form-input--password').type('Password2');

        cy.get(':nth-child(3) > .button').click();
    });

    it('Попытка авторизации с пустыми полями', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get(':nth-child(3) > .button').click();
    });
});
