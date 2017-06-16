import { Ang2DojoWeatherPage } from './app.po';

describe('ang2-dojo-weather App', () => {
  let page: Ang2DojoWeatherPage;

  beforeEach(() => {
    page = new Ang2DojoWeatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
