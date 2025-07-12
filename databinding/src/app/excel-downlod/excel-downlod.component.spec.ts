import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDownlodComponent } from './excel-downlod.component';

describe('ExcelDownlodComponent', () => {
  let component: ExcelDownlodComponent;
  let fixture: ComponentFixture<ExcelDownlodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelDownlodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelDownlodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
