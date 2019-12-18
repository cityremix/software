import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabbricaArmiPage } from './fabbrica-armi.page';

describe('FabbricaArmiPage', () => {
  let component: FabbricaArmiPage;
  let fixture: ComponentFixture<FabbricaArmiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabbricaArmiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabbricaArmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
