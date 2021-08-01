import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteGridComponent } from './website-grid.component';

describe('WebsiteGridComponent', () => {
  let component: WebsiteGridComponent;
  let fixture: ComponentFixture<WebsiteGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
