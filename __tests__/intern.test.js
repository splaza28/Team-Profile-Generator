const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('rod', '1', 'rod@live.com', 'TCNJ');
    expect(intern.getSchool()).toBe('TCNJ');
})

test('get role', () => {
    const intern = new Intern('rod', '1', 'rod@live.com', 'TCNJ');
    expect(intern.getRole()).toBe('Intern');
})