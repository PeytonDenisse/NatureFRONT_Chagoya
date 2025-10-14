import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsList } from './trails-list';

describe('TrailsList', () => {
  let component: TrailsList;
  let fixture: ComponentFixture<TrailsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
