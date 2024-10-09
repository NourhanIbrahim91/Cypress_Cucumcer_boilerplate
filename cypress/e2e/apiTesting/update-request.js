describe("Update request", () => {
    
    it("Update an existing post using /posts api", () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/posts/2',
            body: {
                "title": "new UPDATED post req",
                "author": "Nour - update"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})