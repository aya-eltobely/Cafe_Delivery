import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnwayComponent } from './order-onway.component';

describe('OrderOnwayComponent', () => {
  let component: OrderOnwayComponent;
  let fixture: ComponentFixture<OrderOnwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderOnwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderOnwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
