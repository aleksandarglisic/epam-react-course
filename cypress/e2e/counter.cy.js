describe('Counter Component', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it("displays the initial value", () => {
    cy.get("h1").should("contain.text", "Counter Value: 0");
  });

  it("increments the counter when Increment button is clicked", () => {
    cy.contains("Increment").click();
    cy.get("h1").should("contain.text", "Counter Value: 1");

    cy.contains("Increment").click();
    cy.get("h1").should("contain.text", "Counter Value: 2");
  });

  it("decrements the counter when Decrement button is clicked", () => {
    cy.contains("Decrement").click();
    cy.get("h1").should("contain.text", "Counter Value: -1");

    cy.contains("Decrement").click();
    cy.get("h1").should("contain.text", "Counter Value: -2");
  });

})