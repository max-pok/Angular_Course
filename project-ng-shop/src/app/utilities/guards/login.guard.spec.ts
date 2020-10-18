import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';

describe('RedirectUnauthorizedToLoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});