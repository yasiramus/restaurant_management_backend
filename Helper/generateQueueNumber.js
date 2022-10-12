const generateNumberQueues = () => {
      
    let queueNumber='';
  
    for (let indexNumber = 0; indexNumber < 3; indexNumber++) {
            
      // generating random values 
      const randomValue = Math.round(Math.random() * 9)
     
      queueNumber = queueNumber + randomValue;
      
    }
  
    return queueNumber;
     
  }
  
  module.exports = { generateNumberQueues };