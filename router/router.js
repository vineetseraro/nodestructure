const express = require("express");
const router = new express.Router();
const Modal = require("../modal/pmodal")

router.get("/", function(req, res){
    res.send("homepage")
})

module.exports = router;
