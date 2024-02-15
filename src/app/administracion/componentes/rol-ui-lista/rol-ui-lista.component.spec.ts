import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUiListaComponent } from './rol-ui-lista.component';

describe('RolUiListaComponent', () => {
  let component: RolUiListaComponent;
  let fixture: ComponentFixture<RolUiListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolUiListaComponent]
    });
    fixture = TestBed.createComponent(RolUiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
