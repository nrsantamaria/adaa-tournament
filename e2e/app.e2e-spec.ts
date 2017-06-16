import { AdaaTournamentPage } from './app.po';

describe('adaa-tournament App', () => {
  let page: AdaaTournamentPage;

  beforeEach(() => {
    page = new AdaaTournamentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
