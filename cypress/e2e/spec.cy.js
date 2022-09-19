describe("empty spec", () => {
  const urlBase = "https://homologa.pjc.mt.gov.br/Civitas";

  it("passes", () => {
    cy.visit(`${urlBase}`);
  });
});
