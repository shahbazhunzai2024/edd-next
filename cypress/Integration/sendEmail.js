// cypress/integration/email.spec.js
describe('Sending Email', () => {
    it('Sends email with attachments', () => {
    
        // Visit the page we want to test
        cy.visit('https://eddui--preprod2.sandbox.my.site.com/s/scplogin');
        cy.screenshot();
        // Take more screenshots and/or interact with elements as needed
        cy.get('.some-element').click();
        cy.screenshot();
        cy.sendEmail(); 
        // Use the Cypress commands to save logs and/or files
        cy.log('This is a test log message');
    });

    after(() => {
        cy.sendEmail({
            from: 'shahbaz.developer.tech@gmail.com',
            to: 'shahbaz.khan@cache-cloud.com',
            subject: 'Eddui Test Results',
            text: 'Please find attached the test results, screenshots, and logs.',
            attachments: [
                { name: 'screenshot.png', path: 'path/to/screenshot.png' },
                { name: 'logfile.txt', path: 'path/to/logfile.txt' },
                // Add more attachments as needed
            ],
        });
    });
});
