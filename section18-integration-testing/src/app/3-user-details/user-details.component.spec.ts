import { Router, ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { Observable, EMPTY, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  private subject = new Subject();
  // params: Observable<any> = EMPTY;

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
  
}



describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should redirect the user to the users page after save', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
  
  it('should navigate the user to the not found page when an invalid user id is passed', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    let activatedRoute: ActivatedRouteStub;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;

    activatedRoute.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
