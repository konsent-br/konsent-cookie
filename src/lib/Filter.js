import Utilities from "./Utilities";

export default class Filter  {

  createBlacklist(type) {
    var services = {};
    for(var service in window.CookieKonsent.config.services) {
      if (window.CookieKonsent.config.services[service].type === type) {
        if(window.CookieKonsent.config.categories[window.CookieKonsent.config.services[service].category].needed === false) {
          if (window.CookieKonsent.config.categories[window.CookieKonsent.config.services[service].category].wanted === false) {
            services[service] = window.CookieKonsent.config.services[service];
          }
        }
      }
    }

    var blacklist = [];

    for(var service in services) {
      var type = Utilities.objectType(services[service].search);
      if (type === 'String') {
        blacklist.push(services[service].search);
      } else if(type === 'Array') {
        for (let i = 0; i < services[service].search.length; i++) {
          blacklist.push(services[service].search[i]);
        }
      }
    }

    return blacklist;
  }

}