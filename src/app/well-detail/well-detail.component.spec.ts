import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellDetailComponent } from './well-detail.component';

describe('WellDetailComponent', () => {
  let component: WellDetailComponent;
  let fixture: ComponentFixture<WellDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
