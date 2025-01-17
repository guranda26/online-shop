import "@testing-library/cypress";

describe("Products modifification", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adds a new product", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");
    cy.get("[data-cy='sign-in-btn']").click();
    cy.url().should("include", "/");

    cy.get("[data-cy='store-url']").click();
    cy.url().should("include", "/store");

    cy.get("[data-cy='product-name-input']").type("A new lipstick");
    cy.get("[data-cy='product-price-input']").type("20");
    cy.get("[data-cy='product-description-input']").type(
      "Matte Revolution Hydrating Lipstick"
    );
    cy.get("[data-cy='product-category-input']").type("Lipstick");
    cy.get("[data-cy='product-imageUrl-input']").type(
      "https://cdn.shopify.com/s/files/1/0646/4435/0187/files/pepperment_bark.jpg?v=1730413944&w=750"
    );

    cy.get("[data-cy='add-product-btn']").click();

    cy.findByText("Product created successfully!").should("be.visible");

    cy.get("[data-cy='product-url']").click();
    cy.url().should("include", "/products");

    cy.wait(10000);

    cy.get("[data-cy='new-product-name']").last().findByText("A new lipstick");
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
