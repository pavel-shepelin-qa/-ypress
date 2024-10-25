describe('Покупка нового аватара', function (){

    it('автотест e2e на покупку аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/');     // зайти на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввести логин
        cy.get('#password').type('USER_PASSWORD'); // ввести пароль
        cy.get('.auth__button').click(); // назать кнопку войти

        cy.get('.header__container > .header__id').click();  // сделать клик на аву тренера в шапке страницы
        cy.get('[href="/shop"]').click(); // нажимаем кнопку смена аватара
        cy.get('.available > button').first().click(); // кликаем по доступному к покупке аватару
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ввести номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // ввести дату действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввести код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // ввести имя владельца карты
        cy.get('.pay-btn').click(); // нажать кнопку оплатить
        cy.get('#cardnumber').type('56456'); // ввести код из смс
        cy.get('.payment__submit-button').click(); // нажать кнопку отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость текста

    })
}) 