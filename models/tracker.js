const mongoose = require("mongoose");
const Schema = mongoose.Schema;
console.log("models loaded");

const puzzleSchema = new Schema({
    puzzle_name: { type: String },
    matchID: { type: String },
    series: { type: String },
    puzzleID: { type: String },
    nbrPieces: { type: String },
    size: { type: String },
    complexity: { type: String },
    status: { type: String },
    nbrMissing: { type: String },
    mystery: { type: String },
    puzzleMfg: { type: String },
    theme: { type: String },
    donorCustID: { type: String },
    dateEnt: { type: String },
    dateRet: { type: String },
    mfgID: { type: String },
    inOut: { type: String },
    custHist: { type: String },
    lastDate: { type: String },
    overYear: { type: String }
});

const custSchema = new Schema({
    custID: { type: String },
    custName: { type: String },
    status: { type: String },
    county: { type: String },
    parentCustID: { type: String },
    custAddr1: { type: String },
    custAddr2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    primaryContact: { type: String },
    title: { type: String },
    phone: { type: String },
    email: { type: String },
    insiderName: { type: String },
    insiderPhone: { type: String }
});

const custHistSchema = new Schema({
    puzzleMatchID: { type: String },
    custID: { type: String },
    dateRet: { type: String },
    calcDate: { type: String }    
});

const tranSchema = new Schema({
    puzzleID: { type: String },
    puzzleMatchID: { type: String },
    custID: { type: String },
    custName: { type: String },    
    dateSent: { type: String },
    dateRet: { type: String },
    complexity: { type: String },
    status: { type: String },
    nbrMissing: { type: String },
    puzzleName: { type: String },
    inOut: { type: String },
    mfg: { type: String },
    nbrPieces: { type: String }
});

const mfgSchema = new Schema({
    mfgName: { type: String },
    mfgID: { type: String },
    mfgAddr1: { type: String },
    mfgAddr2: { type: String },
    mfgCity: { type: String },
    mfgState: { type: String },
    mfgZip: { type: String },
    mfgContact: { type: String },
    mfgPhone: { type: String },
    notes: { type: String }    
});

const commSchema = new Schema({
    puzzleID: { type: String },
    matchID: { type: String },
    puzzleName: { type: String },
    comments: { type: String }
});

const Tracker = mongoose.model(
    "Tracker",
    puzzleSchema,
    custSchema,
    custHistSchema,
    tranSchema,
    mfgSchema,
    commSchema
);

module.exports = Tracker;