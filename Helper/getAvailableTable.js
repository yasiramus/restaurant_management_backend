const { Owner } = require("../Model/owner");

const getAvailableTables = async (headCount) => {

    const ownerSavedData = await Owner.findOne();

    // get the table 
    const numberOfTable = ownerSavedData.numberOfTable;

    // chair
    const chairPerTable = ownerSavedData.chairPerTable;

    // multiply table by chair to get the total number of chair 
    const currentAvailabeChairs = numberOfTable * chairPerTable;

    if (headCount > currentAvailabeChairs) {
        
        return ("oops sorry headcount can't be more than current available chairs");
        
    } else {

        
        let tables = 0;

        const personsRemaining = headCount % chairPerTable;

        if (personsRemaining === 0 ) {

            tables = headCount / chairPerTable;
            
        } else {

            tables = Math.trunc(headCount / chairPerTable)

        };
        
        return {

            tables, chairPerTable, personsRemaining

        };
        
    }
}

module.exports = { getAvailableTables };