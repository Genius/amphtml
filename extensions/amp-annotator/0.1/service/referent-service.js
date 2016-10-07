import '../../../../third_party/babel/custom-babel-helpers';
import {xhrFor} from '../../../../src/xhr';
const APIBASE = 'https://genius.com/';
const REFERENTS_URL = APIBASE + 'host_pages/referents.json';

export class ReferentService {
  constructor(rawAnnotatableUrl, canonicalUrl, ogUrl) {
    this.params_ = {
      raw_annotatable_url: rawAnnotatableUrl,
      canonical_url: canonicalUrl,
      og_url: ogUrl
    }
  }

  referents() {
    return xhrFor(window).fetchJson(this.buildUri_);
  }

  get buildUri_() {
    const getParams = Object.keys(this.params_).map(key => key + '=' + encodeURIComponent(this.params_[key])).join('&');
    return REFERENTS_URL + '?' + getParams;
  }
}
