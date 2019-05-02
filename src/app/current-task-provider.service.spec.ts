import { TestBed } from '@angular/core/testing';

import { CurrentTaskProviderService } from './current-task-provider.service';

describe('CurrentTaskProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentTaskProviderService = TestBed.get(CurrentTaskProviderService);
    expect(service).toBeTruthy();
  });
});
