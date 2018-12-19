import { AppPage } from './app.po';
import { element, by } from 'protractor';

/**
 * e2e testing
 */
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /**
   * test if the right title is on the page
   */
  it('should display dashboard tittle', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Dashboard');
  });
/**
 * test turning all the buttons off and get 0 costs
 */
  it('toggle off all buttons', () => {
    page.navigateTo();
    element.all(by.css('.toggle-on')).then(function(items) {
      for(var i = 0; i < items.length; i++)
        element(by.css('.toggle-on')).click();
    });
    expect(element(by.css('.extra-info')).getText()).toBe('No active accounts');
  });


});
