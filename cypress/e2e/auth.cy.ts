describe("Auth", () => {
  it("Logs in successfully", () => {
    cy.visit("http://localhost:3000");

    cy.get("button").contains("Sign in").click();

    cy.get("input[name=email]").type("guralemo@mail.com");
    cy.get("input[name=password]").type("Hello123.");

    cy.get("button").contains("Sign in").click();

    cy.url().should("include", "/");
  });
});
