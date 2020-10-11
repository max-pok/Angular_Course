import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { from } from 'rxjs';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [TodoService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should load todos from the server', () => {
    // fixture.debugElement.injector.get(TodoService); // gets the dependencies from the component level.
    const service = TestBed.inject(TodoService); // gets the dependencires from the module level.
    spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));
    
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });
  
  // it('should load todos from the server async', /* or async */ fakeAsync(() => {
  //   const service = TestBed.inject(TodoService); // gets the dependencires from the module level.
  //   spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    
  //   // // if using async
  //   // fixture.whenStable().then(() => {
  //   //   expect(component.todos.length).toBe(3);
  //   // });

  //   // if using fakeAsync
  //   tick();
  //   expect(component.todos.length).toBe(3);
  // }));
});
