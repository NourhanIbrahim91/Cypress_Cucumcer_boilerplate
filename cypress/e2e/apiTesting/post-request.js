/// <reference types= "Cypress" />

describe("POST request", () => {
    var titleOfPosts = new Array();
    it("Validate status code of /posts api", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "title": "new record using the post req",
                "author": "Nour"
            }
        }).then(response => {
            expect(response.status).to.eq(201)
        })
    })

    it("title of the latest Post", () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            header: { accept: "application/json" }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(function (item) {
                titleOfPosts.push(item["title"])
            })
            var latestPost = titleOfPosts[titleOfPosts.length - 1]
            expect(latestPost).to.eq("new record using the post req")
        })
    })

})