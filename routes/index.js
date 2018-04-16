"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.router = router;
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Expressangular'
    });
});
