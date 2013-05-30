/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

suite('bindMDV', function() {
  var assert = chai.assert;
  
  test('bindModel bindModel', function() {
    var test = document.createElement('div');
    var template = document.createElement('template');
    template.innerHTML = '<div id="a" foo="{{bar}}"></div>';
    test.appendChild(template.createInstance(test, 'Polymer'));
    var a = test.querySelector('#a');
    
    test.bar = 5;
    dirtyCheck();
    assert.equal(a.getAttribute('foo'), 5);
    //
    test.bar = 8;
    dirtyCheck();
    assert.equal(a.getAttribute('foo'), 8);
  });
    
  test('bindModel bind input', function() {
    var test = document.createElement('div');
    var template = document.createElement('template');
    template.innerHTML = '<input value="{{bar}}" />';
    test.appendChild(template.createInstance(test, 'Polymer'));
    var a = test.querySelector('input');
    
    test.bar = 'hello';
    dirtyCheck();
    assert.equal(a.value, 'hello');
  });
});