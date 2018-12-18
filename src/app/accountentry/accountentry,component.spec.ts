import { TestBed, async } from '@angular/core/testing';
import { AccountEntryComponent } from './accountentry.component';
import { AppModule } from '../app.module';

describe('AccountEntryComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule],
    }).compileComponents();

  }));

  it('should create the Component', () => {
      const fixture = TestBed.createComponent(AccountEntryComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });

  it(`state description deactive`, () => {
    const fixture = TestBed.createComponent(AccountEntryComponent);
    const app = fixture.debugElement.componentInstance;
    app.accountInfo = {
        number: 0,
        active: false,
        subscription: {
            name:'',
            description: '',
            price: 12
        }
     };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.state').textContent).toContain('Deactive');
  });
    
  it(`state description active`, () => {
    const fixture = TestBed.createComponent(AccountEntryComponent);
    const app = fixture.debugElement.componentInstance;
    app.accountInfo = {
        number: 0,
        active: true,
        subscription: {
            name:'',
            description: '',
            price: 12
        }
     };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.state').textContent).toContain('Active');
  });
});
