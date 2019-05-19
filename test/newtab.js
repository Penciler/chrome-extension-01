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

  it('uri response should not be empty', done => {
    var res = getPic();
    if(res != "https://picsum.photos/200/300") console.error('wrong url!!');
    //assert.equal(res, "https://picsum.photos/200/300");
    console.log('response is:' + res);
    res.should.not.equal('');
    done()
  })

})