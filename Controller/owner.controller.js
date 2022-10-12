const { generateLabelNumber } = require("../Helper/generateLabels");

const { Owner } = require("../Model/owner");

const { Table } = require("../Model/table");

exports.saveOwnerData = async (req, res) => {

    try {
        const { numberOfTable, chairPerTable } = req.body;

        const dataStore = new Owner({numberOfTable, chairPerTable});
        
        await generateLabelNumber(numberOfTable, chairPerTable);

        const saveData = await dataStore.save();

        // const tabledata = await Table.find().populate("chairs")

        // res.status(201).json(tabledata);

        res.status(201).json(saveData);

    } catch (error) {

        console.log(error.message,'mk');

        res.status(500).json(error)

    }

}

exports.getAllTables = async (req, res) => {

    const getTableInfo = await Table.find().populate("chairs");

    getTableInfo ? res.status(200).json(getTableInfo) : res.status(404).json("ops sorry there is no data available");
    
};