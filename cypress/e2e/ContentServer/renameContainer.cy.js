/// <reference types="cypress" />

describe("Renaming a container in Contant Server", () => {

    it("Should be able to submit a successful submission via user login page", () =>{
        //cypress code
        for (let i = 0; i < 300; i++) {
        cy.visit("https://cstest.nguk.cloud.opentext.com/livelink/livelink.exe?func=ll&objId=3152555&objAction=properties&nexturl=%2Flivelink%2Flivelink%2Eexe%3Ffunc%3Dll%26objId%3D3152555%26objAction%3Dbrowse%26viewType%3D1");
        // Clear the existing document name and type a new one
        cy.get('#docName').clear().type(i);
        // Click the save button
        cy.get('.saveButton').click();
        }
    });
});