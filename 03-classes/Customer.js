var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    // accessors
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (theLast) {
        this.lastName = theLast;
    };
    return Customer;
}());
// tsc --noEmitOnError Customer.ts {{ do not generate .js file if there is a compilation error }}
var customer = new Customer('Felipe', 'Santos');
console.log(customer.getFirstName() + " " + customer.getLastName());
