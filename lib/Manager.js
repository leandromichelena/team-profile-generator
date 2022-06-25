const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        // inherits properties from the parent Employee constructor
        super(name, email, id);

        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'