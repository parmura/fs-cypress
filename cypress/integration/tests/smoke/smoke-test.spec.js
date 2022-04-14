import { homePage } from '../../pages/HomePage';

const constants = require('../../../fixtures/constants');
const { requestTimeout, successStatusCode } = constants;


describe('sample smoke test', () => {
  it('completes checkout flow', () => {
    homePage.goToHomePage();
    homePage.addFeaturedFruitToCart();
    cy.intercept('*rs.fullstory.com/rec/bundle*').as('getBundleCall');
    cy.verifyBundleCalls(
      '@getBundleCall',
      requestTimeout,
      successStatusCode
    );
  });
});