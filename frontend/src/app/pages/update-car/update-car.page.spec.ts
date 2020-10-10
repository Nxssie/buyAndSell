import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateCarPage } from './update-car.page';

describe('UpdateCarPage', () => {
  let component: UpdateCarPage;
  let fixture: ComponentFixture<UpdateCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
