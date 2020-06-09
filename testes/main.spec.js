var expect = require('chai').expect;

describe('Main', function() {
  var arr;

  // Roda uma vez, antes do bloco
  before(function() {
    //Inicia uma conexão no banco
    //Cria um conjunto de dados
  });

  // roda uma vez. depois do bloco
  after(function() {
  //  Fecha conexão do banco
  //  Apagar esse conjunto de dados
  });

  // roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(function() {

  });

  it('should be on array', function () {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
    // console.log(arr.length); //4
  });

  it('should renove the value 3 when use pop in the array', function () {
    arr.pop();
    // console.log(arr.pop() === 3); //true
    expect(arr).to.not.include(3);
  });

  it('should return true pop 3 from the array', function () {
    expect(arr.pop() === 3).to.be.true;
  })

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    // console.log(arr.length);// 2
    expect(arr).to.have.lengthOf(2);
  });

});

//before
//beforeEach
//test 1
//afterEach
//beforeEach
//test 2
//afterEach
//after
