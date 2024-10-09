import loginPage from '@pages/LoginPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************



    // Print cypress-axe violations to the console
function printAccessibilityViolations(violations) {
    cy.task(
      'table',
      violations.map(({ id, impact, description, nodes }) => ({
        impact,
        description: `${description} (${id})`,
        nodes: nodes.length,
      })),
    ); }
  Cypress.Commands.add(
    'checkAccessibility',
    { prevSubject: 'optional',},
    (subject, { skipFailures = false } = {}) => {
      cy.checkA11y(subject, null, printAccessibilityViolations, skipFailures);
    });
  
    // Custom AXE-CORE Logging
    Cypress.Commands.add("customCheckAlly", () => {
      const severityIndicatorIcons = {
        minor: "⚪",
        moderate: "🌕",
        serious: "⭕",
        critical: "⛔",
      };
    
      function callback(violations) {
        violations.forEach((violation) => {
          const nodes = Cypress.$(
            violation.nodes.map((node) => node.target).join(",")
          );
    
          Cypress.log({
            name: `${severityIndicatorIcons[violation.impact]} AllY`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`,
          });
    
          violation.nodes.forEach(({ target }) => {
            Cypress.log({
              name: "ℹ▶",
              consoleProps: () => violation,
              $el: Cypress.$(target.join(",")),
              message: target,
            });
          });
        });
      }
      cy.checkA11y(null, null, callback);
    })