const mongoose = require("mongoose");
const Schema = mongoose.Schema;
console.log("Testing DB");

const puzzleSchema = new Schema({
    puzzle_name: String,
    matchID: String,
    series: String,
    puzzleID: String,
    nbrPieces: String,
    size: String,
    complexity: String,
    status: String,
    nbrMissing: String,
    mystery: String,
    puzzleMfg: String,
    theme: String,
    donorCustID: String,
    dateEnt: String,
    dateRet: String,
    mfgID: String,
    inOut: String,
    custHist: String,
    lastDate: String,
    overYear: String
});

const custSchema = new Schema({
    custID: String,
    custName: String,
    status: String,
    county: String,
    parentCustID: String,
    custAddr1: String,
    custAddr2: String,
    city: String,
    state: String,
    zip: String,
    primaryContact: String,
    title: String,
    phone: String,
    email: String,
    insiderName: String,
    insiderPhone: String
});

const custHistSchema = new Schema({
    puzzleMatchID: String,
    custID: String,
    dateRet: String,
    calcDate: String    
});

const tranSchema = new Schema({
    puzzleID: String,
    puzzleMatchID: String,
    custID: String,
    custName: String,    
    dateSent: String,
    dateRet: String,
    complexity: String,
    status: String,
    nbrMissing: String,
    puzzleName: String,
    inOut: String,
    mfg: String,
    nbrPieces: String
});

const mfgSchema = new Schema({
    mfgName: String,
    mfgID: String,
    mfgAddr1: String,
    mfgAddr2: String,
    mfgCity: String,
    mfgState: String,
    mfgZip: String,
    mfgContact: String,
    mfgPhone: String,
    notes: String    
});

const commSchema = new Schema({
    puzzleID: String,
    matchID: String,
    puzzleName: String,
    comments: String
});

const Model = mongoose.model(
    "Model",
    puzzleSchema,
    custSchema,
    custHistSchema,
    tranSchema,
    mfgSchema,
    commSchema
);

module.exports = Model;