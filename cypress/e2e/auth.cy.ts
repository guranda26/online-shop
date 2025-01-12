describe("Auth", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Logs in successfully", () => {
    cy.get("[data-cy='sign-in']").click();

    cy.get("[data-cy='email-input']").type("guralemo@mail.com");
    cy.get("[data-cy='password-input']").type("Hello123.");

    cy.get("[data-cy='sign-in-btn']").click();

    cy.url().should("include", "/");
  });

  it("Logs out users", () => {
    cy.get("[data-cy='sign-in']").click();

    cy.get("[data-cy='email-input']").type("guralemo@mail.com");
    cy.get("[data-cy='password-input']").type("Hello123.");

    cy.get("[data-cy='sign-in-btn']").click();

    cy.url().should("include", "/");

    cy.get("[data-cy='sign-out']").click();

    cy.url().should("include", "/sign-in");
  });

  // it("Fails to log in successfully", () => {
  //   cy.visit("http://localhost:3000");

  //   cy.get("button").contains("Sign in").click();

  //   cy.get("input[name=email]").type("guralemo@mail.com");
  //   cy.get("input[name=password]").type("hhhhhh.");

  //   cy.get("button").contains("Sign in").click();

  //   cy.url().should("include", "/login");
  // });
});
