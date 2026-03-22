class LeadPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.click('text=Leads');
  }

  async createLead(first, last, company) {
    await this.page.click('text=New');
    await this.page.fill('input[name="firstName"]', first);
    await this.page.fill('input[name="lastName"]', last);
    await this.page.fill('input[name="Company"]', company);
    await this.page.click('text=Save');
  }
}

module.exports = LeadPage;
