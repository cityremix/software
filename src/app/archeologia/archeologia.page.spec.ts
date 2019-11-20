import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArcheologiaPage } from './archeologia.page';

describe('ArcheologiaPage', () => {
  let component: ArcheologiaPage;
  let fixture: ComponentFixture<ArcheologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcheologiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
