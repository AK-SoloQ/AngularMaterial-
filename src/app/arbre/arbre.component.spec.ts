import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbreComponent } from './arbre.component';

describe('ArbreComponent', () => {
  let component: ArbreComponent;
  let fixture: ComponentFixture<ArbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
