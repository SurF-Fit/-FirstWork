describe('Регистрация', () => {
   it('Проверка регистрации пользователя с ролью студента', () => {
      cy.fixture('cypressTest').then (data => {
         cy.visit('https://dev.profteam.su/registration');

         cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login);
         cy.get('.form-input--email').type('kkulmenev@gmail.com');
         cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('Password1');
         cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('Password1');

         cy.get(':nth-child(4) > .button').click();

         cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Кульменев')
         cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Кирилл')
         cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Алекссандрович')

         cy.get(':nth-child(3) > .button').click();

      })
   });
});


