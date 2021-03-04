const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const imputs = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// skapar arrayen /listan
const users = []




const validatefirstName = () => {
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstName-error');

    if(firstName.value=== ''|| firstName.value.length<2) {
        firstNameError.textContent = 'du måste ange ett förnamn'
    }
}

const validatelastName = () => {
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastName-error');

    if(lastName.value.trim()=== ''|| lastName.value.length<2) {
        lastNameError.textContent = 'du måste ange ett efternamn'
    }
}

// const validateemail = () => {
//     const email = document.getElementById('email');
//     const emailError = document.getElementById('email-error');

//     if(email.value.length<2) {
//         emailError.textContent = ('ange giltig email mer än 2 bokstäver inkulsive @')
//         return false;
//     }
//     // else if (email.value.includes('ö'&&'ä'&&'å')) {  
//     //     emailError.textContent = ('inte åäö')
//     //     return false;
        
//     // }
//     else if (email.value.includes('@')){
//         return true;
//     }
   
//     else{
//         emailError.textContent='måste innehålla @ men inte åäö'
//     }

//     var bannedCharacters = ['å','ä','ö']

//     if (bannedCharacters.some(x=> email.value.includes(x))) {
//         emailError.textContent = ('inte åäö')
//         // return false;
//     }
    
const validateemail = () => {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if(email.value.length<2) {
        emailError.textContent = ('ange giltig email mer än 2 bokstäver inkulsive @')
        return false;
    }
  
    if (!email.value.includes('@')){
        emailError.textContent='måste innehålla @'
        return false;
    }
    var bannedCharacters = ['å','ä','ö']
    if (bannedCharacters.some(x=> email.value.includes(x))) {
        emailError.textContent='får inte innehålla å, ä eller ö'
        return false;
    }

    return true
}







form.addEventListener('submit', (e) => {
    e.preventDefault();

    validatefirstName();
    validatelastName();
    validateemail();
  
})

class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        // nedan genererar id i datum och tid
        this.id = Date.now().toString()
        this.listener = false;

    }
}

const createUser = (firstName, lastName, email) => {
    const user = new User(firstName, lastName, email);

    // pushar in user i listan /arrayen
    users.push(user);
    output.insertAdjacentHTML('beforeend', newUser(user))
    console.log(users);

    const u = document.querySelectorAll('#output .user')
    u.forEach(user => {

        // if user.listener är false då görs detta och senare sätter vi den till true
        if(!user.listener) {
            user.addEventListener('click', function() {
                console.log('ta bort');
                this.classList.add('slideout')
                // this.remove()
                // this.addEventListener('animationend', () => this.remove())
                setTimeout(() => {
                    this.remove()
                }, 50)
                // console.log(users);
            })
        }

        user.listener = true;
        // console.log(user)
    })
}

const newUser = (user) => {
    let template = `
    <div class="user animate" id="$(user.id)">
    <div class="text">
      <h4>${user.firstName} ${user.lastName}</h4>
      <small>${user.email}</small>
    </div>
    </div>
    `
    return template
}


form.addEventListener('submit', e => {
    e.preventDefault();

if(firstName.value !=='' && lastName.value !=='' && email.value !=='' ){
             createUser(firstName.value, lastName.value, email.value);

        }

})
