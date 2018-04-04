import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyVideosComponent } from './only-videos.component';

describe('OnlyVideosComponent', () => {
  let component: OnlyVideosComponent;
  let fixture: ComponentFixture<OnlyVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
