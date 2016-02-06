var inquirer = require("inquirer");
var Table = require('cli-table');

var addressBook = [];

var newAddressEntry = {};

var mainMenuQuestions = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'Choose one of the following options:',
        choices: ['Create a new address book entry', 'Search for existing address book entries', 'Exit the program']  
    }
    
]

function returnQuestions (defaultAnswers){
    if (!defaultAnswers) {
        defaultAnswers = {}
    }
    return [

    { 
        name: 'firstName', 
        message: 'Write your first name',
        default: defaultAnswers.firstName
    },
    {
        name: 'lastName',
        message: 'Write your last name',
        default: defaultAnswers.lastName
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
    },
    {
        name: 'workAddressLine1',
        message: 'Write your work address line 1',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'workAddressLine2',
        message: 'Write your work address line 2',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'workCity',
        message: 'Write your work city',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'workProvince',
        message: 'Write your work province',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'workPostalCode',
        message: 'Write your work postal code',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'workCountry',
        message: 'Write your work country',
        when: function ( answers ) {
            return answers.addressType.indexOf('work') !== -1;
        }
    },
    {
        name: 'otherAddressLine1',
        message: 'Write your other address line 1',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        name: 'otherAddressLine2',
        message: 'Write your other address line 2',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        name: 'otherCity',
        message: 'Write your other city',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        name: 'otherProvince',
        message: 'Write your other province',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        name: 'otherPostalCode',
        message: 'Write your other postal code',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        name: 'otherCountry',
        message: 'Write your other country',
        when: function ( answers ) {
            return answers.addressType.indexOf('other') !== -1;
        }
    },
    {
        type: 'checkbox',
        name: 'phoneType',
        message: 'Choose a phone type',
        choices: ['landline', 'cellular', 'fax']
    },
    {
        name: 'landlinePhone',
        message: 'Write your landline phone number',
        when: function ( answers ) {
            return answers.phoneType.indexOf('landline') !== -1;
        }
    },
    {
        name: 'cellularPhone',
        message: 'Write your cellular phone number',
        when: function ( answers ) {
            return answers.phoneType.indexOf('cellular') !== -1;
        }
    },
    {
        name: 'faxPhone',
        message: 'Write your fax phone number',
        when: function ( answers ) {
            return answers.phoneType.indexOf('fax') !== -1;
        }
    }

];
}

    
 


