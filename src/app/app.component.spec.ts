import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Watch } from './domain/watch';
import { HourPipe } from './hour.pipe';
import { MaterialModule } from './material.module';
import { TimeService } from './service/time.service';

describe('AppComponent', () => {
  let timeService: TimeService;

  beforeEach(() => {

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

    timeService = TestBed.get(TimeService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialise the app via OnInit', () => {
    spyOn(timeService, 'getWatches');
    spyOn(timeService, 'getShipsTime');

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(timeService.getWatches).toHaveBeenCalledTimes(1);
    expect(timeService.getShipsTime).toHaveBeenCalled();
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
