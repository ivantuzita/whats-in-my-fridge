import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIngredientComponent } from './delete-ingredient.component';

describe('DeleteIngredientComponent', () => {
  let component: DeleteIngredientComponent;
  let fixture: ComponentFixture<DeleteIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
