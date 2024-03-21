describe("Logout Functionality", () => {
  it("successfully logs out the user and clears browser storage", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("token", "testToken123");
    });

    //(This is the hardcoded url with my username. just for testin purposes)
    cy.visit("/?view=profile&name=Tinberg92");

    cy.window().its("localStorage.token").should("equal", "testToken123");

    cy.get("button#logout").click();

    cy.window().its("localStorage.token").should("not.exist");
  });
});
