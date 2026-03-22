class OpportunityPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.click('text=Opportunities');
  }

  async createOpportunity(name) {
    await this.page.click('text=New');
    await this.page.fill('input[name="Name"]', name);
    await this.page.click('text=Save');
  }
}

module.exports = OpportunityPage;
