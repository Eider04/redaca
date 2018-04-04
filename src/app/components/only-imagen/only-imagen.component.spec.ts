import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyImagenComponent } from './only-imagen.component';

describe('OnlyImagenComponent', () => {
  let component: OnlyImagenComponent;
  let fixture: ComponentFixture<OnlyImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
