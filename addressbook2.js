class AddressBook {
    firstname;
    lastname;
    address;
    city;
    state;
    zipcode;
    phoneNumber;
    emailId;

    constructor(...parameters) {
        this.firstname = parameters[0];
        this.lastname = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipcode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    get firstname() { return this._firstname; }
    set firstname(firstname) {
        let pattern1 = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (pattern1.test(firstname))
            this._firstname = firstname;
        else console.log('FirstName is Incorrect!');

    }

    get lastname() { return this._lastname; }
    set lastname(lastname) {
        let pattern2 = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (pattern2.test(lastname))
            this._lastname = lastname;
        else console.log('LastName is Incorrect!');
    }

    get address() { return this._address; }
    set address(address) {
        let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern3.test(address))
            this._address = address;
        else console.log('Address is Incorrect!');
    }

    get city() { return this._city; }
    set city(city) {
        let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern4.test(city))
            this._city = city;
        else console.log('City is Incorrect!');
    }

    get state() { return this._state; }
    set state(state) {
        let pattern5 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern5.test(state))
            this._state = state;
        else console.log('State is Incorrect!');
    }

    get zipcode() { return this._zipcode; }
    set zipcode(zipcode) {
        let pattern6 = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if (pattern6.test(zipcode))
            this._zipcode = zipcode;
        else console.log('Zipcode is Incorrect!');
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let pattern7 = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
        if (pattern7.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else console.log('PhoneNumber is Incorrect!');
    }

    get emailId() { return this._emailId; }
    set emailId(emailId) {
        let pattern8 = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
        if (pattern8.test(emailId))
            this._emailId = emailId;
        else console.log('EmailId is Incorrect!');
    }

    toString() {
        return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
            ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
    }
}

let contactsArr = new Array();
const addressbook = new AddressBook("monika", "mhaske", "karvenagar", "pune", "Maharashtra", "444444", "+91 8890125689", "monika46@.com");
contactsArr.push(addressbook);

const addressbook2 = new AddressBook("Arti", "Kamble", "Surat", "surat", "gujrat", "876461", "+91 5213409871", "aert.l@google.com");
contactsArr.push(addressbook2);

const addressbook3 = new AddressBook("mayuri", "mulay", "maissour", "Babglore", "Indiana", "430016", "+81 7801456780", "mayuri.ty@gmail.com");
contactsArr.push(addressbook3);

console.log(contactsArr.length);
for (var i = 0; i < contactsArr.length; i++) {
    console.log(contactsArr[i]);
}

//To update the Entries in the array
let result = contactsArr.filter((e) => e.firstname == 'Hope');
console.log(result);

if (result && result.length > 0) {
    result[0].firstname = 'Monika';
    result[0].address = 'Karvenagar';
}
console.log("New Array after Updation: " + contactsArr);

//To Delete the contact from the array
contactsArr = contactsArr.filter((e) => e.firstname != 'Hope');
console.log("New Array After Delete: " + contactsArr);

//To find the Number of contacts in the array
let numOfContacts = contactsArr.length;
console.log("Number of Contacts in the AddressBook: " + numOfContacts);

//To prevent duplicate entry in the Array
const addressbook4 = new AddressBook("shital", "Colon", "Crossway", "Havana", "Indiana", "560116", "+61 3017856780", "s.colon@gmail.com");
if (!contactsArr.some(el => el.firstname == "shital"))
    contactsArr.push(addressbook4);
else
    console.log("Value already Exists!");

console.log("Unique Array: " + contactsArr);

//To check for the Person in the Address Book and print it
let checkCity = contactsArr.filter((e) => e.city == 'Kansas');
console.log("Contact from the addressBook as per Given city: " + checkCity);

let checkState = contactsArr.filter((e) => e.state == 'Kentucky');
console.log("Contact from the addressBook as per given state: " + checkState);

//Count the number of contacts for particular city or state

const addressbook5 = new AddressBook("Jack", "Dosan", "Highpalace", "Kansas", "Kentucky", "890461", "+11 8901409871", "jack123@google.com");
contactsArr.push(addressbook5);

let counter = 0;
for (let i = 0; i < contactsArr.length; i++) {
    if (contactsArr[i].city == 'Kansas')
        counter++;
}
console.log("Number of contacts for the given City in the AddressBook: " + counter);

let counter1 = 0;
for (let i = 0; i < contactsArr.length; i++) {
    if (contactsArr[i].state == 'Missouri')
        counter1++;
}
console.log("Number of contacts for the given State in the AddressBook: " + counter1);

//To sort the array according to FirstName
function sortContactArray(firstname) {
    var sortOrder = 1;

    if (firstname[0] == "-") {
        sortOrder = -1;
        firstname = firstname.substr(1);
    }
    return function(a, b) {
        if (sortOrder == -1) {
            return b[firstname].localeCompare(a[firstname]);
        } else {
            return a[firstname].localeCompare(b[firstname]);
        }
    }
}

contactsArr.sort(sortContactArray("firstname"));
console.log("After Sorting according to Firstname: " + contactsArr);

//To sort the Array according to City, State, ZipCode

contactsArr.sort(sortContactArray("city"));
console.log("After Sorting according to City: " + contactsArr);

contactsArr.sort(sortContactArray("state"));
console.log("After Sorting according to State: " + contactsArr);

contactsArr.sort(sortContactArray("zipcode"));
console.log("After Sorting according to ZipCode: " + contactsArr);sss