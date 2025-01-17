import "@testing-library/cypress";

describe("Product purchase", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("POST", "/api/checkout-session", {
      fixture: "payment_intent.json",
    }).as("createCheckoutSession");

    cy.intercept("POST", "/order-success?*", {
      body: {
        error: false,
      },
    }).as("confirmPayment");
  });

  it("Can complete a product purchase", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");
    cy.get("[data-cy='sign-in-btn']").click();

    cy.get("[data-cy='product-url']").click();
    cy.url().should("include", "/products");

    cy.get("[data-cy='product-item']")
      .first()
      .find("[data-cy='buy-product']")
      .click();

    cy.wait(1000);
    cy.get('[data-cy="purchased-product"]').should("exist");
    cy.findAllByText("Payment Successful!").should("be.visible");

    cy.get('[data-cy="return-btn"]').click();

    cy.url().should("include", "/products");
  });

  it("Can add product to order checkout", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");
    cy.get("[data-cy='sign-in-btn']").click();
    cy.url().should("include", "/");

    cy.get("[data-cy='product-url']").click();
    cy.url().should("include", "/products");

    cy.get("[data-cy='product-item']")
      .first()
      .find("[data-cy='new-product-name']")
      .invoke("text")
      .then((productName) => {
        cy.get("[data-cy='product-item']")
          .first()
          .find("[data-cy='buy-product']")
          .click();

        cy.wait(1000);
        cy.get('[data-cy="purchased-product"]').should("exist");
        cy.findAllByText("Payment Successful!").should("be.visible");

        cy.get('[data-cy="return-btn"]').click();
        cy.url().should("include", "/products");

        cy.wait(5000);
        cy.get("[data-cy='profile-icon']").trigger("mouseover");

        cy.get("[data-cy='order-checkout-url']").click({
          force: true,
        });
        cy.url().should("include", "/orders");

        cy.get("[data-cy='order-product']")
          .last()
          .should("exist")
          .and("contain.text", productName);
      });
  });
});
