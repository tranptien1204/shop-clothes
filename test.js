const users = [
    {
        id: 1,
        email: 'tientran',
        password: 123
    }
]

function checkUsers(email, passwd) {
    return users.some(item => item.email == email && item.password == passwd)
}

console.log(checkUsers('tientran', 124))
