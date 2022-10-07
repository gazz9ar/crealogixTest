import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsHomeComponent } from './films-home.component';

describe('FilmsHomeComponent', () => {
  let component: FilmsHomeComponent;
  let fixture: ComponentFixture<FilmsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
