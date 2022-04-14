export class BillingDetailsPage {

    inputCreditCardDetails(creditCartDetails) {
        cy.get('input#credit_card_number')
            .clear()
            .type(creditCartDetails.number);
        // fill other details
    }
}

export const billingDetailsPage = new BillingDetailsPage();