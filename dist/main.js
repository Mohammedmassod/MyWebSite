"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule, {
    ngZoneEventCoalescing: true,
})
    .catch(function (err) { return console.error(err); });
document.addEventListener('DOMContentLoaded', function () {
    console.log('Document is ready!');
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var _a;
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId) {
                (_a = document.querySelector(targetId)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Language toggle
    var toggleLangButton = document.getElementById('toggle-lang');
    toggleLangButton.addEventListener('click', function () {
        var currentLang = document.documentElement.lang;
        var newLang = currentLang === 'en' ? 'ar' : 'en';
        var newDir = currentLang === 'en' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
        document.documentElement.dir = newDir;
        document.querySelectorAll('[data-en]').forEach(function (element) {
            var newText = element.getAttribute("data-".concat(newLang));
            if (newText) {
                element.textContent = newText;
            }
        });
        toggleLangButton.textContent = newLang === 'en' ? 'AR' : 'EN';
    });
});
