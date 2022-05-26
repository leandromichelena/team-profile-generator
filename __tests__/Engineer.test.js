const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('mark@company.com', 'mark346');
});

test("gets Engineer's name property", () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("gets Engineer's id property", () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.getId()).toBe(engineer.id);
});

test("gets Engineer's email property", () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("gets Engineer's id property", () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.getRole()).toBe('Engineer');
});

test("gets Engineer's github property", () => {
    const engineer = new Engineer('Mark', 'mark@company.com', 'mark346');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});