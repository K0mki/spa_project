let contactsTableBody = document.querySelector('#contacts-table-body');
let contactsViewBtn = document.querySelector('[href="contacts-view"]');
let addContactsViewBtn = document.querySelector('[href="add-contact-view"]');
let contactsView = document.querySelector('#contacts-view');
let addContactView = document.querySelector('#add-contact-view');
let idInput = document.querySelector('[placeholder="id"]')
let nameInput = document.querySelector('[placeholder="name"]')
let lastNameInput = document.querySelector('[placeholder="lastname"]')
let phoneInput = document.querySelector('[placeholder="phone"]')
let emailInput = document.querySelector('[placeholder="email"]')
let saveBtn = document.querySelector('#save')

saveBtn.addEventListener('click', saveContact)

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
}

addContactsViewBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addContactView.style.display = 'block';
    contactsView.style.display = 'none';
})

contactsViewBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addContactView.style.display = 'none';
    contactsView.style.display = 'block';
})

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
        </tr>
         `
    }
    contactsTableBody.innerHTML = htmlcontacts;
}