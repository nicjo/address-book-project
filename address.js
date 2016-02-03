var inquirer = require("inquirer");
var Table = require('cli-table');

var addressBook = {};

var person = {};

var mainMenuQuestions = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'Choose one of the following options:',
        choices: ['Create a new address book entry', 'Search for existing address book entries', 'Exit the program']  
    }
    
]

    
    
    var personQuestions = [

    { 
        name: 'firstName', 
        message: 'Write your first name'
    },
    {
        name: 'lastName',
        message: 'Write your last name'
    },
    {
        name: 'birthday',
        message: 'Enter your birthday (optional)'
    },
    {
        type: 'checkbox',
        name: 'emailType',
        message: 'Choose an email type',
        choices: ['work', 'home', 'other']
    },
    {
        name: 'homeEmail',
        message: 'Write your home email address',
        when: function ( promptObj ) {
            return promptObj.emailType.indexOf('home') !== -1;
        }
    },
    {
        name: 'workEmail',
        message: 'Write your work email address',
        when: function ( promptObj ) {
            return promptObj.emailType.indexOf('work') !== -1;
        }
    },
    {
        name: 'otherEmail',
        message: 'Write your other email address',
        when: function ( promptObj ) {
            return promptObj.emailType.indexOf('other') !== -1;
        }
    },
    {
        type: 'checkbox',
        name: 'addressType',
        message: 'Choose an address type',
        choices: ['work', 'home', 'other']
    }

];


var addressQuestions = [
    {
        name: 'address1',
        message: 'Address Line 1'
    },
    {
        name: 'address2',
        message: 'Address Line 2 (optional)'
    },
    {
        name: 'city',
        message: 'City'
    },
    {
        name: 'province',
        message: 'Province'
    },
    {
        name: 'postalCode',
        message: 'Postal Code'
    },
    {
        name: 'country',
        message: 'Country'
    }
   
]


var personQ = inquirer.prompt(personQuestions, function( promptObj ) {
	person.firstName = promptObj.firstName;
	person.lastName = promptObj.lastName;
	person.birthday = promptObj.birthday;
// 	person.emailType = {work: '', home: '', other: ''} ;
// 	person.emailType.email = promptObj.emailType[promptObject.email];
// 	; {type: 'email', email: ''}
    // person[promptObj.emailType] = promptObj.email;
    
    if (promptObj.homeEmail) person.homeEmail = promptObj.homeEmail;
    if (promptObj.workEmail) person.workEmail = promptObj.workEmail;
    if (promptObj.otherEmail) person.otherEmail = promptObj.otherEmail;
    
    
    
    



	
	console.log(promptObj);
	console.log(person);

});
    
    
    
});




    
    
    
