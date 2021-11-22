const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('rod', '1', 'rod@live.com', 'rod93');
    expect(engineer.getGithub()).toBe('rod93');
})

test('get role', () => {
    const  engineer = new Engineer('rod', '1', 'rod@live.com', 'rod93');
    expect(engineer.getRole()).toBe('Engineer');
})