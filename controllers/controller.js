const db = require("../models");
console.log("Testing DB");

module.exports = {
    findAll: function(req, res) {
        db.Model
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByID: function(req, res) {
        db.Model
        .findByID(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Model
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Model
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Model
        .findByID({ _id: req.params.id })
        .then(dbModel=> dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};



// CATEGORIES
// Puzzle,
// Customers,
// CustHist,
// Transactions,
// Mfgs,
// Comments