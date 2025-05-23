const Ship = require("../models/Ship");
const { validationResult } = require("express-validator");

// const mockShipData = [
//   {
//     name: "EVERGREEN",
//     imo: "9811000",
//     type: "Container Ship",
//     flag: "Panama",
//     yearBuilt: 2018,
//     grossTonnage: 219000,
//     deadWeight: 199000,
//     length: 400,
//     beam: 59,
//     owner: "Evergreen Marine Corp",
//     operator: "Evergreen Line",
//     status: "Active",
//   },
//   {
//     name: "MAERSK NEXUS",
//     imo: "9359026",
//     type: "Container Ship",
//     flag: "Denmark",
//     yearBuilt: 2014,
//     grossTonnage: 151000,
//     deadWeight: 146000,
//     length: 366,
//     beam: 48,
//     owner: "Maersk Line",
//     operator: "Maersk Line",
//     status: "Active",
//   },
//   {
//     name: "BLUE WHALE",
//     imo: "9557291",
//     type: "Bulk Carrier",
//     flag: "Liberia",
//     yearBuilt: 2011,
//     grossTonnage: 91000,
//     deadWeight: 81000,
//     length: 292,
//     beam: 45,
//     owner: "Pacific Basin Shipping",
//     operator: "Pacific Basin Shipping",
//     status: "Active",
//   },
//   {
//     name: "OCEAN VOYAGER",
//     imo: "9231688",
//     type: "Tanker",
//     flag: "Marshall Islands",
//     yearBuilt: 2009,
//     grossTonnage: 81000,
//     deadWeight: 115000,
//     length: 249,
//     beam: 44,
//     owner: "Teekay Shipping",
//     operator: "Teekay Tankers",
//     status: "Active",
//   },
//   {
//     name: "NORTHERN STAR",
//     imo: "9198991",
//     type: "Cruise Ship",
//     flag: "Bahamas",
//     yearBuilt: 2001,
//     grossTonnage: 92000,
//     deadWeight: 12000,
//     length: 294,
//     beam: 32,
//     owner: "Star Cruises",
//     operator: "Star Cruises",
//     status: "Active",
//   },
// ];


