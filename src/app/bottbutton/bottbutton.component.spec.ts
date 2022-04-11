import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottbuttonComponent } from './bottbutton.component';

describe('BottbuttonComponent', () => {
  let component: BottbuttonComponent;
  let fixture: ComponentFixture<BottbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
