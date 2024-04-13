describe('add function', () => {
    // This is a suite of tests for the add function
    
    it('Should Login to Eddui', () => {
    cy.visit('https://eddui--preprod2.sandbox.my.site.com/s/scplogin?language=en_US&redirectUrl=https%3A%2F%2Ficampp.edd.ca.gov%2Fhome%2Fcaeddicamext_uiostgrf_1%2F0oa6gj2jlz4J3AlIE1d7%2Faln6gj88wtdBQHuBn1d7')
    cy.wait(6000)
    cy.get('c-scp-login')
    cy.get('Login password').type('your_password');
       //cy.get('/html/body/div[3]/div[1]/div/div[2]/div/div/c-scp-login/div/div/div/div[2]/div/div[2]/div[1]/c-input-email/div/input').type('test@yopmail.com')
    })
  })  