module.exports = (pageObject) => {
    
   
       pageObject
        .verify.elementPresent('@infoCard')
        .verify.elementPresent('@listContainer')
        .verify.elementPresent('@footer')
        .verify.elementPresent('@pageHeader')
}