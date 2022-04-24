import { el, h, mount } from "redom";
import Language from "./Language";
import Utilities from "./Utilities";
import { lighten } from "polished";
import { get, set } from "js-cookie";

export default class Interface {
  constructor() {
    this.elements = {};
  }

  buildStyle() {
    return el(
      "style",
      "#cconsent-bar .bar-title {margin:0;font-size: 20px; font-weight: bold;}",
      "#cconsent-bar .cc-text { margin: 8px 0;}",
      "#cconsent-bar, #cconsent-bar * { box-sizing:border-box; font-family: 'Roboto', sans-serif; }",
      `#cconsent-bar { background-color:` +
        window.CookieKonsent.config.theme.primaryColor +
        `; color:` +
        window.CookieKonsent.config.theme.fontColor +
        `; padding: 24px 128px; border-radius: 12px; text-align:right; font-family:sans-serif; font-size:14px; line-height:18px; position:fixed; bottom:16px; left:16px; width: calc(100% - 32px); z-index:9998; transform: translateY(0); transition: transform .25s ease-in-out;}`,
      `#cconsent-bar.ccb--hidden {transform: translateY(200%); display:block;}`,
      `#cconsent-bar .ccb__wrapper { display:flex; flex-wrap:wrap; justify-content:space-between; max-width:1800px; margin:0 auto;}`,
      `#cconsent-bar .ccb__left { align-self:center; text-align:left; margin:0;}`,
      `#cconsent-bar .ccb__right { align-self:center; white-space: nowrap;}`,
      `#cconsent-bar .ccb__right > div {display:inline-block; color: ${window.CookieKonsent.config.theme.fontColor};}`,
      `#cconsent-bar a { text-decoration:underline; color:` +
        window.CookieKonsent.config.theme.fontColor +
        `; }`,
      `#cconsent-bar button, #cconsent-modal .ccm__footer button#ccm__footer__consent-modal-submit  { transition: all .2s; border-radius: 8px; line-height:normal; font-size:14px; border:none; padding: 12px; color:` +
        window.CookieKonsent.config.theme.primaryColor +
        `; background-color:` +
        window.CookieKonsent.config.theme.fontColor +
        `;}`,
      `#cconsent-bar .customize-button { background: ${lighten(
        0.065,
        window.CookieKonsent.config.theme.primaryColor
      )}; color: ${
        window.CookieKonsent.config.theme.fontColor
      }; margin-right: 16px; transition: all .2s; }`,
      `#cconsent-bar .customize-button:hover{ background: ${lighten(
        0.09,
        window.CookieKonsent.config.theme.primaryColor
      )};}`,
      `#cconsent-bar a.ccb__edit { margin-right:15px }`,
      `#cconsent-bar a:hover, #cconsent-bar button:hover { cursor:pointer; }`,
      `#cconsent-bar button:hover, , #cconsent-modal .ccm__footer button#ccm__footer__consent-modal-submit:hover  { background: ${lighten(
        0.35,
        window.CookieKonsent.config.theme.primaryColor
      )};} }`,
      `#cconsent-modal { display:none; font-size:14px; line-height:18px;  width: 100vw; height: 100vh; position:fixed; left:0; top:0; right:0; bottom:0; font-family:sans-serif; font-size:14px; background-color:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;}`,
      `@media (max-width: 600px) { #cconsent-modal .ccm__content { padding: 24px;  } }`,
      `@media (max-width: 600px) { #cconsent-bar { padding: 24px; } }`,
      `@media (max-width: 600px) { #cconsent-bar .customize-button { margin: 0; margin-bottom: 8px; } }`,
      `@media (max-width: 600px) { #cconsent-bar .ccb__right { width: 100% } }`,
      `@media (max-width: 600px) { .links-container { flex-direction: column; margin-top: 8px; margin-bottom: 8px; } }`,
      `@media (max-width: 600px) { #cconsent-bar button, #cconsent-modal button { width: 100%; } }`,
      `@media (max-width: 600px) { #cconsent-bar .ccb__left { margin-bottom: 8px; } }`,
      `@media (max-width: 600px) { #cconsent-modal .ccm__footer { display: flex; flex-direction: column; } }`,
      `@media (max-width: 600px) { #cconsent-bar .ccb__button { display: flex !important; flex-direction: column; justify-content: space-between; align-items: center; width: 100%; }  }`,
      `#cconsent-modal h2, #cconsent-modal h3 {}`,
      `#cconsent-modal.ccm--visible {display:flex}`,
      `@media (max-width: 600px) { #cconsent-modal .ccm__content { max-width:100vw; max-height:initial; }}`,
      `#cconsent-modal * { color: ${window.CookieKonsent.config.theme.fontColor}}`,
      "#cconsent-modal { display:none; font-size:14px; line-height:18px;  width: 100vw; height: 100vh; position:fixed; left:0; top:0; right:0; bottom:0; font-family:sans-serif; font-size:14px; background-color:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;}",
      `#cconsent-modal .ccm__content {    max-width: 600px;}`,
      `#cconsent-modal .ccm__content > .ccm__content__heading {     border-radius: 12px 12px 0px 0px;  padding: 24px;  background-color:${window.CookieKonsent.config.theme.primaryColor}; position:relative;}`,
      `#cconsent-modal .ccm__content > .ccm__content__heading h2 { font-size:21px; font-weight:600;  margin:0 }`,
      `#cconsent-modal .ccm__content > .ccm__content__heading .ccm__cheading__close {font-weight:600;  cursor:pointer; font-size:26px; position: absolute; right:24px; top:24px;}`,
      `#cconsent-modal h2, #cconsent-modal h3 {margin-top:0}`,
      `#cconsent-modal .ccm__content__heading p {margin-top: 8px; margin-bottom: 0px;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body { background-color:${window.CookieKonsent.config.theme.primaryColor};}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup {margin:0; }`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge { display: flex; align-items: center; justify-content: center;  transition: transform .3s ease-out; transform:rotate(0deg);}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge > svg { pointer-events: none; fill: ${window.CookieKonsent.config.theme.fontColor} !important; }`,
      `#cconsent-modal .ccm__tab-head__icon-wedge { display:flex;align-items:center;justify-content:center;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head .ccm__tab-head__icon-wedge {transform:rotate(-180deg)}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head { padding:  12px 24px; margin:0;display:flex;justify-content:space-between;align-items:center;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content {padding:0px 24px; margin:0}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head { transition: background-color .5s ease-out }`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head:hover { background-color:${window.CookieKonsent.config.theme.primaryColor}; }`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head {font-weight:600; cursor:pointer; position:relative;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-content {display:none;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head { background-color:${window.CookieKonsent.config.theme.primaryColor}; }`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {display:flex;justify-content:space-between;align-items:center;}`,
      `@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {flex-direction:column} }`,
      `@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left { margin-bottom:20px; } }`,
      `#cconsent-modal .ccm__content .ccm__switch-component {display:flex; align-items:center;}`,
      `#cconsent-modal .ccm__content .ccm__switch-component > div {font-weight:600;}`,
      `#cconsent-modal .ccm__content .ccm__switch-group {width:40px; height:20px; margin:0 10px; position:relative;}`,
      `#cconsent-modal .ccm__content .ccm__switch {position: absolute; top:0; right:0; display: inline-block; width: 40px; height: 20px;}`,
      `#cconsent-modal .ccm__content .ccm__switch input {display:none;}`,
      `#cconsent-modal .ccm__content .ccm__switch__slider:before {position: absolute;content: "";height: 12px;width: 12px;left: 4px;bottom: 4px;background-color: ${
        (0.1, window.CookieKonsent.config.theme.fontColor)
      };border-radius: 50%;-webkit-transition: .4s;transition: .4s;}`,
      `#cconsent-modal .ccm__content .ccm__switch .ccm__switch__slider  {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: ${lighten(
        0.2,
        window.CookieKonsent.config.theme.primaryColor
      )}; border-radius:12px; -webkit-transition: .4s; transition: .4s;}`,
      `#cconsent-modal .ccm__content .ccm__switch input:checked + .ccm__switch__slider  {background-color: ${lighten(
        0.1,
        window.CookieKonsent.config.theme.primaryColor
      )};}`,
      `#cconsent-modal .ccm__content .ccm__switch input:focus + .ccm__switch__slider  {box-shadow: 0 0 1px #28A834;}`,
      `#cconsent-modal .ccm__content .ccm__switch input:checked + .ccm__switch__slider:before {content:'';-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px);}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content h3 {font-size:18px; margin-bottom:10px; line-height:1;}`,
      `#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content p { margin:0}`,
      "#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list:not(:empty) {margin-top:30px;}",
      "#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list .ccm__list__title { font-weight:600;}",
      "#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list ul { margin:15px 0; padding-left:15px }",
      `#cconsent-modal .ccm__footer { border-radius: 0px 0px 12px 12px; padding: 24px; background-color:${window.CookieKonsent.config.theme.primaryColor}; text-align:center; display: flex; align-items:center; justify-content:flex-end; }`,
      `#cconsent-modal .ccm__footer button.consent-give { border-radius: 8px !important; line-height:normal; font-size:14px; transition: background-color .5s ease-out;background-color:${lighten(
        0.065,
        window.CookieKonsent.config.theme.primaryColor
      )};` +
        "; color:" +
        window.CookieKonsent.config.theme.modalMainButtonfontColor +
        "; border:none; padding:12px; min-width:110px; border-radius: 2px; cursor:pointer; }",
      `#cconsent-modal .ccm__footer button.consent-give:hover { background-color: ${lighten(
        0.09,
        window.CookieKonsent.config.theme.primaryColor
      )}}`,
      `#cconsent-modal .ccm__tab-head-container { display: flex; align-items: center; justify-content:center; }`,
      "#cconsent-modal .ccm__footer button#ccm__footer__consent-modal-submit { margin-left:16px; }",
      "#cconsent-bar .links-container { display: flex; flex-direction: row; }",
      "#cconsent-bar .link { margin-right: 8px; }",
      `@media (max-width: 600px) { #cconsent-modal #ccm__footer__consent-modal-submit { margin-left: 0 !important; margin-top: 8px; } }`,
      "#cconsent-bar .email-to-contact { margin-right: 8px; }",
      `.cconsent-open-button { z-index: 9997; transition: all .2s; position:fixed; left: 24px; bottom: 24px; display: flex; align-items: center; justify-content: center; background: ${window.CookieKonsent.config.theme.primaryColor}; width: 48px; height: 48px; border-radius: 50%; }`,
      `.cconsent-open-button svg { width: 24px; height: 24px; color: ${window.CookieKonsent.config.theme.fontColor}; }`,
      `.cconsent-open-button:hover { background: ${lighten(0.1, window.CookieKonsent.config.theme.primaryColor)}; cursor: pointer; }`

    );
  }

