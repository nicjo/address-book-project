var inquirer = require("inquirer");
var Table = require('cli-table');

var addressBook = {};

var newAddressEntry = {};

// var mainMenuQuestions = [
//     {
//         type: 'list',
//         name: 'mainMenu',
//         message: 'Choose one of the following options:',
//         choices: ['Create a new address book entry', 'Search for existing address book entries', 'Exit the program']  
//     }
    
// ]

    
    
    var simpleQuestions = [

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
        when: function ( answers ) {
            return answers.emailType.indexOf('home') !== -1;
        }
    },
    {
        name: 'workEmail',
        message: 'Write your work email address',
        when: function ( answers ) {
            return answers.emailType.indexOf('work') !== -1;
        }
    },
    {
        name: 'otherEmail',
        message: 'Write your other email address',
        when: function ( answers ) {
            return answers.emailType.indexOf('other') !== -1;
        }
    },
    {
        type: 'checkbox',
        name: 'addressType',
        message: 'Choose an address type',
        choices: ['work', 'home', 'other']
    },
    {
        name: 'homeAddressLine1',
        message: 'Write your home address line 1',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    },
    {
        name: 'homeAddressLine2',
        message: 'Write your home address line 2',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    },
    {
        name: 'homeCity',
        message: 'Write your home city',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    },
    {
        name: 'homeProvince',
        message: 'Write your home province',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    },
    {
        name: 'homePostalCode',
        message: 'Write your home postal code',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    },
    {
        name: 'homeCountry',
        message: 'Write your home country',
        when: function ( answers ) {
            return answers.addressType.indexOf('home') !== -1;
        }
    }

];

var emailQuestions = [
    
    {
        type: 'checkbox',
        name: 'emailType',
        message: 'Choose an email type',
        choices: ['work', 'home', 'other']
    },
    
    ]

// var addressQuestions = [
//     {
//         name: 'address1',
//         message: 'Address Line 1'
//     },
//     {
//         name: 'address2',
//         message: 'Address Line 2 (optional)'
//     },
//     {
//         name: 'city',
//         message: 'City'
//     },
//     {
//         name: 'province',
//         message: 'Province'
//     },
//     {
//         name: 'postalCode',
//         message: 'Postal Code'
//     },
//     {
//         name: 'country',
//         message: 'Country'
//     }
   
// ]


inquirer.prompt(simpleQuestions, function( answers ) {
	newAddressEntry.firstName = answers.firstName;
	newAddressEntry.lastName = answers.lastName;
	newAddressEntry.birthday = answers.birthday;
// 	newAddressEntry.emailType = {work: '', home: '', other: ''} ;
// 	newAddressEntry.emailType.email = answers.emailType[answersect.email];
// 	; {type: 'email', email: ''}
    // newAddressEntry[answers.emailType] = answers.email;
    
    if (answers.homeEmail) newAddressEntry.homeEmail = answers.homeEmail;
    if (answers.workEmail) newAddressEntry.workEmail = answers.workEmail;
    if (answers.otherEmail) newAddressEntry.otherEmail = answers.otherEmail;
    
    if (answers.homeAddressLine1) newAddressEntry.homeAddressLine1 = answers.homeAddressLine1;
    if (answers.homeAddressLine2) newAddressEntry.homeAddressLine2 = answers.homeAddressLine2;
    if (answers.homeCity) newAddressEntry.homeCity = answers.homeCity;
    if (answers.homeProvince) newAddressEntry.homeProvince = answers.homeProvince;
    if (answers.homePostalCode) newAddressEntry.homePostalCode = answers.homePostalCode;
    if (answers.homeCountry) newAddressEntry.homeCountry = answers.homeCountry;
    
    
    
    



	
	console.log(answers);
	console.log(newAddressEntry);

});
    




    
    
    
