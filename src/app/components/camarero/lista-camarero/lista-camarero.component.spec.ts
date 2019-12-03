import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCamareroComponent } from './lista-camarero.component';

describe('ListaCamareroComponent', () => {
  let component: ListaCamareroComponent;
  let fixture: ComponentFixture<ListaCamareroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCamareroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCamareroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
