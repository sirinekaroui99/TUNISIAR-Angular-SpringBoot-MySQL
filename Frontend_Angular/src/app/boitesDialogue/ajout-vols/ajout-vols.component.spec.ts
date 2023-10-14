import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVolsComponent } from './ajout-vols.component';

describe('AjoutVolsComponent', () => {
  let component: AjoutVolsComponent;
  let fixture: ComponentFixture<AjoutVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
