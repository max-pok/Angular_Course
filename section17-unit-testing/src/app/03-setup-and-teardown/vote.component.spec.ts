import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // Set up
    component = new VoteComponent();
  });

  afterEach(() => {
    // A place to do clean up (tear down)
  });

  beforeAll(() => {
    // Executed once before all tests
  });

  afterAll(() => {
    // Executed once after all tests
  });

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });
  
  it('should decrement totalVotes when upvoted', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });

  it('', () => {
  });
});
