let contactsTableBody = document.querySelector('#contacts-table-body');
let allLinks = document.querySelector('.nav-link');
let contactsView = document.querySelector('#contacts-view');
let addContactView = document.querySelector('#add-contact-view');
let views = document.querySelectorAll('.view')
let editContactsView = document.querySelector('#edit-contacts-view');
let idInput = document.querySelector('[placeholder="id"]')
let nameInput = document.querySelector('[placeholder="name"]')
let lastNameInput = document.querySelector('[placeholder="lastname"]')
let phoneInput = document.querySelector('[placeholder="phone"]')
let emailInput = document.querySelector('[placeholder="email"]')
let saveBtn = document.querySelector('#save')
let eId = document.querySelector('.eId')
let eName = document.querySelector('.eName')
let eLast = document.querySelector('.eLast')
let ePhone = document.querySelector('.ePhone')
let eMail = document.querySelector('.eMail')
let editContactsBtn = document.querySelector('#edit-cont')
let editBtn = document.querySelector('#edit')
let id 

editBtn.addEventListener('click', saveEditedContact);
saveBtn.addEventListener('click', saveContact)

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', showView)
}

function showView(e) {
    for (let i = 0; i < views.length; i++) {
        views[i].style.display = 'none';
    }
    if (e instanceof Event) {
        e.preventDefault();
        let id = `ID${this.getAttribute('href')}`;
        document.querySelector(id).style.display = 'block';
    } else {
        document.querySelector(e).style.display = 'block'
    }

    let id = `ID${this.getAttribute('href')}`;
    document.querySelector(id).style.display = 'block';
}

function saveEditedContact() {
    const editedContact = {
        id: eId.value,
        name: eName.value,
        lastname: eLast.value,
        phone: ePhone.value,
        email: eMail.value
    }
    db[id]= editedContact;
    createContactsTable();
    showView('#contacts-view',)
}

function saveContact() {
    const newContact = {
        id: idInput.value,
        name: nameInput.value,
        lastname: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    }
    db.push(newContact);
    idInput.value = '';
    nameInput.value = '';
    lastNameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    createContactsTable();
    showView('#contacts-view');
}



createContactsTable();

function createContactsTable() {
    let htmlcontacts = ``;
    for (let i = 0; i < db.length; i++) {
        const contact = db[i];
        htmlcontacts += `
        <tr>
            <td>${contact.id}</td>
            <td>${contact.name}</td>
            <td>${contact.lastname}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td><button data-id='${i}' class="edit-btn btn btn-sm btn-warning form-control">Edit</button></td>
            <td><button data-id='${i}' class="delete-btn btn btn-sm btn-danger form-control">Delete</button></td>
        </tr>
         `
    }
    contactsTableBody.innerHTML = htmlcontacts;
    let allDeleteBtns = document.querySelectorAll('.delete-btn')
    let allEditBtns = document.querySelectorAll('.edit-btn')

    for (let i = 0; i < allDeleteBtns.length; i++) {
        allDeleteBtns[i].addEventListener('click', deleteContact);
        allEditBtns[i].addEventListener('click', editContact);

    }
}

function deleteContact() {
    let id = this.getAttribute('data-id');
    db.splice(id, 1);
    createContactsTable();
    showView('#contacts-view')
}
function editContact() {
    id = this.getAttribute('data-id');
    let selectedContact = db[id];
    eId.value = selectedContact.id;
    eName.value = selectedContact.name;
    eLast.value = selectedContact.lastname;
    ePhone.value = selectedContact.phone;
    eMail.value = selectedContact.email;
    showView('#edit-contact-view')
}