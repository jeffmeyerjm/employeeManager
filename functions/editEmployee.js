module.exports = (pageObject, employee, changes) => {
    
/*

changes is an array of fields to change and the value to change it

    {field: '', value : ''}



    */
   pageObject
        .click(employee)
    changes.forEach(change => {
    pageObject
            .clearValue(change.field)
            // .api.pause(2000)
            pageObject.setValue(change.field    ,   change.value)
            // .api.pause(2000)
    })
    pageObject
        .expect.element('@saveButton').not.to.have.attribute('disabled')
    pageObject
        .expect.element('@cancelButton').not.to.have.attribute('disabled')
    pageObject
        // .api.pause(5000)
        // .clearValue('@nameInput')
        .click('@saveButton')
        // pageObject.api.pause(5000)
}