const mockShipData = [
  {
    name: "EVERGREEN",
    imo: "9811000",
    type: "Container Ship",
    flag: "Panama",
    yearBuilt: 2018,
    grossTonnage: 219000,
    deadWeight: 199000,
    length: 400,
    beam: 59,
    owner: "Evergreen Marine Corp",
    operator: "Evergreen Line",
    status: "Active",
  },
  {
    name: "MAERSK NEXUS",
    imo: "9359026",
    type: "Container Ship",
    flag: "Denmark",
    yearBuilt: 2014,
    grossTonnage: 151000,
    deadWeight: 146000,
    length: 366,
    beam: 48,
    owner: "Maersk Line",
    operator: "Maersk Line",
    status: "Active",
  },
  {
    name: "BLUE WHALE",
    imo: "9557291",
    type: "Bulk Carrier",
    flag: "Liberia",
    yearBuilt: 2011,
    grossTonnage: 91000,
    deadWeight: 81000,
    length: 292,
    beam: 45,
    owner: "Pacific Basin Shipping",
    operator: "Pacific Basin Shipping",
    status: "Active",
  },
  {
    name: "OCEAN VOYAGER",
    imo: "9231688",
    type: "Tanker",
    flag: "Marshall Islands",
    yearBuilt: 2009,
    grossTonnage: 81000,
    deadWeight: 115000,
    length: 249,
    beam: 44,
    owner: "Teekay Shipping",
    operator: "Teekay Tankers",
    status: "Active",
  },
  {
    name: "NORTHERN STAR",
    imo: "9198991",
    type: "Cruise Ship",
    flag: "Bahamas",
    yearBuilt: 2001,
    grossTonnage: 92000,
    deadWeight: 12000,
    length: 294,
    beam: 32,
    owner: "Star Cruises",
    operator: "Star Cruises",
    status: "Active",
  },
  {
    name: "ARCTIC HAWK",
    imo: "9483029",
    type: "Tanker",
    flag: "Norway",
    yearBuilt: 2012,
    grossTonnage: 105000,
    deadWeight: 120000,
    length: 250,
    beam: 42,
    owner: "Norwegian Tankers",
    operator: "Norwegian Tankers",
    status: "Active",
  },
  {
    name: "SUNFLOWER PRIDE",
    imo: "9831123",
    type: "Ro-Ro Ship",
    flag: "Japan",
    yearBuilt: 2019,
    grossTonnage: 50000,
    deadWeight: 34000,
    length: 210,
    beam: 30,
    owner: "MOL",
    operator: "MOL",
    status: "Active",
  },
  {
    name: "LIBERTY DREAM",
    imo: "9510203",
    type: "Container Ship",
    flag: "USA",
    yearBuilt: 2010,
    grossTonnage: 98000,
    deadWeight: 88000,
    length: 305,
    beam: 43,
    owner: "Liberty Maritime",
    operator: "Liberty Maritime",
    status: "Active",
  },
  {
    name: "PACIFIC DAWN",
    imo: "9312104",
    type: "Cruise Ship",
    flag: "Australia",
    yearBuilt: 2007,
    grossTonnage: 70000,
    deadWeight: 10000,
    length: 250,
    beam: 31,
    owner: "Carnival Australia",
    operator: "P&O Cruises",
    status: "Active",
  },
  {
    name: "EASTERN STAR",
    imo: "9523423",
    type: "General Cargo",
    flag: "China",
    yearBuilt: 2015,
    grossTonnage: 23000,
    deadWeight: 19000,
    length: 170,
    beam: 25,
    owner: "COSCO",
    operator: "COSCO",
    status: "Active",
  },
  {
    name: "GLOBAL TRADER",
    imo: "9647205",
    type: "Bulk Carrier",
    flag: "Singapore",
    yearBuilt: 2013,
    grossTonnage: 87000,
    deadWeight: 81000,
    length: 289,
    beam: 46,
    owner: "Pacific International Lines",
    operator: "PIL",
    status: "Active",
  },
  {
    name: "OCEAN BREEZE",
    imo: "9009834",
    type: "Cruise Ship",
    flag: "Italy",
    yearBuilt: 2000,
    grossTonnage: 76000,
    deadWeight: 9000,
    length: 238,
    beam: 34,
    owner: "Costa Cruises",
    operator: "Costa Cruises",
    status: "Active",
  },
  {
    name: "SEA HORIZON",
    imo: "9413224",
    type: "Tanker",
    flag: "Greece",
    yearBuilt: 2008,
    grossTonnage: 95000,
    deadWeight: 105000,
    length: 245,
    beam: 39,
    owner: "Tsakos Energy Navigation",
    operator: "Tsakos Energy Navigation",
    status: "Active",
  },
  {
    name: "WESTWIND",
    imo: "9880003",
    type: "Container Ship",
    flag: "Germany",
    yearBuilt: 2020,
    grossTonnage: 162000,
    deadWeight: 145000,
    length: 370,
    beam: 52,
    owner: "Hapag-Lloyd",
    operator: "Hapag-Lloyd",
    status: "Active",
  },
  {
    name: "NEPTUNE VISION",
    imo: "9786543",
    type: "Bulk Carrier",
    flag: "Greece",
    yearBuilt: 2017,
    grossTonnage: 92000,
    deadWeight: 86000,
    length: 288,
    beam: 46,
    owner: "Neptune Lines",
    operator: "Neptune Lines",
    status: "Active",
  },
  {
    name: "SOUTHERN LIGHT",
    imo: "9374501",
    type: "General Cargo",
    flag: "South Korea",
    yearBuilt: 2006,
    grossTonnage: 27000,
    deadWeight: 25000,
    length: 180,
    beam: 27,
    owner: "Hyundai Merchant Marine",
    operator: "HMM",
    status: "Active",
  },
  {
    name: "CORAL PRINCE",
    imo: "9128000",
    type: "Cruise Ship",
    flag: "UK",
    yearBuilt: 1998,
    grossTonnage: 72000,
    deadWeight: 8500,
    length: 230,
    beam: 29,
    owner: "Princess Cruises",
    operator: "Princess Cruises",
    status: "Active",
  },
  {
    name: "ARABIAN SEAS",
    imo: "9633007",
    type: "Tanker",
    flag: "UAE",
    yearBuilt: 2011,
    grossTonnage: 113000,
    deadWeight: 133000,
    length: 260,
    beam: 43,
    owner: "ADNOC",
    operator: "ADNOC Logistics",
    status: "Active",
  },
  {
    name: "NORSEA VENTURE",
    imo: "9720011",
    type: "Supply Vessel",
    flag: "UK",
    yearBuilt: 2016,
    grossTonnage: 6400,
    deadWeight: 4500,
    length: 88,
    beam: 20,
    owner: "Solstad Offshore",
    operator: "Solstad Offshore",
    status: "Active",
  },
  {
    name: "HORIZON GLORY",
    imo: "9405008",
    type: "Container Ship",
    flag: "Hong Kong",
    yearBuilt: 2008,
    grossTonnage: 110000,
    deadWeight: 99000,
    length: 310,
    beam: 42,
    owner: "Orient Overseas Container Line",
    operator: "OOCL",
    status: "Active",
  },
];

exports.getShipDetails = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        success: false,
        error: "Please provide a ship name",
      });
    }

    const ship = mockShipData.find(
      (ship) => ship.name.toLowerCase() === name.toLowerCase()
    );

    if (!ship) {
      return res.status(404).json({
        success: false,
        error: "Ship not found",
      });
    }

    res.status(200).json({
      success: true,
      data: ship,
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllShips = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: mockShipData.length,
      data: mockShipData,
    });
  } catch (err) {
    next(err);
  }
};

exports.createShip = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const ship = await Ship.create(req.body);

    res.status(201).json({
      success: true,
      data: ship,
    });
  } catch (err) {
    next(err);
  }
};
