describe("Delete request", () => {
   
    it("Delete an existing post using /posts api", () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/1'
           
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})