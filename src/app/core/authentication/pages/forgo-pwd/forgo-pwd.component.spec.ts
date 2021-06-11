import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgoPwdComponent } from './forgo-pwd.component';

describe('ForgoPwdComponent', () => {
  let component: ForgoPwdComponent;
  let fixture: ComponentFixture<ForgoPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgoPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgoPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
