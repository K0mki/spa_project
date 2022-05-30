let contactsTableBody = document.querySelector('#contacts-table-body');
console.log(db)
createContactsTable;

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