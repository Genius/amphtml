import {ReferentService} from '../service/referent-service';

describe('referent-service', function() {
  const annotatableUri = 'http://example.com';
  const referentService = new ReferentService(annotatableUri, annotatableUri, annotatableUri);

  it('should return referents for url',() => {
    return referentService.referents().then((response) => {
      expect(response.total_entries).to.equal(7);
    });
  });
});
