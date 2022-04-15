import Utilities from "./Utilities";

export default class Configuration {
  constructor(website) {
    this.website = website;
    window.CookieKonsent.buffer = {
      appendChild: [],
      insertBefore: [],
    };

    // Wrapper filter function
    window.CookieKonsent.wrapper = function () {};

    // Settings injector for users
    window.CookieKonsent.setConfiguration = this.setConfiguration.bind(this);

    window.CookieKonsent.config = {
      website: this.website,
      active: true,
      cookieExists: false,
      cookieVersion: 1,
      modalMainTextMoreLink: null,
      barTimeout: 1000,
      theme: {
        barColor: this.website.theme.primary_color || "#2C7CBF",
        barTextColor: this.website.theme.background_color || "#FFF",
        barMainButtonColor: this.website.theme.background_color || "#FFF",
        barMainButtonTextColor: this.website.theme.primary_color || "#2C7CBF",
        modalMainButtonColor: this.website.theme.primary_color || "#2C7CBF",
        modalMainButtonTextColor: this.website.theme.background_color || "#FFF",
      },
      language: {
        current: "pt",
        locale: {
          pt: {
            barMainText:
              "Esse site utiliza cookies para melhorar sua experiencia.",
            barLinkSetting: "Customizar de Cookies",
            barBtnAcceptAll: "Aceitar todos os cookies",
            modalMainTitle: "Configurações de Cookies",
            modalMainText:
              "Os cookies são pequenos arquivos criados por sites visitados e que são salvos no computador do usuário, por meio do navegador.",
            modalBtnSave: "Salvar configurações atuais dos cookies",
            modalBtnAcceptAll: "Aceitar todos os cookies e fechar",
            modalAffectedSolutions: "Soluções afetadas:",
            learnMore: "Leia mais",
            on: "Ligado",
            off: "Desligado",
          },
        },
      },
      categories: {
        required: {
          needed: true,
          wanted: true,
          checked: true,
          language: {
            locale: {
              pt: {
                name: "Obrigatórios",
                description:
                  "Cookies necessários para o correto funcionamento do site.",
              },
            },
          },
        },
        performance: {
          language: {
            locale: {
              pt: {
                name: "Performance",
                description:
                  "Cookies utilizado para melhorar o desempenho do site",
              },
            },
          },
        },
        marketing: {
          language: {
            locale: {
              pt: {
                name: "Marketing",
                description: "Cookies utilizado para personalizar os anúncios",
              },
            },
          },
        },
        analytics: {
          language: {
            locale: {
              pt: {
                name: "Analises",
                description:
                  "Cookies utilizado para acompanhar os eventos realizados pelo site.",
              },
            },
          },
        },
        other: {
          language: {
            locale: {
              pt: {
                name: "Diversos",
                description: "Cookies diversos para as demais funções.",
              },
            },
          },
        },
        security: {
          language: {
            locale: {
              pt: {
                name: "Segurança",
                description: "Cookies relacionados a segurança do site.",
              },
            },
          },
        },
      },

      services: {
        required: {
          category: "required",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "required")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
        analytics: {
          category: "analytics",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "analytics")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
        marketing: {
          category: "marketing",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "marketing")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
        performance: {
          category: "performance",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "performance")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
        other: {
          category: "other",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "other")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
        security: {
          category: "security",
          cookies: this.website.cookies
            .filter((cookie) => cookie.type === "security")
            .map((cookie) => ({
              id: cookie.id,
              name: cookie.name,
              domain: cookie.domain,
            })),
        },
      },
    };

    // this.setConfiguration(configObject);
  }

  setConfiguration(configObject) {
    // The user overrides the default config
    console.log(window.CookieKonsent.config, configObject, {
      ...window.CookieKonsent.config,
      ...configObject,
    });

    this.mergeDeep(window.CookieKonsent.config, configObject);
    //loMerge(window.CookieKonsent.config, configObject);
    // The cookie overrides the default and user config
    this.cookieToConfig();

    // We tell the world we did this
    Utilities.dispatchEvent(document, "CCConfigSet");
  }

  cookieToConfig() {
    function removeReload() {
      Utilities.removeCookie();
      location.reload();
      return false;
    }

    document.cookie.split(";").filter((item) => {
      if (item.indexOf("konsent") >= 0) {
        var cookieData = JSON.parse(item.split("=")[1]);

        // We check cookie version. If older we need to renew cookie.
        if (typeof cookieData.version === "undefined") {
          return removeReload();
        } else {
          if (
            cookieData.version !== window.CookieKonsent.config.cookieVersion
          ) {
            return removeReload();
          }
        }

        // We check if cookie data categories also exist in user config
        for (let key in cookieData.categories) {
          // The cookie contains category not present in user config so we invalidate cookie
          if (
            typeof window.CookieKonsent.config.categories[key] === "undefined"
          ) {
            return removeReload();
          }
        }

        // We check if cookie data services also exist in user config
        cookieData.services.forEach(function (service) {
          // The cookie contains service not present in user config so we invalidate cookie
          if (
            typeof window.CookieKonsent.config.services[service] === "undefined"
          ) {
            return removeReload();
          }
        });

        // We we integrate cookie data into the global config object
        for (let key in cookieData.categories) {
          window.CookieKonsent.config.categories[key].checked =
            window.CookieKonsent.config.categories[key].wanted =
              cookieData.categories[key].wanted === true ? true : false;
        }

        window.CookieKonsent.config.cookieExists = true;
        return true;
      }
    });

    return false;
  }

  // Simple object check.
  isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }

  //Deep merge two objects.
  mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this.mergeDeep(target, ...sources);
  }
}
