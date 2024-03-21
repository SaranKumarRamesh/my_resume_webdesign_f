import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPrjComponent } from './skill-prj.component';

describe('SkillPrjComponent', () => {
  let component: SkillPrjComponent;
  let fixture: ComponentFixture<SkillPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillPrjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
