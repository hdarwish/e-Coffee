import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('CoffeePods', () => {

  const COFFEE_POD_URL = `/coffeePods`
  const LARGE_COFFEE_PODS = `COFFEE_POD_LARGE`;
  const SMALL_COFFEE_PODS = `COFFEE_POD_SMALL`;
  const SEVEN_DOZEN_PACK = `SEVEN_DOZEN`;
  const COFFEE_FLAVOR_VANILLA = `COFFEE_FLAVOR_VANILLA`;
  const ESPRESSO_POD = `ESPRESSO_POD`;

  it('should show all large pods', (done) => {

    chai.request(app)
      .get(`${COFFEE_POD_URL}/getCoffeePodsBy/type/${LARGE_COFFEE_PODS}`)
      .end((err, res) => {
        if (err) {
          console.log("an error occured", err)
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(10)
        done();
      })
  })

  it('should show all espresso vanilla pods', (done) => {

    chai.request(app)
      .get(`${COFFEE_POD_URL}/getCoffeePodsBy/type/${ESPRESSO_POD}/flavor/${COFFEE_FLAVOR_VANILLA}`)
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

  it('should show all small pods', (done) => {

    chai.request(app)
      .get(`${COFFEE_POD_URL}/getCoffeePodsBy/type/${SMALL_COFFEE_PODS}`)
      .end((err, res) => {
        if (err) {
          console.log("an error occured", err)
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(10)
        done();
      })
  })

  it('should show all pods sold in 7 dozen packs', (done) => {

    chai.request(app)
      .get(`${COFFEE_POD_URL}/getCoffeePodsBy/size/${SEVEN_DOZEN_PACK}`)
      .end((err, res) => {
        if (err) {
          console.log("an error occured", err)
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(2)
        done();
      })
  })
})