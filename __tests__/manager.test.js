const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('brad', 1, 'brad@live.com', '1109');
    expect(manager.getName()).toBe('brad');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getOfficeNumber()).toBe('1109');
})

test('get role', () => {
    const manager = new Manager('brad', 1, 'brad@live.com', '1109');
    expect(manager.getRole()).toBe('Manager');
})