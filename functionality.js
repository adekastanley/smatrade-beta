const contactUS = document.querySelector('.market-form')
// console.log(contactUS.btn)

contactUS.addEventListener('submit', (e)=> {
    e.preventDefault()
    const name = contactUS.name.value
    const email = contactUS.email.value
    const phoneNumber = contactUS.phonenumber.value
    const message = contactUS.note.value




Email.send({
    SecureToken : "43ef0c4b-c864-46c1-a467-36ce266b5836",
    To : 'Smatradeng@gmail.com',
    From : "Smatradeng@gmail.com",
    Subject : "New Contact Request",
    Body : `email from: ${name} with address: ${email} and  phone number: ${phoneNumber}. message: ${message}  `  
}).then(
   
  message => {
    console.log(message)
    contactUS.reset()
}

);
})
