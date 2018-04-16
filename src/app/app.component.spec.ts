import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HourPipe } from './hour.pipe';
import { MaterialModule } from './material.module';
import { TimeService } from './service/time.service';
import { MockTimeService } from './testing/time.service.mock';

describe('AppComponent', () => {
  beforeEach(() => {
    let timeService: TimeService;
    let spy: any;

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HourPipe,
      ],
      imports: [
        MaterialModule,
      ],
      providers: [
        TimeService,
      ],
    }).compileComponents();
  });

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ship's Time`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(`Ship's Time`);
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ship\'s Time');
  });
});
