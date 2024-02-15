import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUiComponent } from './rol-ui.component';

describe('RolUiComponent', () => {
  let component: RolUiComponent;
  let fixture: ComponentFixture<RolUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolUiComponent]
    });
    fixture = TestBed.createComponent(RolUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
