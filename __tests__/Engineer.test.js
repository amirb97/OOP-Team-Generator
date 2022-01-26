const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Amir', 1, 'amirb2467@gmail.com', 'amirb97');

    expect(engineer.getName()).toBe('Amir');
    expect(engineer.getId()).toEqual(1);
    expect(engineer.getEmail()).toBe('amirb2467@gmail.com');
    expect(engineer.getGithub()).toBe('amirb97');
    expect(engineer.getRole()).toBe('Engineer');
});