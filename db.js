let db = [
    {
        id: 1,
        name: 'Stefan',
        lastname: 'Kotarac',
        phone: '123456789',
        email: 'stefan@gmail.com'
    }
]; 

if (localStorage.db) {
    db = JSON.parse(localStorage.db);
}

