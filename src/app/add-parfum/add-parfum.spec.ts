import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddParfum } from './add-parfum';

describe('AddParfum', () => {
  let component: AddParfum;
  let fixture: ComponentFixture<AddParfum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParfum],
    }).compileComponents();

    fixture = TestBed.createComponent(AddParfum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
