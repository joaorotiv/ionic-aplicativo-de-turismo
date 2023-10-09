import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PedradacebolaPage } from './pedradacebola.page';

describe('PedradacebolaPage', () => {
  let component: PedradacebolaPage;
  let fixture: ComponentFixture<PedradacebolaPage>;

  beforeEach(async (() => {
    fixture = TestBed.createComponent(PedradacebolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
