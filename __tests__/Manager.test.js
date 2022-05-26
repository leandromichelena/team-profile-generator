const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.name).toBe('Michael');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('michael@company.com');
});

test("gets Manager's name property", () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test("gets Manager's id property", () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.getId()).toBe(manager.id);
});

test("gets Manager's email property", () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test("gets Manager's id property", () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.getRole()).toBe('Manager');
});

test("gets Manager's get office number property", () => {
    const manager = new Manager('Michael', 'michael@company.com', '123');

    expect(manager.getOfficeNumber()).toBe('123');
});