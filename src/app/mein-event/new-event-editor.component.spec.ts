import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventEditorComponent } from './new-event-editor.component';

describe('NewEventEditorComponent', () => {
  let component: NewEventEditorComponent;
  let fixture: ComponentFixture<NewEventEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
