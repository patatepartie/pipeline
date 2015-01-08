exports.pages = {};
exports.includes = {};

exports.head = require("../templates/head.hbs");
exports.body = require("../templates/body.hbs");

exports.includes.formInput  = require("../templates/includes/formInput.hbs");
exports.includes.person  = require("../templates/includes/person.hbs");

exports.pages.collectionDemo  = require("../templates/pages/collectionDemo.hbs");
exports.pages.home  = require("../templates/pages/home.hbs");
exports.pages.info  = require("../templates/pages/info.hbs");
exports.pages.personAdd  = require("../templates/pages/personAdd.hbs");
exports.pages.personEdit  = require("../templates/pages/personEdit.hbs");
exports.pages.personView  = require("../templates/pages/personView.hbs");
