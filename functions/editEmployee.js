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
            .setValue(change.field    ,   change.value)
    })
    pageObject
        .expect.element('@saveButton').not.to.have.attribute('disabled')
    pageObject
        .expect.element('@cancelButton').not.to.have.attribute('disabled')
    pageObject
        .click('@saveButton')
}
