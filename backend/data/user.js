import bcrypt from "bcryptjs/dist/bcrypt"
const users =[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Demo',
        email: 'demo@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'test',
        email: 'test@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users