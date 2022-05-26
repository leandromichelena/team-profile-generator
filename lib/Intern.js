const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, school) {
        // inherits properties from the parent Employee constructor
        super(name, email);

        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;