//---This test logs in a user, performs a logout, and verifies that the login button exists after logging out
describe("Logout function", () => {
  it("Logs in the user and log out.", () => {
    //-- Visit page
    cy.visit("/?view=profile&name=Tinberg92");
    cy.wait(1000);
    cy.get('.modal-footer button[data-auth="login"]').click();

    //-- Login
    cy.get("#loginEmail").invoke("val", "mattin51583@stud.noroff.no");
    cy.get("#loginPassword").invoke("val", "detvarengang");
    cy.wait(1000);
    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);
    //--logout
    cy.get('button[data-auth="logout"]').click();
    //--login exist = logout successfully
    cy.get('.modal-footer button[data-auth="login"]').should("exist");
  });
});

// //---------- without bootstrap ----------//
// describe("Logout Functionality", () => {
//   it("successfully logs out the user and clears browser storage", () => {
//     cy.window().then((win) => {
//       win.localStorage.setItem("token", "testToken123");
//     });

//     //(This is the hardcoded url with my username. just for testin purposes)
//     cy.visit("/?view=profile&name=Tinberg92");

//     cy.window().its("localStorage.token").should("equal", "testToken123");

//     cy.get("button#logout").click();

//     cy.window().its("localStorage.token").should("not.exist");
//   });
// });