  buildOpenButton() {
    return el("div.cconsent-open-button", {
      innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937c.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3c0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z"/><circle cx="12.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="7.5" cy="12.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/><circle cx="10.5" cy="16.5" r="1.5" fill="currentColor"/></svg>`,
    });
  }

  buildBar() {
    return el(
      "div#cconsent-bar.ccb--hidden",
      el(
        `div.ccb__wrapper`,
        el(
          "div.ccb__left",
          el("p.bar-title", "Suas configurações de Cookies"),
          el(
            "div.cc-text",
            Language.getTranslation(
              window.CookieKonsent.config,
              window.CookieKonsent.config.language.current,
              "barMainText"
            )
          ),
          el(
            "div.links-container",
            el("a.link", "Termos de uso", {
              href: window.CookieKonsent.config.website.terms_of_use_url,
            }),
            el("a.link", "Politicas de privacidade", {
              href: window.CookieKonsent.config.website.politics_of_privacy_url,
            })
          )
        ),
        el(
          "div.ccb__right",
          el(
            "div.ccb__button",
            el(
              "button.customize-button",
              Language.getTranslation(
                window.CookieKonsent.config,
                window.CookieKonsent.config.language.current,
                "barLinkSetting"
              )
            ),
            el(
              "button.consent-give",
              Language.getTranslation(
                window.CookieKonsent.config,
                window.CookieKonsent.config.language.current,
                "barBtnAcceptAll"
              )
            )
          )
        )
      )
    );
  }

