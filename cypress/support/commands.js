Cypress.Commands.add(
    'verifyBundleCalls',
    (alias, requestTimeout, responseCode) => {
      cy.wait(`${alias}`, { requestTimeout }).then((interception) => {
        const { statusCode, body } = interception.response;
        cy.log(`statusCode: ${statusCode}`);
        cy.log(`body: ${body}`);    
      });
    }
  );