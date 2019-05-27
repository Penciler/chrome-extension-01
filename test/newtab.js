//const should = require('should')
//const getPic = require('../newtab.js')
//import should from 'should';
//const should = requirejs(["node_modules/should/should.js"]);
//import * as should from 'should';

describe('uri test', () => {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = 
    '<h1>Pictures</h1>'+
  '<form>'+
  '<select id="width">'+
    '<option>200</option>'+
    '<option>400</option>'+
  '</select>'+
  '<select id="height">'+
    '<option>300</option>'+
    '<option>600</option>'+
  '</select>'+
  '<button id="refresh">'+
    '</button>'+
    '<div id="x"></div>'+
    '<script src="newtab.js"></script>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  it('uri response should looks like https://picsum.photos/id/861/200/300', done => {
    var res;
    getPic(function(res){
      var resHead = res.split('id');
      var resLength = res.split('/');
      resHead[0].should.equal('https://picsum.photos/') && resLength.length.should.equal(7);
      done();
    }
    );
  })

})