import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletvcomponentComponent } from './singletvcomponent.component';

describe('SingletvcomponentComponent', () => {
  let component: SingletvcomponentComponent;
  let fixture: ComponentFixture<SingletvcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletvcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletvcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
