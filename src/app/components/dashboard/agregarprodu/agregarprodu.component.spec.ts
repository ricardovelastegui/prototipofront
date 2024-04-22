import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarproduComponent } from './agregarprodu.component';

describe('AgregarproduComponent', () => {
  let component: AgregarproduComponent;
  let fixture: ComponentFixture<AgregarproduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarproduComponent]
    });
    fixture = TestBed.createComponent(AgregarproduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
