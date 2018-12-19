import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';
import { getRenderedText } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display dashboard tittle', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Dashboard');
  });

  it('toggle off all buttons', () => {
    page.navigateTo();
    element.all(by.css('.toggle-on')).then(function(items) {
      for(var i = 0; i < items.length; i++)
        element(by.css('.toggle-on')).click();
    });
    expect(element(by.css('.extra-info')).getText()).toBe('No active accounts');
  });


});
