import { User } from '../../users/entities/user.entity';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
