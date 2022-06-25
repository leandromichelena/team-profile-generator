const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 'dave@company.com', '32');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual('32');
    expect(employee.email).toBe('dave@company.com');
});

test("gets Employee's name property", () => {
    const employee = new Employee('Dave', 'dave@company.com', '32');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave', 'dave@company.com', '32');

    expect(employee.getId()).toBe(employee.id);
});

test("gets Employee's email property", () => {
    const employee = new Employee('Dave', 'dave@company.com', '32');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("gets Employee's id property", () => {
    const employee = new Employee('Dave', 'dave@company.com', '32');

    expect(employee.getRole()).toBe('Employee');
});