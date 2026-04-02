const express = require("express");
const { handleGenerateNewShortURL,
    handleRedirectURL,
    handleGetAnalytics, } = require("../controllers/url");
const router = express.Router();

router.route("/")
    .post(handleGenerateNewShortURL);

router.route("/:shortId",).get(handleRedirectURL);

router.route("/analytics/:shortId").get(handleGetAnalytics);

module.exports = router;