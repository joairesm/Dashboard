import { TestBed, async } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

/**
 * unit-testing
 * testing if the creation of the app is successful
 */
describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        AppModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  });
  
});
