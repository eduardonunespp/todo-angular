import { TestBed } from '@angular/core/testing';

import { SharedListsTaskDataService } from './shared-lists-task-data.service';

describe('SharedListsTaskDataService', () => {
  let service: SharedListsTaskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedListsTaskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
