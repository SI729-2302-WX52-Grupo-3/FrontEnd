import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullChangePasswordComponent } from './succesfull-change-password.component';

describe('SuccesfullChangePasswordComponent', () => {
  let component: SuccesfullChangePasswordComponent;
  let fixture: ComponentFixture<SuccesfullChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesfullChangePasswordComponent]
    });
    fixture = TestBed.createComponent(SuccesfullChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
