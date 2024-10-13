import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLayoutComponent } from './second-layout.component';

describe('SecondLayoutComponent', () => {
  let component: SecondLayoutComponent;
  let fixture: ComponentFixture<SecondLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SecondLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
