import {ReferentService} from './service/referent-service';
import {toRange} from '../../../third_party/xpath-range/xpath-range';
import {CSS} from '../../../build/amp-annotator-0.1.css';

/**
 * visible for testing.
 * @abstract
 */
class AmpAnnotator extends AMP.BaseElement {
  constructor(element) {
    super(element);
  }
}
const annotatableUri = 'https://genius.com/Beyonce-love-drought-lyrics';
const referentService = new ReferentService(annotatableUri, annotatableUri, annotatableUri);

referentService.referents().then(referents=>{
  referents.referents.forEach(referent => {
    const range = referent.range;
    const xpathRange = toRange(range.start, range.startOffset, range.end, range.endOffset, document.body);

    const surroundContentsWith = document.createElement('span');
    surroundContentsWith.setAttribute("class", "amp-annotator-referent");
    xpathRange.surroundContents(surroundContentsWith);
  });
});

AMP.registerElement('amp-annotator', AmpAnnotator, CSS);
