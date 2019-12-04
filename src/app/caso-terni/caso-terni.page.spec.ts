import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasoTerniPage } from './caso-terni.page';

describe('CasoTerniPage', () => {
  let component: CasoTerniPage;
  let fixture: ComponentFixture<CasoTerniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoTerniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasoTerniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
