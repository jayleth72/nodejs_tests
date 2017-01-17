const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');

  // if (res !== 44){
  //   throw new Error(`Expected 44 but got ${res}`);
  // }

});

it('should give the square of a number', () => {
  var res = utils.square(10);

  expect(res).toBe(100).toBeA('number');
  // if (res !== 100){
  //   throw new Error(`Expected 100 but got ${res}`);
  // }
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(13);
//   expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   expect([2,3,4]).toExclude(5);
//
//   expect({
//     name: 'Jason',
//     age: 44,
//     location: 'Peregian Beach'
//   }).toInclude({
//     age:45
//   })
// });

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set first and last names', () => {
  var user = {location: 'ButtTown', age: 44}
  var res = utils.setName(user,'Big dick');

  expect(res).toBeA('object');
  expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Big',
    lastName: 'dick'
  });
  expect(res.firstName).toBeA('string');
  expect(res.firstName).toEqual('Big');
  expect(res.lastName).toBeA('string');
  expect(res.lastName).toEqual('dick');
});
