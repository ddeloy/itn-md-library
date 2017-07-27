import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCustomComponent } from './menu-custom.component';

describe('MenuCustomComponent', () => {
  let component: MenuCustomComponent;
  let fixture: ComponentFixture<MenuCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
