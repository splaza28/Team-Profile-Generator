const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee('brad', 1, 'brad@live.com');
    expect(employee.getName()).toBe('brad');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('brad@live.com');
})

