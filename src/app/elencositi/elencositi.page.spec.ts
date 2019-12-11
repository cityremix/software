import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencositiPage } from './elencositi.page';

describe('ElencositiPage', () => {
  let component: ElencositiPage;
  let fixture: ComponentFixture<ElencositiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencositiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencositiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
