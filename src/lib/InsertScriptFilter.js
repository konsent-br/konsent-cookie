import Filter from './Filter';

export default class InsertScriptFilter extends Filter {

  constructor() {
    super();
  }

  init() {
    this.overrideAppendChild();
    this.overrideInsertBefore();
  }

  overrideAppendChild() {

    Element.prototype.appendChild = function(elem) {
      if(arguments[0].tagName === 'SCRIPT') {
        //console.log('Appending:', arguments);
        for (let key in window.CookieKonsent.config.services) {
          // Did user opt-in?
          if(window.CookieKonsent.config.services[key].type === 'dynamic-script') {
            if(arguments[0].outerHTML.indexOf(window.CookieKonsent.config.services[key].search) >= 0) {
              if(window.CookieKonsent.config.categories[window.CookieKonsent.config.services[key].category].wanted === false) {
                window.CookieKonsent.buffer.appendChild.push({'this': this, 'category': window.CookieKonsent.config.services[key].category, arguments: arguments});
                return undefined;
              }
            }
          }
        }
      } 
  
      return Node.prototype.appendChild.apply(this, arguments);
    }

  }

  overrideInsertBefore() {

    Element.prototype.insertBefore = function(elem) {
    
      if(arguments[0].tagName === 'SCRIPT') {
        //console.log('Inserting:', arguments);
        for (let key in window.CookieKonsent.config.services) {
          // Did user opt-in?
          if(window.CookieKonsent.config.services[key].type === 'dynamic-script') {
            if(arguments[0].outerHTML.indexOf(window.CookieKonsent.config.services[key].search) >= 0) {
              if(window.CookieKonsent.config.categories[window.CookieKonsent.config.services[key].category].wanted === false) {
                window.CookieKonsent.buffer.insertBefore.push({'this': this, 'category': window.CookieKonsent.config.services[key].category, arguments: arguments});
                return undefined;
              }
            }
          }
        }
      }
  
      return Node.prototype.insertBefore.apply(this, arguments);
    }
  }

}