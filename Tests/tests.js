const uiPresent = require('../functions/uiPresent')
const editEmployee = require('../functions/editEmployee')
// constant - we don't want people to change it ... it can be a var and still run
var pageObject = {}
// variable - it can be changed, hence the empty brackets

module.exports = {
    
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html', 5000) 
        
            pageObject= browser.page.employeeManager()
            pageObject.navigate()     
            .expect.element('p[id="noEmployee"]').text.to.equal('No Employee Selected')
    },   
    after: browser => {
        browser.end()  
    },


// refer to "Initial Page load" https://dmutah.atlassian.net/browse/DEM-2
'UI Test' : browser => {
        
        pageObject
        // .api.pause (5000)
        // .verify.title('Employee Manager')
        .verify.containsText('@pageHeader' , 'Employee Manager')
        .verify.elementPresent('@infoCard')
        .verify.elementPresent('@listContainer')
        .verify.containsText('@versionNumber' , 'Version 1.2')
        .verify.containsText('@addEmployeeButton' , '+ Add Employee')
    },
    
// refer to "Adding An Employee" https://dmutah.atlassian.net/browse/DEM-9

'Add an employee with valid entries' : browser  => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        pageObject
        .verify.elementPresent('@addEmployeeButton')
        .click('@addEmployeeButton')
        .verify.elementPresent('@employee11')
        editEmployee(pageObject, '@employee11' , [{field: '@nameInput' , value: 'Kylie Meyer'} , {field: '@phoneInput' , value: '8016028315'} , {field: '@titleInput' , value: 'Pirate'}])
        pageObject
        .verify.containsText('@employee11' , 'Kylie')
        .expect.element('@saveButton').to.have.attribute('disabled')
        pageObject
        .expect.element('@cancelButton').to.have.attribute('disabled')
    },
    
    
