import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HourPipe } from './hour.pipe';
import { TimeService } from './service/time.service';
import { MockTimeService } from './testing/time.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HourPipe,
      ],
      providers: [
        { provide: TimeService, useClass: MockTimeService },
      ],
    }).compileComponents();
  }));

  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Ship's Time`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(`Ship's Time`);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ship\'s Time');
  }));
});
