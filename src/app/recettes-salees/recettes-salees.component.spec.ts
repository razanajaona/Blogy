import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesSaleesComponent } from './recettes-salees.component';

describe('RecettesSaleesComponent', () => {
  let component: RecettesSaleesComponent;
  let fixture: ComponentFixture<RecettesSaleesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesSaleesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettesSaleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