  buildModal() {
    // Cookie names list middleware
    var listCookies = function (category) {
      var list = [];

      for (let service in window.CookieKonsent.config.services) {
        window.CookieKonsent.config.services[service].category === category &&
          list.push(window.CookieKonsent.config.services[service]);
      }

      if (list.length) {
        var listItems = [];

        for (let item in list) {
          listItems.push(
            el(
              "li",
              Language.getTranslation(
                list[item],
                window.CookieKonsent.config.language.current,
                "name"
              )
            )
          );
        }
      }
    };

    function modalTabGroups() {
      let contentItems = [];
      let i = 0;
      const filterCategories = Object.entries(
        window.CookieKonsent.config.services
      )
        .filter(([key, { cookies }]) => cookies.length > 0)
        .map((arr) => arr[0]);
      for (let key of filterCategories) {
        let tabId = Math.random().toString(16).slice(2);

        contentItems.push(
          el(
            "dl.ccm__tabgroup" +
              "." +
              key +
              (window.CookieKonsent.config.categories[key]?.checked
                ? ".checked-5jhk"
                : ""),
            { "data-category": key },
            el(
              "dt.ccm__tab-head",
              el("div.ccm__tab-head-container",
              el('span.ccm__tab-head__icon-wedge',
              el(document.createElementNS("http://www.w3.org/2000/svg", "svg"), { version: "1.2", preserveAspectRatio: "none", viewBox: "0 0 24 24", class: "icon-wedge-svg", "data-id": "e9b3c566e8c14cfea38af128759b91a3", style: `opacity: 1; mix-blend-mode: normal; fill: ${window.CookieKonsent.config.theme.fontColor}; width: 32px; height: 32px;`},
                el(document.createElementNS("http://www.w3.org/2000/svg", "path"), { 'xmlns:default': "http://www.w3.org/2000/svg", class: "icon-wedge-angle-down", d: "M17.2,9.84c0-0.09-0.04-0.18-0.1-0.24l-0.52-0.52c-0.13-0.13-0.33-0.14-0.47-0.01c0,0-0.01,0.01-0.01,0.01  l-4.1,4.1l-4.09-4.1C7.78,8.94,7.57,8.94,7.44,9.06c0,0-0.01,0.01-0.01,0.01L6.91,9.6c-0.13,0.13-0.14,0.33-0.01,0.47  c0,0,0.01,0.01,0.01,0.01l4.85,4.85c0.13,0.13,0.33,0.14,0.47,0.01c0,0,0.01-0.01,0.01-0.01l4.85-4.85c0.06-0.06,0.1-0.15,0.1-0.24  l0,0H17.2z", style: `fill: ${window.CookieKonsent.config.theme.fontColor};` }
                ),
              ),
            ), { 'aria-expanded': 'false', 'aria-controls': 'ccm__tab-content--' + tabId },
              Language.getTranslation(
                window.CookieKonsent.config.categories[key],
                window.CookieKonsent.config.language.current,
                "name"
              ),
              
              ),
              !window.CookieKonsent.config.categories[key].needed &&
                el(
                  "div.ccm__switch-component",
                  el(
                    "div.ccm__switch-group",
                    el(
                      "label.ccm__switch",
                      el("input.category-onoff", {
                        type: "checkbox",
                        "data-category": key,
                        checked:
                          window.CookieKonsent.config.categories[key].checked,
                      }),
                      el("span.ccm__switch__slider")
                    )
                  )
                )
            ),
            el('dd#ccm__tab-content--' + tabId + '.ccm__tab-content',
              el('div.ccm__tab-content__inner',
                el('div.ccm__tab-content__desc',
                  el('p', Language.getTranslation(window.CookieKonsent.config.categories[key], window.CookieKonsent.config.language.current, 'description')),    
                ),
              ),
            ),
          )
        );
        i++;
      }

      return contentItems;
    }

    return el(
      "div#cconsent-modal",
      el(
        "div.ccm__content",
        el(
          "div.ccm__content__heading",
          el(
            "h2",
            Language.getTranslation(
              window.CookieKonsent.config,
              window.CookieKonsent.config.language.current,
              "modalMainTitle"
            )
          ),
          el(
            "p",
            Language.getTranslation(
              window.CookieKonsent.config,
              window.CookieKonsent.config.language.current,
              "modalMainText"
            ),
            window.CookieKonsent.config.modalMainTextMoreLink
              ? el(
                  "a",
                  {
                    href: window.CookieKonsent.config.modalMainTextMoreLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  Language.getTranslation(
                    window.CookieKonsent.config,
                    window.CookieKonsent.config.language.current,
                    "learnMore"
                  )
                )
              : null
          ),
          el("div.ccm__cheading__close", "×")
        ),
        el("div.ccm__content__body", el("div.ccm__tabs", modalTabGroups())),
        el(
          "div.ccm__footer",
          el(
            "button.consent-give",
            Language.getTranslation(
              window.CookieKonsent.config,
              window.CookieKonsent.config.language.current,
              "modalBtnAcceptAll"
            )
          ),
          el(
            "button#ccm__footer__consent-modal-submit",
            Language.getTranslation(
              window.CookieKonsent.config,
              window.CookieKonsent.config.language.current,
              "modalBtnSave"
            )
          )
        )
      )
    );
  }

  modalRedrawIcons() {
    var tabGroups = this.elements["modal"].querySelectorAll(".ccm__tabgroup");

    for (let tabGroup of tabGroups) {
      if (
        window.CookieKonsent.config.categories[tabGroup.dataset.category]
          .checked
      ) {
        if (!tabGroup.classList.contains("checked-5jhk")) {
          tabGroup.classList.add("checked-5jhk");
          tabGroup.querySelector("input.category-onoff").checked = true;
        }
      } else {
        if (tabGroup.classList.contains("checked-5jhk"))
          tabGroup.classList.remove("checked-5jhk");
        tabGroup.querySelector("input.category-onoff").checked = false;
      }
    }
  }

  render(name, elem, callback) {
    if (typeof callback === "undefined") callback = function () {};
    if (typeof this.elements[name] !== "undefined") {
      this.elements[name].parentNode.replaceChild(elem, this.elements[name]);
      this.elements[name] = elem;
      callback(elem);
      return elem;
    } else {
      var insertedElem = mount(document.body, elem);
      if (insertedElem) {
        this.elements[name] = insertedElem;
      }
      callback(insertedElem);
      return insertedElem;
    }
  }

  buildInterface(callback) {
    const alreadyVisitor = get("konsent_visitor_id");
    if (typeof callback === "undefined") callback = function () {};
    var that = this;

    if (!alreadyVisitor) {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");

      fetch("https://vps38132.publiccloud.com.br/visitors", {
        method: "POST",
        body: JSON.stringify({
          website_id: window.CookieKonsent.config.website.id,
        }),
        headers,
      }).then((data) =>
        data.json().then(({ access_key }) => {
          console.log(access_key);
          window.CookieKonsent.config.accessKey = access_key;
          set("konsent_visitor_id", access_key, {
            expires: 999,
            domain: window.location.hostname,
            path: "/",
          });
        })
      );
    }

    Utilities.ready(function () {
      that.render("style", that.buildStyle());
      that.render("bar", that.buildBar(), (bar) => {
        if (!window.CookieKonsent.config.cookieExists) {
          if (!alreadyVisitor) {
            bar.classList.remove("ccb--hidden");
          }
        }
      });

      that.render("modal", that.buildModal());
      that.render("open-button", that.buildOpenButton());

      callback();
    });
  }

  addEventListeners(elements) {
    // If you click Accept all cookies
    var buttonKonsentGive = document.querySelectorAll(".consent-give");
    var buttonOpenBar = document.querySelectorAll(".cconsent-open-button");

    for(let button of buttonOpenBar) {
      button.addEventListener("click", () => {
        const bar = document.querySelector("#cconsent-bar")
        bar.classList.remove("ccb--hidden");
      })
    }

    for (let button of buttonKonsentGive) {
      button.addEventListener("click", () => {
        // We set config to full consent
        for (let key in window.CookieKonsent.config.categories) {
          window.CookieKonsent.config.categories[key].wanted =
            window.CookieKonsent.config.categories[key].checked = true;
        }

        this.writeBufferToDOM();

        this.buildCookie((cookie) => {
          this.setCookie(cookie);
        });

        this.elements["bar"].classList.add("ccb--hidden");
        this.elements["modal"].classList.remove("ccm--visible");

        this.modalRedrawIcons();
      });
    }

    // If you click Cookie settings and open modal
    Array.prototype.forEach.call(
      document.getElementsByClassName("customize-button"),
      (edit) => {
        edit.addEventListener("click", () => {
          this.elements["modal"].classList.add("ccm--visible");
        });
      }
    );

    // If you click trough the tabs on Cookie settings
    // If you click on/off switch
    this.elements["modal"]
      .querySelector(".ccm__tabs")
      .addEventListener("click", (event) => {
        // If you click trough the tabs on Cookie settings
        if (
          event.target.classList.contains("ccm__tab-head") ||
          event.target.classList.contains("ccm__tab-head__icon-wedge")
        ) {
          function getDlParent(eventTarget) {
            var parent = eventTarget.parentNode;
            if (parent.nodeName !== "DL") {
              return getDlParent(parent);
            } else {
              return parent;
            }
          }

          var parentDl = getDlParent(event.target);

          if (parentDl.classList.contains("ccm__tabgroup--open")) {
            parentDl.classList.remove("ccm__tabgroup--open");
          } else {
            parentDl.classList.add("ccm__tabgroup--open");
          }
        }

        // If you click on/off switch
        if (event.target.classList.contains("category-onoff")) {
          window.CookieKonsent.config.categories[
            event.target.dataset.category
          ].wanted = window.CookieKonsent.config.categories[
            event.target.dataset.category
          ].checked = event.target.checked === true ? true : false;

          var dt = document.querySelector(
            ".ccm__tabgroup." + event.target.dataset.category
          );
          if (
            event.target.checked === false &&
            dt.classList.contains("checked-5jhk")
          ) {
            dt.classList.remove("checked-5jhk");
          } else {
            dt.classList.add("checked-5jhk");
          }
        }
      });

    // If you click close on open modal
    this.elements["modal"]
      .querySelector(".ccm__cheading__close")
      .addEventListener("click", (event) => {
        this.elements["modal"].classList.remove("ccm--visible");
      });

    // If you click submit on cookie settings
    document
      .getElementById("ccm__footer__consent-modal-submit")
      .addEventListener("click", () => {
        let switchElements =
          this.elements["modal"].querySelectorAll(".ccm__switch input");

        Array.prototype.forEach.call(switchElements, (switchElement) => {
          window.CookieKonsent.config.categories[
            switchElement.dataset.category
          ].wanted = switchElement.checked;
        });

        this.buildCookie((cookie) => {
          this.setCookie(cookie, () => {
            this.elements["modal"].classList.remove("ccm--visible");
            this.elements["bar"].classList.add("ccb--hidden");
          });
        });

        this.writeBufferToDOM();
      });
  }

  writeBufferToDOM() {
    for (let action of window.CookieKonsent.buffer.appendChild) {
      if (
        window.CookieKonsent.config.categories[action.category].wanted === true
      ) {
        Node.prototype.appendChild.apply(action.this, action.arguments);
      }
    }

    for (let action of window.CookieKonsent.buffer.insertBefore) {
      if (
        window.CookieKonsent.config.categories[action.category].wanted === true
      ) {
        action.arguments[1] =
          action.arguments[0].parentNode === null
            ? action.this.lastChild
            : action.arguments[1];
        Node.prototype.insertBefore.apply(action.this, action.arguments);
      }
    }
  }

  buildCookie(callback) {
    let cookie = {
      version: window.CookieKonsent.config.cookieVersion,
      categories: {},
      services: [],
    };

    for (let key in window.CookieKonsent.config.categories) {
      cookie.categories[key] = {
        wanted: window.CookieKonsent.config.categories[key].wanted,
      };
    }

    cookie.services = Utilities.listGlobalServices();

    var cookiesAccepts = Object.entries(cookie.categories)
      .map(([key, value]) => {
        const isWanted = value.wanted;
        if (!isWanted) {
          return [];
        }
        if (!window.CookieKonsent.config.services[key].cookies) {
          return [];
        }
        return window.CookieKonsent.config.services[key].cookies;
      })
      .reduce((acc, cookiesArr) => {
        return [...acc, ...cookiesArr];
      })
      .filter(({ id }) => {
        return id !== "cconsent" && id !== "konsent_visitor_id";
      });

    let acceptAllCookies = true;

    window.CookieKonsent.config.website.cookies.forEach((cookie) => {
      let accept = cookiesAccepts.findIndex(
        (wbCookie) => wbCookie.id === cookie.id
      );
      if (accept < 0) {
        acceptAllCookies = false;
      }
    });

    const headers = new Headers();
    const accessKey = window.CookieKonsent.config.accessKey;
    headers.set("Content-Type", "application/json");
    fetch(`https://vps38132.publiccloud.com.br/visitors/${accessKey}`, {
      method: "PUT",
      body: JSON.stringify({
        status: acceptAllCookies ? "accepted_all" : "customized",
        cookies: cookiesAccepts.map((cookies) => cookies.id),
      }),
      headers,
    }).then(() => {
      console.log("[Konsent]: visitor updated");
    });

    if (callback) callback(cookie);
    return cookie;
  }

  setCookie(cookie, callback) {
    const expires_in = new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000
    ).toUTCString();

    document.cookie = `cconsent=${JSON.stringify(
      cookie
    )}; expires=${expires_in}; path=/;`;
    if (callback) callback();
  }
}
