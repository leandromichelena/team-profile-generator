const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 'dave@company.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dave@company.com');
});

test("gets Employee's name property", () => {
    const employee = new Employee('Dave', 'dave@company.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave', 'dave@company.com');

    expect(employee.getId()).toBe(employee.id);
});

test("gets Employee's email property", () => {
    const employee = new Employee('Dave', 'dave@company.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave', 'dave@company.com');

    expect(employee.getRole()).toBe('Employee');
});