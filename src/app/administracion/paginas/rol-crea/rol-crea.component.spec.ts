import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCreaComponent } from './rol-crea.component';

describe('RolCreaComponent', () => {
  let component: RolCreaComponent;
  let fixture: ComponentFixture<RolCreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolCreaComponent]
    });
    fixture = TestBed.createComponent(RolCreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
