const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp);
var expect = chai.expect;

describe('Users Routes', function () {
  describe('SUCCESS', function () {
    describe('POST /users/signup', function () {
      it('should return an object with 201', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: 'rudy@mail.com',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('_id')
            expect(res.body).to.have.property('userName')
            expect(res.body).to.have.property('email')
            expect(res.body.userName).to.equal('rudy')
            expect(res.body.email).to.equal('rudy@mail.com')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    })
    describe('POST /users/signin', function () {
      it('should return an object with 200', function (done) {
        chai
          .request(app)
          .post('/users/signin')
          .send({
            email: 'rudy@mail.com',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(201)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('token')
            expect(res.body).to.have.property('userName')
            expect(res.body).to.have.property('email')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    })
  })
  describe('FAILED', function () {
    describe('POST /users/signup', function () {
      it('sould return an error with status code 400', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: '',
            email: 'rudy@mail.com',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('User name cannot be empty')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 400', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: '',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Email cannot be empty')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 400', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: 'rudy@mail.com',
            password: ''
          })
          .then(function (res) {
            expect(res).to.have.status(400)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Password cannot be empty')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 500', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: 'rudy',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(500)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Email invalid')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 500', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: 'rudy@mail.com',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(500)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Email alredy used')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 500', function (done) {
        chai
          .request(app)
          .post('/users/signup')
          .send({
            userName: 'rudy',
            email: 'rudy@mail.com',
            password: '1234'
          })
          .then(function (res) {
            expect(res).to.have.status(500)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Password must have minimal 8 character')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    })
    describe('POST /users/signin', function(){
      it('sould return an error with status code 500', function (done) {
        chai
          .request(app)
          .post('/users/signin')
          .send({
            userName: 'rudy',
            email: 'rudy@mail.com',
            password: '123456'
          })
          .then(function (res) {
            expect(res).to.have.status(500)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Email/Password wrong')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
      it('sould return an error with status code 500', function (done) {
        chai
          .request(app)
          .post('/users/signin')
          .send({
            userName: 'rudy',
            email: 'rudyft@mail.com',
            password: '12345678'
          })
          .then(function (res) {
            expect(res).to.have.status(500)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('msg')
            expect(res.body.msg).to.equal('Email/Password wrong')
            done()
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    })
  })
})