//Login with  valid credentials
describe("Login Functionality", () => {
  it("allows the user to log in with valid credentials", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1000);

    cy.get('.modal-footer button[data-auth="login"]').click();

    cy.get("#loginEmail").invoke("val", "example@hotmail.com");
    cy.get("#loginPassword").invoke("val", "example123");
    cy.wait(1000);

    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);

    cy.get("button.btn-outline-warning").contains("Logout").should("exist");
  });
});

// Cannot login with invalid credentials.
describe("Invalid Login Handling", () => {
  it("displays an alert message for invalid login attempts", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1000);

    cy.get('.modal-footer button[data-auth="login"]').click();

    cy.get("#loginEmail").invoke("val", "noEmail@example.com");
    cy.get("#loginPassword").invoke("val", "Notcorrect");
    cy.wait(1000);

    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);

    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});

//-------- without bootstrap ---------//
// //Login with  valid credentials
// describe("Login Functionality", () => {
//   it("allows the user to log in with valid credentials", () => {
//     cy.visit("http://127.0.0.1:5500/");

//     cy.get("#loginForm").within(() => {
//       cy.get('input[type="email"]').type("user@example.com");
//       cy.get('input[type="password"]').type("password123");
//       cy.root().submit();
//     });

//     cy.get("#logout").should("exist");
//   });
// });

// //cannot login with invalid credentials.

// describe("Invalid Login Handling", () => {
//   it("displays an alert message for invalid login attempts", () => {
//     cy.visit("http://127.0.0.1:5500/");

//     cy.get("#loginForm").within(() => {
//       cy.get('input[type="email"]').type("invalid@example.com");
//       cy.get('input[type="password"]').type("incorrect");
//       cy.root().submit();
//     });

//     // Handle the alert dialog
//     cy.on("window:alert", (text) => {
//       expect(text).to.contains(
//         "Either your username was not found or your password is incorrect"
//       );
//     });
//   });
// });
