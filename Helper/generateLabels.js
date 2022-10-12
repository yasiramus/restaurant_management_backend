const { Chair } = require("../Model/chairs");

const { Table } = require("../Model/table");

const generateLabelNumber = async (tables, chairs) => {

    for (let tabelIndex = 1; tabelIndex <= tables; tabelIndex++) {
        
        let tabelLabel = new Table({

            label: `T${tabelIndex}`,
            
            available: true,

            chairs: []
            
        });

        for (let chairIndex = 1; chairIndex <= chairs; chairIndex++) {

            let chairLabel = new Chair({

                label: `C${chairIndex}`,

                available: true,

                table: tabelLabel
                
            });

            const savedChairData = await chairLabel.save();

            tabelLabel.chairs.push(savedChairData);
            
        }
        
       await tabelLabel.save()
       
    }

       
}

module.exports = { generateLabelNumber };
