import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutanimalComponent } from './ajoutanimal.component';

describe('AjoutanimalComponent', () => {
  let component: AjoutanimalComponent;
  let fixture: ComponentFixture<AjoutanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutanimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
