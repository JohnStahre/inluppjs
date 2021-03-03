const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const imputs = document.querySelector('#input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

// skapar arrayen /listan
const users = []

// här tänker jag att sjävla valideringen är


const validate = (id) => {
    const input = document.querySelector(id + 'error');
    
    if(input.value.trim() ==='') {
        error.innerText = 'please enter'
        input.focus();
        return false;
    } 
    else if(input.value.length < 2) {
        error.innerText = 'please enter'
        input.focus();
        return false;
    }
    else {
        error.innerText = ''
        return true;
    }
}

const validatefirstName = () => {
    const firstName = document.querySelector('#firstName');
    const firstNameError = document.querySelector('#firtName-error');

    if(firstName.value=== '') {
        firstNameError.innerText = 'du måste ange ett förnamn'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validatefirstName();
  
})

class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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



// const createUser = (firstName, lastName, email) => {
//     const user = new User(firstName, lastName, email);

//     // för att pusha in användaren i listan
//     users.push(user);
//     output.insertAdjacentHTML('beforeend', newUser(user))
//     console.log(user);

//     // skicka ut den och innan eller efter

//     // const u = document.querySelectorAll()
// })

// }
// // skapar en funktion för en ny user och lägger till nytt ID

// const newUser  = new(user) => {
//     let template = `
//     <div class="user animate" id="${user.id}">
//             <div class="text">
//               <h4>${user.firstName} ${user.lastName}</h4>
//               <small>${user.email}</small>
//             </div>
//           </div>
//     `
//     return template 

// }




// // })






// const email = document.querySelector('#email');
// const imputs = document.querySelector('#input')

// regUser.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if(firstName.value !=='' && lastName.value !=='' && email.value !=='' ){
//         createUser(firstName.value, lastName.value, email.value, id.value);
//     }



//     if

//     let firstName = e.currentTarget[0].value;
//     let lastName = e.currentTarget.lastName.value;
//     let email = e.currentTarget['email'].value;

//     console.log(firstName, lastName, email);

//     let user = {
//         firstName: e.target.firstName.value,
//         lastName: document.querySelector('#lastName').value,
//         email: e.currentTarget.email.value,
       
//     }

//     console.log(user)

// })