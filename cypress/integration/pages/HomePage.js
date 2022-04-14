export class HomePage {

    goToHomePage() {
        cy.visit('/');
    }

    addFeaturedFruitToCart() {
        cy.get('div.featured-fruit a.featured-fruit-name').first().click();
    }
}

export const homePage = new HomePage();