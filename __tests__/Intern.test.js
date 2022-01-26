const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Amir', 1, 'amirb2467@gmail.com', 'ucla');

    expect(intern.getName()).toBe('Amir');
    expect(intern.getId()).toEqual(1);
    expect(intern.getEmail()).toBe('amirb2467@gmail.com');
    expect(intern.getSchool()).toBe('ucla');
    expect(intern.getRole()).toBe('Intern');
});