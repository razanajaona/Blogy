import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesSucreesComponent } from './recettes-sucrees.component';

describe('RecettesSucreesComponent', () => {
  let component: RecettesSucreesComponent;
  let fixture: ComponentFixture<RecettesSucreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesSucreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettesSucreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
