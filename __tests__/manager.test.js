const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('rod', '1', 'rod@live.com', '1109');
    expect(manager.getOfficeNumber()).toBe('1109');
})

test('get role', () => {
    const manager = new Manager('rod', '1', 'rod@live.com', '1109');
    expect(manager.getRole()).toBe('Manager');
})