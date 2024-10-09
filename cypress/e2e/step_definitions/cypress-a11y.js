// ///<reference types = 'cypress' />
// import homePage from '@pages/automation-tester/HomePage'
// import haircarePage from '@pages/automation-tester/HairCare'
// describe('Accessibility', () => {
//     before(() => {
//         cy.visit("https://automationteststore.com/");
    
//     });
//     it('Should run accessibility audits', () => {

//         homePage.goToHairCarePage(); 
//         cy.injectAxe(); //resolves to the default path  node_modules/axe-core/axe.min.js
//      //   scans the entire page by default
//         cy.checkA11y(); 
        
//     //scans the specifuc selector only
//        // cy.checkA11y(".mx-text.mx-name-text8"); 

//     //exclude the specific elements
//        // cy.checkA11y({exclude:['.mx-text.mx-name-text8']}); 

//     //run audit for wcag2aa and wcag2a standards
//         //  cy.checkA11y(null, {
//         //     runOnly: {
//         //       type: 'tag',
//         //       values: ['wcag2aa','wcag2a']
//         //     }
//         //   })

//     // enable or disable certain rules, or a standardized set of rules (as tags)
//         //   cy.checkA11y(null, {
//         //     rules: {
//         //       "landmark-one-main": { enabled: false },
//         //     },
//         //   });   
        
//         cy.checkAccessibility();
//     });

    
//     it.only('Custom Accessibility', () =>  {

//         homePage.goToHairCarePage(); 
    
//         cy.injectAxe();
//         cy.customCheckAlly();
   
//     })
// });