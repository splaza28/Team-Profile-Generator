const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('brad', 1, 'brad@live.com', 'TCNJ');
    expect(intern.getName()).toBe('brad');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getSchool()).toBe('TCNJ');
})

test('get role', () => {
    const intern = new Intern('brad', '1', 'brad@live.com', 'TCNJ');
    expect(intern.getRole()).toBe('Intern');
})