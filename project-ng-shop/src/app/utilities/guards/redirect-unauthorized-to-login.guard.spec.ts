import { TestBed } from '@angular/core/testing';

import { RedirectUnauthorizedToLoginGuard } from './redirect-unauthorized-to-login.guard';

describe('RedirectUnauthorizedToLoginGuard', () => {
  let guard: RedirectUnauthorizedToLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectUnauthorizedToLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
