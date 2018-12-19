import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';

/**
 * unit-testing
 */
describe('DashboardComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AppModule
      ],
    }).compileComponents();
  }));
/**
 * testing if the creation of the component is successful
 */
  it('should create the Component', () => {
      const fixture = TestBed.createComponent(DashboardComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });
/**
 * test if the fake data is loaded correctly
 */
  it(`fake data is loaded`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.accounts.length).toEqual(3);
  });

/**
 * test if the search input is binded correctly
 */
  it('text the input value binding', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('input'));
    let el = input.nativeElement;
    expect(el.value).toBe('');
    el.value = 'someValue';
    el.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.searchText).toBe('someValue');
  });

/**
 * test if the cards binding work correctly
 */
  it(`right number of cards are being generated`, () => {

    const NUMBEROFACCOUNTS = 5;
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    fixture.componentInstance.accounts = [];
    for( var i = 0; 
        fixture.componentInstance.accounts.push( {
            number: 0,
            active: false,
            subscription: {
                name:'basic',
                description: '',
                price: 12
            }
         } )< NUMBEROFACCOUNTS; 
        i++);
    fixture.detectChanges();
    let cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(NUMBEROFACCOUNTS);
  });

});
