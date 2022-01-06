const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('brad', 1, 'brad@live.com', 'brad93');
    expect(engineer.getName()).toBe('brad');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getGithub()).toBe('brad93');
})

test('get role', () => {
    const  engineer = new Engineer('brad', '1', 'brad@live.com', 'brad93');
    expect(engineer.getRole()).toBe('Engineer');
})