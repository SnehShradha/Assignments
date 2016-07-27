var sinon = require('sinon');
var request = require('supertest');
var expect = require("chai").expect;

var model = require('../models/movieschema.js');
var modelStub1 = sinon.stub(model, 'find');
//var modelStub2 = sinon.stub(model, 'findOne');
var modelStub3 = sinon.stub(model.prototype,"save");
//sinon.stub(Sensor.prototype, "sample_pressure").returns(0);


var app = require('.././bin/www');
var address = request("http://localhost:8080/")

describe('controller', function(){
  beforeEach(function(){
    modelStub1.yields({'Title':'Batman'},{'Title':'Batman','Year':'1989'});
  // modelStub2.yields({"Title":"Batman"},{'Title':'Batman','Year':'1989'});
    modelStub3.yields(null);
  });

  describe('Update Movie', function(){
    it('should attempt to update Batman - Year key', function(done){
      address
        .put('modify/Batman/Year/1990')
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.text).to.be.equal("Updated");
          done();
        });
    });
  });

  describe('Search Movie', function(){
    it('should attempt to search Batman', function(done){
      address
        .get('search/Batman')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.body.Title).to.be.equal("Batman");
          done();
        });
    });
  });

  describe('Delete Movie', function(){
    it('should attempt to delete movie', function(done){
      address
        .delete('delete/Godzilla')
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.text).to.be.equal("Deleted  Godzilla");
          done();
        });
    });
  });

  describe('Insert Movie', function(){
    it('should attempt to insert movie', function(done){
      address
        .post('add/Brave')
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.text).to.be.equal("Brave movie  record Inserted");
          done();
        });
    });
  });

});
