const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.name).toBe('Danielle');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('danielle@company.com');
});

test("gets Intern's name property", () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("gets Intern's id property", () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.getId()).toBe(intern.id);
});

test("gets Intern's email property", () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test("gets Intern's id property", () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.getRole()).toBe('Intern');
});

test("gets Intern's github property", () => {
    const intern = new Intern('Danielle', 'danielle@company.com', 'University of Toronto');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});