const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp);
var expect = chai.expect;

describe('Product Routes', function () {
    describe('SUCCESS', function () {
        describe('GET /products', function () {
            it('should return an array with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/products')
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
        describe('GET /products/:id', function () {
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/products/' + id)
                    .set({
                        headers: token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('_id')
                        expect(res.body).to.have.property('name')
                        expect(res.body).to.have.property('price')
                        expect(res.body).to.have.property('description')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('img')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('GET /products/search/:name', function () {
            it('should return an array with status code 200', function (done) {
                chai
                    .request(app)
                    .get('/products/search/' + name)
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
        describe('POST /products', function () {
            it('should return an object with status code 201', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers: token
                    })
                    .send({
                        name: "Elia",
                        price: "3000",
                        stock: "1",
                        description: "elia victory",
                        img: "url"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(201)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('_id')
                        expect(res.body).to.have.property('name')
                        expect(res.body).to.have.property('price')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('description')
                        expect(res.body).to.have.property('img')
                        expect(res.body.name).to.equal('Elia')
                        expect(res.body.price).to.equal('3000')
                        expect(res.body.stock).to.equal('1')
                        expect(res.body.description).to.equal('elia victory')
                        expect(res.body.description).to.equal('url')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('DELETE /products/:id', function(){
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .delete('/products/'+ id)
                    .set({
                        headers: token
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
        describe('PATCH /products/:id', function(){
            it('should return an object with status code 200', function (done) {
                chai
                    .request(app)
                    .patch('/products/'+ id)
                    .set({
                        headers: token
                    })
                    .send({
                        name: "rudy",
                        price: "5000",
                        stock: "10",
                        description: "febrian",
                        img: "url img"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(200)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('_id')
                        expect(res.body).to.have.property('name')
                        expect(res.body).to.have.property('price')
                        expect(res.body).to.have.property('stock')
                        expect(res.body).to.have.property('description')
                        expect(res.body).to.have.property('img')
                        expect(res.body.name).to.equal('rudy')
                        expect(res.body.price).to.equal('5000')
                        expect(res.body.stock).to.equal('10')
                        expect(res.body.description).to.equal('febrian')
                        expect(res.body.description).to.equal('url img')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
    })
    describe('FAILED', function () {
        describe('GET /products (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products')
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
        describe('GET /products (no product)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products')
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
        describe('GET /products/:id (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/' + id)
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
        describe('GET /products/:id (no product)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/' + id)
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
        describe('GET /products/:id (no id)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/')
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
        describe('GET /products/search/:name (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/search/' + name)
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
        describe('GET /products/search/:name (no product)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/search/' + name)
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
        describe('GET /products/search/:name (no name)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .get('/products/search/')
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
        describe('POST /products (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .send({
                        name: "Hp",
                        price: "5000",
                        stock: "4",
                        description: "ini laptop"
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
        describe('POST /products (no input)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .post('/products')
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
        describe('POST /products (no name)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers : token
                    })
                    .send({
                        name: "",
                        price: "5000",
                        stock: "4",
                        description: "ini laptop"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Name cannot be empty')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /products (no price)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "",
                        stock: "4",
                        description: "ini laptop"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Price cannot be empty')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /products (price < 100)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "99",
                        stock: "4",
                        description: "ini laptop"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Price amount minimal 100')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('POST /products (no stock)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "5000",
                        stock: "",
                        description: "ini laptop"
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
        describe('POST /products (stock < 1)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "99",
                        stock: "-1",
                        description: "ini laptop"
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
        describe('POST /products (no description)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .post('/products')
                    .send({
                        name: "Hp",
                        price: "99",
                        stock: "10",
                        description: ""
                    })
                    .set({
                        headers : token
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Description cannot be empty')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('DELETE /products/:id (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .delete('/products/' + id)
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
        describe('DELETE /products/:id (no id)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .delete('/products/')
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
        describe('PATCH /products/:id (no headers)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .patch('/products/' + id)
                    .send({
                        name: "rudy",
                        price: "5000",
                        stock: "10",
                        description: "febrian",
                        img: "url img"
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
        describe('PATCH /products/:id (no input)', function () {
            it('should return an object with status code 500', function (done) {
                chai
                    .request(app)
                    .patch('/products/' + id)
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
        describe('PATCH /products/:id (price < 100)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .patch('/products/' + id)
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "99",
                        stock: "4",
                        description: "ini laptop"
                    })
                    .then(function (res) {
                        expect(res).to.have.status(400)
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('msg')
                        expect(res.body.msg).to.equal('Price amount minimal 100')
                        done()
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            })
        })
        describe('PATCH /products/:id (stock < 1)', function () {
            it('should return an object with status code 400', function (done) {
                chai
                    .request(app)
                    .patch('/products/' + id)
                    .set({
                        headers : token
                    })
                    .send({
                        name: "Hp",
                        price: "99",
                        stock: "-1",
                        description: "ini laptop"
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
    })
})