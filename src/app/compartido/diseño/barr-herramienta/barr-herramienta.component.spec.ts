import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrHerramientaComponent } from './barr-herramienta.component';

describe('BarrHerramientaComponent', () => {
  let component: BarrHerramientaComponent;
  let fixture: ComponentFixture<BarrHerramientaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrHerramientaComponent]
    });
    fixture = TestBed.createComponent(BarrHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