var main = function(){
    inquirer.prompt(mainMenuQuestions, function (mainAnswers) {
    console.log(mainAnswers)
    mainMenuQuestions.mainmenu = mainAnswers.mainMenu
    
    // if (mainMenuQuestions.mainmenu.indexOf('Create a new address book entry')) {return addressEntry;}
    // if (mainMenuQuestions.mainmenu[1]) return searchFunction;
    if (mainMenuQuestions.mainmenu.indexOf('Exit the program') !== -1) {return;}
    
    else {
    var addressEntry = inquirer.prompt(returnQuestions(), function( answers ) {
        
	newAddressEntry.firstName = answers.firstName;
	newAddressEntry.lastName = answers.lastName;
	newAddressEntry.birthday = answers.birthday;
	newAddressEntry.emailType = answers.emailType;
	newAddressEntry.phoneType = answers.phoneType;
	newAddressEntry.addressType = answers.addressType;
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
    
    if (answers.workAddressLine1) newAddressEntry.workAddressLine1 = answers.workAddressLine1;
    if (answers.workAddressLine2) newAddressEntry.workAddressLine2 = answers.workAddressLine2;
    if (answers.workCity) newAddressEntry.workCity = answers.workCity;
    if (answers.workProvince) newAddressEntry.workProvince = answers.workProvince;
    if (answers.workPostalCode) newAddressEntry.workPostalCode = answers.workPostalCode;
    if (answers.workCountry) newAddressEntry.workCountry = answers.workCountry;
    
    if (answers.otherAddressLine1) newAddressEntry.otherAddressLine1 = answers.otherAddressLine1;
    if (answers.otherAddressLine2) newAddressEntry.otherAddressLine2 = answers.otherAddressLine2;
    if (answers.otherCity) newAddressEntry.otherCity = answers.otherCity;
    if (answers.otherProvince) newAddressEntry.otherProvince = answers.otherProvince;
    if (answers.otherPostalCode) newAddressEntry.otherPostalCode = answers.otherPostalCode;
    if (answers.otherCountry) newAddressEntry.otherCountry = answers.otherCountry;
    
    if (answers.landlinePhone) newAddressEntry.landlinePhone = answers.landlinePhone;
    if (answers.cellularPhone) newAddressEntry.cellularPhone = answers.cellularPhone;
    if (answers.faxPhone) newAddressEntry.faxPhone = answers.faxPhone;




	
// 	console.log(answers);
// 	console.log(newAddressEntry);
	addressBook.push(newAddressEntry);
	console.log(addressBook);
	displayTable(newAddressEntry);

    var afterAddress = [
    {
        type: 'list',
        name: 'editMenu',
        message: 'What would you like to do?',
        choices: [{name: 'edit'}, {name: 'delete'}, {name: 'back'}]  
    }
    
]

	var nextAction = inquirer.prompt(afterAddress, function( editAnswer ) {
	    console.log(editAnswer);
	    console.log(afterAddress);
	    if (editAnswer.editMenu === 'back') {
	        return main();
	    } else if (afterAddress.editAnswer.indexOf('Delete this entry') !== -1){
	        //return something that deletes the entry;
	        console.log('delete this entry motherfucker')
	    } else {
	        //return something that edits the entry and gives current values as default.
	        console.log('edit this entry motherfucker')
	        
	    }
	});

});
} 
}

);
}

main();

// var searchAddress = function (searchTerm) {
    
//     var searchQuestion = [
//     {
//         type: 'input',
//         name: 'SearchPrompt',
//         message: 'Please enter a name to search for:',
//         validate: function (searchTerm)  {
//             if (searchTerm > (searchTerm.length === 2)) {
//                 return true;
//             } else { return "please enter 3 or more characters"}
//         }  
//     }
    
// ]
    
//     inquirer.prompt(searchQuestion, function (searchTerm) {
//         console.log(searchTerm)
//     });
// }

    


function displayTable (newAddressEntry) {
    
    var table = new Table();
 
         
//      table.push(newAddressEntry.split("," )) ;   
 
    // table.push(newAddressEntry);
    
// push firstname and lastname
    
   table.push(
            ['First Name:', newAddressEntry.firstName],
            ['Last Name:', newAddressEntry.lastName]
            )
            
// push birthday
    if (newAddressEntry.birthday) {
        
         table.push(
            ['Birthday:', newAddressEntry.birthday]
            )
    }
        
// push home, work or other email
   
    newAddressEntry.emailType.forEach( function(type) {
       
        
        if (newAddressEntry[type + 'Email']) {
            table.push(
                [type + ' Email:', newAddressEntry[type + 'Email']]
            );
        }
        
    });
    
    
// push home, work or other phone number
    
    newAddressEntry.phoneType.forEach( function(type) {
       
        
        if (newAddressEntry[type + 'Phone']) {
            table.push(
                [type + ' Phone:', newAddressEntry[type + 'Phone']]
            );
        }
        
    });
    

// push home, work or other address
    
    newAddressEntry.addressType.forEach( function(type) {
       
        
        if (newAddressEntry[type + 'AddressLine1']) {
            table.push(
                ['Addresses:', type + ':' + '\n' + newAddressEntry[type + 'AddressLine1'] + '\n' + newAddressEntry[type + 'AddressLine2'] + '\n' + newAddressEntry[type + 'City'] + '\n' + newAddressEntry[type + 'Province'] + '\n' + newAddressEntry[type + 'PostalCode'] + '\n' + newAddressEntry[type + 'Country']]
            );
        }
        
    });
    
   
       console.log(table.toString());

 }

    
    

    
