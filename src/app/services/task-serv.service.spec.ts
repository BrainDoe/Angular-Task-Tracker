import { TestBed } from '@angular/core/testing';

import { TaskServService } from './task-serv.service';

describe('TaskServService', () => {
  let service: TaskServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
