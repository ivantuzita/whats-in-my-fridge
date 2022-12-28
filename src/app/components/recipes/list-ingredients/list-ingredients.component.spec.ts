import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngredientsComponent } from './list-ingredients.component';

describe('ListIngredientsComponent', () => {
  let component: ListIngredientsComponent;
  let fixture: ComponentFixture<ListIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
