const { generateNumberQueues } = require("../Helper/generateQueueNumber");

const { getAvailableTables } = require("../Helper/getAvailableTable");

const { Table } = require("../Model/table");

exports.saveCustomerData = async (req, res) => {

    try {

        const { headCount } = req.body;

        const data = await getAvailableTables(headCount);
        
        if (data.personsRemaining === 0) {
           
            //find the availble table and return thos tables 
            let tables = await Table.find({ available: true }).limit(data.tables);
                       
            //loop through the table and set the availability to false 
            tables.forEach(async table => {

                if( table.available === true ){

                    table.set({ available: false });
                    
                    await table.save();
                    
                } 

            });
           
            let getTableLabel = tables.map(tabelLabel => tabelLabel.label);
     
            if (data.tables > 1) {

                return res.status(200).json(`${data.tables} tables required, head to Table ${getTableLabel.join(" and ")}`)
                
            }

          return res.status(200).json(`${data.tables} table required, head to Table ${getTableLabel}`)
           

        } else {

            let tables = await Table.find({available: true}).limit(data.tables).populate('chairs');

            tables.forEach(async table => {
                
                table.set({available:false})

                await table.save()

            });

            let getTableLabel = tables.map(tabelLabel => tabelLabel.label);

            let NumberOfCustomers = data.tables * data.chairPerTable;

            let QueueNumber = generateNumberQueues();
            
            console.log(QueueNumber, 'generateNumberQueues');

            return res.status(200).json(`${data.tables} tables required, ${NumberOfCustomers} customer head to Table ${getTableLabel.join(" and ")}. ${data.personsRemaining} customers required to wait till the next available table, Queue No. ${QueueNumber}`)

        }
        
    } catch (error) {

        console.log(error.message);

        res.status(500).json(error)

    }
}