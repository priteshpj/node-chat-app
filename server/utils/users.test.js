const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();

    users.users = [{
      id: '1',
      name: 'User one',
      room: 'Node course'
    }, {
      id: '2',
      name: 'User two',
      room: 'React course'
    }, {
      id: '3',
      name: 'User three',
      room: 'Node course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'PJ',
      room: 'gossip room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user])
  });

  it('shoud remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('shoud not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);

  });

  it('shoud find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('shoud not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['User one', 'User three']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['User two']);
  });

});
