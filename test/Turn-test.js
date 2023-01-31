const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
    var turn;

    this.beforeEach(() => {
        turn = new Turn();
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    })
});