describe("Auth", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Logs in successfully", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");

    cy.get("[data-cy='sign-in-btn']").click();

    cy.url().should("include", "/");
  });

  it("Logs out users", () => {
    cy.get("[data-cy='email-input']").type("g_lemonjava@cu.edu.ge");
    cy.get("[data-cy='password-input']").type("Hello123.");

    cy.get("[data-cy='sign-in-btn']").click();

    cy.url().should("include", "/protected");

    cy.get("[data-cy='log-out']").click();

    cy.url().should("include", "/sign-in");
  });

  it("Registers successfully", () => {
    cy.get("[data-cy='sign-up']").click();

    cy.url().should("include", "/sign-up");

    cy.get("[data-cy='register-email-input']").type("testuser123@mail.com");
    cy.get("[data-cy='register-password-input']").type("Test123.");

    cy.get("[data-cy='sign-up-btn']").click();

    cy.url().should("include", "/");
  });
});
