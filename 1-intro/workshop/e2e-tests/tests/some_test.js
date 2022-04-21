const CLIENT_URL = `https://www.ynov-nantes.com/`;

Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    I.amOnPage(CLIENT_URL);
    
    I.click({css: 'a.cta'});

    I.fillField('s', 'Bachelor informatique');
    I.wait(5);

    I.see('Bachelor Informatique');
    I.wait(5);
});
