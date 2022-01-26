const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Amir', 1, 'amirb2467@gmail.com');

    expect(employee.getName()).toBe('Amir');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toBe('amirb2467@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});