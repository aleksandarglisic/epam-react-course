describe("Movie App - Real Backend", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("loads movie list", () => {
        cy.contains("Find Your Movie").should("exist")
        cy.get(".movie-tile-container").should("exist")
    })

    it("search updates URL and list", () => {
        cy.get(".search-input").type("matrix")
        cy.contains("Search").click()

        cy.url().should("include", "query=matrix")

        cy.get(".movie-tile-container").should("exist")
        cy.contains("matrix", { matchCase: false }).should("exist")
    })

    it("select genre updates URL and filters list", () => {
        cy.get(".genre-button").contains("comedy").click()
        cy.url().should("include", "genre=comedy")

        cy.get(".movie-tile-container").should("exist")
        cy.contains("Comedy").should("exist")
    })

    it("select sort changes URL", () => {
        cy.get("select").select("title")
        cy.url().should("include", "sortBy=title")
    })

    it("clicking movie navigates to details preserving query", () => {
        cy.get(".movie-tile-container").first().click()

        cy.url().should("match", /\/\d+(\?.*)?$/)
        cy.get(".movie-meta").invoke("text").should("match", /\d{4}/)
    })

    it("direct URL to movie details works", () => {
        cy.visit("/447365")
        cy.get(".movie-meta").invoke("text").should("match", /\d{4}/)
    })
})
