const express = require("express");

const { saveCustomerData } = require("../Controller/customer.controller");

const { saveOwnerData, getAllTables } = require("../Controller/owner.controller");

const routes = express.Router();

routes.post("/saveOwnerData", saveOwnerData);

routes.post("/saveCustomerData", saveCustomerData);

routes.get("/", getAllTables);

module.exports = { routes };