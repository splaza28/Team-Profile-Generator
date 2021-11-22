const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee('rod', '1', 'rod@live.com');
    expect(employee.getName()).toBe('rod');
    expect(employee.getId()).toBe('1');
    expect(employee.getEmail()).toBe('rod@live.com');
})

test('get Employee role', () => {
    const employee = new Employee('rod', '1', 'rod@live.com');
    expect(employee.getRole()).toBe("Employee");
});