const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const User = require('../models/user')
const mongoose = require('mongoose')
const server = app.listen(8080, () => console.log('Quit testing me, yo.'))
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test suite for /users on api', () => {
    // /users
    test('This should successfully create a new user in the db', async () => {
        const response = await request(app).post('/users').send({ name: 'Test Name', email: 'Test@email.com', password: 'newPassword!' })
        expect(response.statusCode).toBe(200)
        expect(response.body.user.name).toEqual('Test Name')
        expect(response.body.user.email).toEqual('Test@email.com')
    })
    test('It should login a user', async () => {
        const user = new User({ name: 'Different User', email: 'different.user@gmail.com', password: 'loginPassword'})
        await user.save()

        const response = await request(app)
        .post('/users/login')
        .send({ email: 'different.user@gmail.com', password: 'loginPassword'})

        expect(response.statusCode).toBe(200)
        expect(response.body.user.name).toEqual('Different User')
        expect(response.body.user.email).toEqual('different.user@gmail.com')
        expect(response.body).toHaveProperty('token')
    })
    test('It should delete a user', async () => {
        const user = new User({ name: 'DeleteMe User', email: 'deleteMe.user@gmail.com', password: 'deleteMePassword' })
        await user.save()
        const token = await user.generateAuthToken()

        const response = await request(app)
          .delete(`/users/${user._id}`)
          .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual('User deleted')
      })
      test('It should update a user', async () => {
        const user = new User({ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' })
        await user.save()

        const token = await user.generateAuthToken()


        const response = await request(app)
          .put(`/users/${user._id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({ name: 'Jane Doe', email: 'jane.doe@example.com' })

        expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual('Jane Doe')
        expect(response.body.email).toEqual('jane.doe@example.com')
      })
      test('User attempts login incorrectly', async () => {
        const user = new User({ name: 'Kevin Costner', email: 'kevin.costner@gmail.com', password: 'academyBaby'})
        await user.save()

        const token = await user.generateAuthToken()

        const response = await request(app)
        .post('/users/login')
        .send({ email: 'Kevin.Spacey@gmail.com', password: 'OtherPassword'})

        expect(response.statusCode).toBe(400)
        // expect(response.error).toEqual('invalid login credentials')
    })
})
