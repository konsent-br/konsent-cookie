import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
import CookieKonsent from './lib/CookieKonsent';

const cookieKonsent = new CookieKonsent();

window.CookieKonsent = window.CookieKonsent || {};
window.CookieKonsent.init = cookieKonsent.init;

