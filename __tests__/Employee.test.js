const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets Employee's name property", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toEqual(expect.stringContaining(Employee.name.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toBe(employee.id);
});

test("gets Employee's email property", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee');
});