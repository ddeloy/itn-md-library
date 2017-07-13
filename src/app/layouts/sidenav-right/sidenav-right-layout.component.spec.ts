import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavRightLayoutComponent } from './sidenav-right-layout.component';

describe('SidenavRightLayoutComponent', () => {
  let component: SidenavRightLayoutComponent;
  let fixture: ComponentFixture<SidenavRightLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavRightLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavRightLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
