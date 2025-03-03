describe('Негативные тесты Регистрации', () => {
    it('Попытка регистрации с уже существующим email', () => {
        cy.visit('https://dev.profteam.su/registration');

        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Kulmenev');
        cy.get('.form-input--email').type('kkulmenev@gmail.com');
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Password1');
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Password1');

        cy.get(':nth-child(4) > .button').click();

    });

    it('Попытка регистрации с пустыми полями', () => {
        cy.visit('https://dev.profteam.su/registration');

        cy.get(':nth-child(4) > .button').click();
    });

    it('Попытка регистрации с некорректным форматом email', () => {
        cy.visit('https://dev.profteam.su/registration');

        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Kulmenev');
        cy.get('.form-input--email').type('not-an-email');
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Password1');
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Password1');

        cy.get(':nth-child(4) > .button').click();
    });
});
