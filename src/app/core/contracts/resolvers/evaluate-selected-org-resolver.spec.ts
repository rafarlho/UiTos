import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { evaluateSelectedOrgResolver } from './evaluate-selected-org-resolver';

describe('evaluateSelectedOrgResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => evaluateSelectedOrgResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
