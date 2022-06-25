const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor(name, email, id, github) {
        // inherits properties from the parent Employee constructor
        super(name, email, id);

        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;