describe('Заявка на роль учебного заведения', () => {
    it('Заявка на роль учебного заведения', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('.form-input--text').type('Kulmenev');
        cy.get('.form-input--password').type('Password1');

        cy.get(':nth-child(3) > .button').click();

        cy.get('.page-nav__role-block > .button').click()

        cy.get('.select-role-form > :nth-child(2)').click()

        cy.get('.variants-company > :nth-child(2)').click()

        cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type('Test')

        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('TestTomsk')

        cy.get('.form-area').type('Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magnam maxime nulla officia sapiente. Aut beatae incidunt, omnis recusandae sequi veniam. Atque beatae consequatur illum itaque libero, nihil odit vel.')

        cy.get('.create-company-form__description-block > .button').click()
    });
});
