const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp);
var expect = chai.expect;

describe('Cart Routes', function(){
    describe('SUCCESS', function(){
        describe('GET /carts', function () {
            it('should return an array with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/carts')
                    .set({
                        headers : token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('array')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/:id', function () {
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/carts/' + id)
                    .set({
                        headers : token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('userId')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('productId')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/search/:userId', function () {
            it('should return an array with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/carts/search/' + userId)
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('array')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /carts', function () {
            it('should return an object with status code 201', function (done) {
                chai
                    .request(app)
                    .post('/carts')
                    .set({
                        headers : token
                    })
                    .send({
                        stock: '10'
                    })
                    .then(function (res) {
                        expect(res).to.have.status(201)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('userId')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('productId')
                        expect(res.body.stock).to.equal('10')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /carts/:id', function () {
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .patch('/carts/' + id)
                    .set({
                        headers : token
                    })
                    .send({
                        stock: '5'
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('userId')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('productId')
                        expect(res.body.stock).to.equal('5')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('DELETE /carts/:id', function () {
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .delete('/carts/' + id)
                    .set({
                        headers : token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('_id')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
    })
    describe('FAILED', function(){
        describe('GET /carts (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts')
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts (no carts)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/:id (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/' + id)
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/:id (no product)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/' + id)
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/:id (no id)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/search/:userId (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/search/' + userId)
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/search/:userId (no product)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/search/' + userId)
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /carts/search/:userId (no userId)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/carts/search/')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /carts (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .post('/carts')
                    .send({
                        stock: "10"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /carts (no input)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .post('/carts')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /carts (no stock)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/carts')
                    .set({
                        headers : token
                    })
                    .send({
                        stock: ""
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Stock cannot be empty')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /carts (stock < 1)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/carts')
                    .set({
                        headers : token
                    })
                    .send({
                        stock: "-1"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Stock amount minimal 1')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /carts (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .patch('/carts')
                    .send({
                        stock: "5"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /carts (no input)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .patch('/carts')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /carts (no stock)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .patch('/carts')
                    .set({
                        headers : token
                    })
                    .send({
                        stock: ""
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Stock cannot be empty')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /carts (stock < 1)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .patch('/carts')
                    .set({
                        headers : token
                    })
                    .send({
                        stock: "-1"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Stock amount minimal 1')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('DELETE /carts/:id (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .delete('/carts/' + id)
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('You have to login first')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('DELETE /carts/:id (no id)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .delete('/carts/')
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(500)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Internal server error')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
    })
})