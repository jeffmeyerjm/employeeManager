module.exports = {
        url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
        elements: {

                //ui      
                pageHeader: 'span[class="titleText"]',
                infoCard: 'div[class="infoCard"]',
                noEmployeeHeader: 'p[id="noEmployee"]',
                listContainer: 'ul[class="listContainer"]',
                errorCard: 'div[class="errorCard"]',

                versionNumber: '.footer',


                //errorMessages  
                phoneError: {
                        selector: '//div[text()="The phone number must be 10 digits long. "]',
                        locateStrategy: 'xpath'
                },
                nameError: {
                        selector: '//div[text()="The name field must be between 1 and 30 characters long. "]',
                        locateStrategy: 'xpath'
                },
                titleError: {
                        selector: '//div[text()="The title field must be between 1 and 30 characters long. "]',
                        locateStrategy: 'xpath'
                },


                //employees        
                employee1: 'li[name="employee1"]',
                employee2: 'li[name="employee2"]',
                employee3: 'li[name="employee3"]',
                employee4: 'li[name="employee4"]',
                employee5: 'li[name="employee5"]',
                employee6: 'li[name="employee6"]',
                employee7: 'li[name="employee7"]',
                employee8: 'li[name="employee8"]',
                employee9: 'li[name="employee9"]',
                employee10: 'li[name="employee10"]',
                employee11: 'li[name="employee11"]',


                //InfoCard
                cardHeader: 'p[name="employeeName"]',
                nameInput: 'input[name="nameEntry"]',
                phoneInput: 'input[name="phoneEntry"]',
                titleInput: 'input[name="titleEntry"]',
                idNum: 'span[name="employeeID"]',
                nameLabel:
                        {
                                selector: '//span[text()=" Name "]',
                                locateStrategy: 'xpath'
                        },
                titleLabel:
                        {
                                selector: '//span[text()=" Title "]',
                                locateStrategy: 'xpath'
                        },
                phoneLabel:
                        {
                                selector: '//span[text()=" Phone Number "]',
                                locateStrategy: 'xpath'
                        },


                //Buttons
                saveButton: 'button[name="save"]',
                cancelButton: 'button[name="cancel"]',
                addEmployeeButton: 'li[name="addEmployee"]',






        }
}