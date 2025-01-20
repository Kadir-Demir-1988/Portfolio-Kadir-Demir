import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayaboutmeComponent } from './sayaboutme.component';

describe('SayaboutmeComponent', () => {
  let component: SayaboutmeComponent;
  let fixture: ComponentFixture<SayaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SayaboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
