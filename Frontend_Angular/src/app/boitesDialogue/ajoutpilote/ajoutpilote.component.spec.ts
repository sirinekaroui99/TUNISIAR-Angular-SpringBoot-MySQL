import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpiloteComponent } from './ajoutpilote.component';

describe('AjoutpiloteComponent', () => {
  let component: AjoutpiloteComponent;
  let fixture: ComponentFixture<AjoutpiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpiloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutpiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
