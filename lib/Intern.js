const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, id, school) {
        // inherits properties from the parent Employee constructor
        super(name, email, id);

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