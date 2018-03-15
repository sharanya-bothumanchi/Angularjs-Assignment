import { AngularTaskPage } from './app.po';

describe('angular-task App', function() {
  let page: AngularTaskPage;

  beforeEach(() => {
    page = new AngularTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
