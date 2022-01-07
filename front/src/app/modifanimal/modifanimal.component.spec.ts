import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifanimalComponent } from './modifanimal.component';

describe('ModifanimalComponent', () => {
  let component: ModifanimalComponent;
  let fixture: ComponentFixture<ModifanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifanimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
