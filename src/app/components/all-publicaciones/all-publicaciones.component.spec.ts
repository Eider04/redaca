import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublicacionesComponent } from './all-publicaciones.component';

describe('AllPublicacionesComponent', () => {
  let component: AllPublicacionesComponent;
  let fixture: ComponentFixture<AllPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
