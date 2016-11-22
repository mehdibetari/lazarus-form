import { LAZARUSPage } from './app.po';

describe('lazarus App', function() {
  let page: LAZARUSPage;

  beforeEach(() => {
    page = new LAZARUSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
