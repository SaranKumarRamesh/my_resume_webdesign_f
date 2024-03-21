import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEduComponent } from './exp-edu.component';

describe('ExpEduComponent', () => {
  let component: ExpEduComponent;
  let fixture: ComponentFixture<ExpEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpEduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
