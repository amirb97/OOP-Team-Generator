const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Amir', 1, 'amirb2467@gmail.com', '2927');

    expect(manager.getName()).toBe('Amir');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('amirb2467@gmail.com');
    expect(manager.getOfficeNum()).toBe('2927');
    expect(manager.getRole()).toBe('Manager');
});