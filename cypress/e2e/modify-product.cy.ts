describe("Products modifification", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deletes product from cart", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");
    cy.get("[data-cy='sign-in-btn']").click();
    cy.url().should("include", "/");

    cy.get("[data-cy='product-url']").click();
    cy.url().should("include", "/products");

    cy.get("[data-cy='product-item']")
      .first()
      .find("[data-cy='add-to-cart-btn']")
      .click();

    cy.get("[data-cy='cart-url']").click();
    cy.url().should("include", "/cart");

    cy.get("[data-cy='cart-item-0']").should("be.visible");

    cy.get("[data-cy='cart-item-0']").find("[data-cy='delete-btn-0']").click();
    cy.wait(500);
    cy.get("[data-cy='cart-item-0']").should("not.exist");
  });
});
