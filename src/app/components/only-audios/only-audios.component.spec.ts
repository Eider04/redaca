import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyAudiosComponent } from './only-audios.component';

describe('OnlyAudiosComponent', () => {
  let component: OnlyAudiosComponent;
  let fixture: ComponentFixture<OnlyAudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyAudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyAudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
