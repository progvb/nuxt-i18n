(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{230:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"callbacks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[a._v("#")]),a._v(" Callbacks")]),a._v(" "),s("p",[s("strong",[a._v("nuxt-i18n")]),a._v(" exposes some callbacks that you can use to perform specific tasks that depend on the app's language.")]),a._v(" "),s("h3",{attrs:{id:"beforelanguageswitch-oldlocale-newlocale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforelanguageswitch-oldlocale-newlocale"}},[a._v("#")]),a._v(" "),s("code",[a._v("beforeLanguageSwitch(oldLocale, newLocale)")])]),a._v(" "),s("p",[a._v("Called right before setting the app's new locale.")]),a._v(" "),s("p",[a._v("Parameters:")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("oldLocale")]),a._v(": the app's locale before the switch")]),a._v(" "),s("li",[s("strong",[a._v("newLocale")]),a._v(": the app's locale after the switch")])]),a._v(" "),s("h3",{attrs:{id:"onlanguageswitched-oldlocale-newlocale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlanguageswitched-oldlocale-newlocale"}},[a._v("#")]),a._v(" "),s("code",[a._v("onLanguageSwitched(oldLocale, newLocale)")])]),a._v(" "),s("p",[a._v("Called right after the app's locale has been switched.")]),a._v(" "),s("p",[a._v("Parameters:")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("oldLocale")]),a._v(": the app's locale before the switch")]),a._v(" "),s("li",[s("strong",[a._v("newLocale")]),a._v(": the app's locale after the switch")])]),a._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),s("p",[a._v("A typical usage would be to define those callbacks via a plugin where you can access the app's context (useful if you need to change Axios' config when the language changes for example).")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ~/plugins/i18n.js")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" app "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// beforeLanguageSwitch called right before setting a new locale")]),a._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("beforeLanguageSwitch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// onLanguageSwitched called right after a new locale has been set")]),a._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("i18n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("onLanguageSwitched")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Add the plugin to Nuxt's config:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// nuxt.config.js")]),a._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'~plugins/i18n.js'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);