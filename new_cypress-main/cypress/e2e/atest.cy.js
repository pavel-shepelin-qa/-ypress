describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru');// ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click(); //нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
   })    
   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');//зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

      cy.get('#forgotEmailButton').click(); //нажал Забыл пароль?

      cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту
      cy.get('#restoreEmailButton').click();//нажал отправить код

      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //вижу текст
      cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
   }) 
   it('Верный логин и неверный пароль', function () {
      cy.visit('https://login.qa.studio/');//зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

      cy.get('#mail').type('german@dolnikov.ru');// ввели верный логин
      cy.get('#pass').type('iLoveqastudio4');// ввели неверный пароль
      cy.get('#loginButton').click(); //нажал войти

      cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст
      cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 })    

 it('Неверный логин и верный пароль', function () {
   cy.visit('https://login.qa.studio/');//зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

   cy.get('#mail').type('german@dolniko.ru');// ввели неверный логин
   cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
   cy.get('#loginButton').click(); //нажал войти

   cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст
   cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 })

 it('Проверка валидации логина без @', function () {
   cy.visit('https://login.qa.studio/');//зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

   cy.get('#mail').type('germandolniko.ru');// ввели  логин без @
   cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
   cy.get('#loginButton').click(); //нажал войти

   cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю, что после ввода логина без @ вижу текст
   cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 })

 it('Использование в логине строчных букв', function () {
   cy.visit('https://login.qa.studio/');//зашли на сайт
   cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

   cy.get('#mail').type('GerMan@Dolniko.ru');// ввели логин, используя строчные буквы
   cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
   cy.get('#loginButton').click(); //нажал войти

   cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после ввода логина со строчными буквами вижу текст
   cy.get('#messageHeader').should('be.visible');// текст виден для пользователя
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден для пользователя
 })

})











