'use strict';

const handleDeliv = require('../vendor')


describe('testing delivery handler', () =>{

  console.log = jest.fn();

  it('should log message', ()=> {
    const payload = {
      orderID: '1232154654654',
    };
    handleDeliv(payload);
    expect(console.log).toHaveBeenCalled();
  })
})
