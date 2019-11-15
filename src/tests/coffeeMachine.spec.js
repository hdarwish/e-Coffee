import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const expect = chai.expect;
chai.use(chaiHttp);

describe('CoffeeMachines', () => {

  const COFFEE_MACHINE_URL = `/coffeeMachine`;
  const COFFEE_MACHINE_LARGE = `COFFEE_MACHINE_LARGE`;
  const ESPRESSO_MACHINES = `ESPRESSO_MACHINE`;

  it('should show all large machines', (done) => {

    chai.request(app)
      .get(`${COFFEE_MACHINE_URL}/getByProductType/${COFFEE_MACHINE_LARGE}`)
      .end((err, res) => {
        if (err) {
          console.log("an error occured", err)
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(3)
        done();
      })
  })

  it('should show all espresso machines', (done) => {
    chai.request(app)
      .get(`${COFFEE_MACHINE_URL}/getByProductType/${ESPRESSO_MACHINES}`)
      .end((err, res) => {
        if (err) {
          console.log("an error occured", err)
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf.lengthOf(3)
        done();
      })
  })

})