//  refer to steps in these test cases:  DEM-4 IDEA    DEM-5 IDEA    DEM-6 IDEA    DEM-7 IDEA  DEM-8 IDEA    DEM-10 IDEA 
//   
'Save employee edit - Check if container name updated' : browser => {
        editEmployee(pageObject, '@employee1' , [{field: '@titleInput' , value: 'Hot Chica' } , {field: '@nameInput' , value: 'Lyndsey'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.containsText('@employee1' , 'Lyndsey')
        .expect.element('@saveButton').to.have.attribute('disabled')
        pageObject
        .expect.element('@cancelButton').to.have.attribute('disabled')
    },
     
    
 //  refer to steps in these test cases:  DEM-4 IDEA    DEM-5 IDEA    DEM-6 IDEA    DEM-7 IDEA  DEM-8 IDEA    DEM-10 IDEA 
//     
'Save a different employee edit - Verify info saved ' : browser => {
        editEmployee(pageObject, '@employee2' , [{field: '@titleInput' , value: 'Cool Dude'} , {field: '@nameInput' , value: 'Jeff'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .click('@employee1')
        .verify.elementPresent('@infoCard' , 2000)
        .click('@employee2')
        .expect.element('@nameInput').to.have.value.that.equals('Jeff')
        pageObject
        .expect.element('@phoneInput').to.have.value.that.equals('8016028315')
        pageObject
        .expect.element('@titleInput').to.have.value.that.equals('Cool Dude')
        
    },



//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'PHONE error Messages and CORRECT it- Excessive characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee3' , [{field: '@titleInput' , value: 'Drive Dad Crazy'} , {field: '@nameInput' , value: 'Declan'} , {field: '@phoneInput' , value: '18016028315'}])
        pageObject
        .verify.elementPresent('@phoneError' ,  'Error Message Shows up Properly')
        .verify.elementNotPresent('@nameError')
        .verify.elementNotPresent('@titleError')
        editEmployee(pageObject, '@employee3' , [{field: '@titleInput' , value: 'Drive Dad Crazy'} , {field: '@nameInput' , value: 'Declan'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@phoneError')
        pageObject
        .expect.element('@phoneInput').to.have.value.that.equals('8016028315')
    },
 
//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'PHONE error Messages and CORRECT it- TOO FEW characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee3' , [{field: '@titleInput' , value: 'Drive Dad Crazy'} , {field: '@nameInput' , value: 'Declan'} , {field: '@phoneInput' , value: '016028315'}])
        pageObject
        .verify.elementPresent('@phoneError' ,  'Error Message Shows up Properly')
        .verify.elementNotPresent('@nameError')
        .verify.elementNotPresent('@titleError')
        editEmployee(pageObject, '@employee3' , [{field: '@titleInput' , value: 'Drive Dad Crazy'} , {field: '@nameInput' , value: 'Declan'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@phoneError')
        pageObject
        .expect.element('@phoneInput').to.have.value.that.equals('8016028315')
    },


//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'TITLE error Messages and CORRECT it- Excessive characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee4' , [{field: '@titleInput' , value: 'Buff Guy But Not as Buff as His Dad. Boo YA!!!!'} , {field: '@nameInput' , value: 'Peyton'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementPresent('@titleError', 'Error Message Shows up Properly')
        .verify.elementNotPresent('@nameError')
        .verify.elementNotPresent('@phoneError')
        editEmployee(pageObject, '@employee4' , [{field: '@titleInput' , value: 'Buff Guy'} , {field: '@nameInput' , value: 'Peyton'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@titleError')
        pageObject
        .expect.element('@titleInput').to.have.value.that.equals('Buff Guy')
    },


//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'TITLE error Messages and CORRECT it - TOO FEW Characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee4' , [{field: '@titleInput' , value: ''} , {field: '@nameInput' , value: 'Peyton'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementPresent('@titleError', 'Error Message Shows up Properly')
        .verify.elementNotPresent('@nameError')
        .verify.elementNotPresent('@phoneError')
        editEmployee(pageObject, '@employee4' , [{field: '@titleInput' , value: 'Buff Guy'} , {field: '@nameInput' , value: 'Peyton'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@titleError')
        pageObject
        .expect.element('@titleInput').to.have.value.that.equals('Buff Guy')
    },


//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'NAME error Messages and CORRECT it- Excessive characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee5' , [{field: '@titleInput' , value: 'Sweet Girl'} , {field: '@nameInput' , value: 'Jordyn is such a stinker but we still love her no matter what'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementPresent('@nameError' ,  'Error Message Shows up Properly')
        .verify.elementNotPresent('@titleError')
//This should fail^^^^       
       
        .verify.elementNotPresent('@phoneError')
        editEmployee(pageObject, '@employee5' , [{field: '@titleInput' , value: 'Sweet Girl'} , {field: '@nameInput' , value: 'Jordyn'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@nameError')
        pageObject
        .expect.element('@nameInput').to.have.value.that.equals('Jordyn')
    },


//refer to "Generating errors" https://dmutah.atlassian.net/browse/DEM-7
//      & "Correcting errors" https://dmutah.atlassian.net/browse/DEM-10

'NAME error Messages and CORRECT it- Too Few Characters' : browser => {
        var exists = (typeof uiPresent === 'uiPresent') ? "Value if true" : "Value if false";
        var exists = (typeof uiPresent === 'uiPresent') // Returns true or false
    // AJ!!!! is this^ really checking my uiPresent function page????   ^^^
        editEmployee(pageObject, '@employee5' , [{field: '@titleInput' , value: 'Sweet Girl'} , {field: '@nameInput' , value: ''} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementPresent('@nameError' ,  'Error Message Shows up Properly')
        .verify.elementNotPresent('@titleError')
        .verify.elementNotPresent('@phoneError')
        editEmployee(pageObject, '@employee5' , [{field: '@titleInput' , value: 'Sweet Girl'} , {field: '@nameInput' , value: 'Jordyn'} , {field: '@phoneInput' , value: '8016028315'}])
        pageObject
        .verify.elementNotPresent('@nameError')
        pageObject
        .expect.element('@nameInput').to.have.value.that.equals('Jordyn')
    }



}