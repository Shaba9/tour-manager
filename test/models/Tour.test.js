require('../../lib/utils/connect')();
const mongoose = require('mongoose');
const Tour = require('../../lib/models/Tour');

describe('Tour Model', () => {
  beforeEach(done => mongoose.connection.dropDatabase(done));

  afterAll(() => mongoose.connection.close());

  it('validates a good model', () => {
    return Tour
      .create({
        title: 'Circus 2019',
        activities: ['Juggling', 'Twisting', 'Animal weirdness'],
        stops: ['1', '2', '3']
      })
      .then(tour => expect(tour.toJSON()).toEqual({
        title: 'Circus 2019',
        activities: ['Juggling', 'Twisting', 'Animal weirdness'],
        launchDate: expect.any(Date),
        stops: ['1', '2', '3'],
        _id: expect.any(mongoose.Types.ObjectId)
      }));
  });
});
