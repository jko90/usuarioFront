import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticUiComponent } from './autentic-ui.component';

describe('AutenticUiComponent', () => {
  let component: AutenticUiComponent;
  let fixture: ComponentFixture<AutenticUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticUiComponent]
    });
    fixture = TestBed.createComponent(AutenticUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
