// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const parser = require('json-parser');
const router = express.Router();
const Client = require('node-rest-client').Client;
const client = new Client();
const vies = require('vies');
var exec = require('child_process').exec;

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

//ODM URL
const odmUrl = "https://brsv2-a4faa142.eu-gb.bluemix.net/DecisionService/rest/Bill_Validation/1.0/Bill_Validation/1.2"; 
// Connect to mongodb
mongoose.connect(dbHost);

// viesResponse = new viesResponse("");
global.viesResponse = "";
//new viesResponse(response)"";

// create mongoose schema
const entitySchema = new mongoose.Schema({
  address: String,
  name: String,
  countryCode: String,
  vatNumber: String,
  address_c: String,
  name_c: String,
  countryCode_c: String,
  vatNumber_c: String,
  overall_c: String
    //result: String
});

// create mongoose model
const Entity = mongoose.model('Entity',entitySchema);


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* GET all VAT Identifiers. */
router.get('/entities', (req, res) => {
    Entity.find({}, (err, entities) => {
        if (err) res.status(500).send(error)

        res.status(200).json(entities);
    });
});

/* GET one VAT Identifier. */
router.get('/entities/:id', (req, res) => {
    Entity.findById(req.param.id, (err, entities) => {
        if (err) res.status(500).send(error)

        res.status(200).json(entities);
    });
});

//Create a VAT Identifier. 
/*router.post('/entities', (req, res) => {
  
	let entity = new Entity({
		address: validation.viesResponse.data.address,
    name: validation.viesResponse.data.name,
    countryCode: validation.viesResponse.data.countryCode,
    vatNumber: validation.viesResponse.data.vatNumber

		//result: odmResult
	});

  // Saves Entity Name to the HTML
 Entity.save(error => {
    if (error) return res.status(500).send(error)

    res.status(201).json({
        message: 'Entity created successfully'
    });
  
  });
  
});
     


*/




router.post('/vies', async (req, res) => {
  try {
    let viesResponse = await vies.validate(req.body.VAT_Number, req.body.VAT_CC)

    //console.log(viesResponse);

    var validation = "";  
    var viesResults = "";
    var colour = "";
    
    console.log("validate");
    var args = {
                      data: 
                                               {
                                                    "__DecisionID__": "string",
                                                    "vat": {
                                                        "address": viesResponse.data.address,
                                                        "countryCode": viesResponse.data.countryCode,
                                                        "vatNumber": viesResponse.data.vatNumber,
                                                        "companyName": viesResponse.data.name
                                                    },
                                                    "bill": {
                                                        "address": "string",
                                                        "countryCode": "string",
                                                        "vatNumber": "string",
                                                        "companyName": "string"
                                                    }
                                                },
                      
                      headers: {"Authorization": "Basic cmVzQWRtaW46dDg0M3U1c2VqNzhr", "Content-Type":"application/json"}
    }

 
    function colourcheck(validation) {

      // This part of the code looks through true/false operators and assigns numeric boolean outputs
        // and assigns an overall score of the information validated against VIES 
          // Variables that are assigned true or false outputs
            var ODMresult = validation.addressValidation; // address
            var ODMresult1 = validation.ccValidation; // countrycode
            var ODMresult2 = validation.companyNameValidation; // name
            var ODMresult3 = validation.sellerValidation; // request date
            var ODMresult4 = validation.vatNumberValidation; // vat number

            console.log(ODMresult1);

          // 1) Converts true/false responses into numeric boolean outputs

          var ODMresult_b = ODMresult ? 1:0;
          var ODMresult1_b = ODMresult1 ? 1:0;
          var ODMresult2_b = ODMresult2 ? 1:0;
          var ODMresult3_b = ODMresult3 ? 1:0;
          var ODMresult4_b = ODMresult4 ? 1:0;

 
           // 2) Assigns a colour code to the output
           var ODMresult_c;
           var ODMresult1_c;
           var ODMresult2_c;
           var ODMresult3_c;
           var ODMresult4_c;

          if (ODMresult == false) {
            ODMresult_c = "#ff0000";
          } else {
            ODMresult_c = "#00ff00";
          }
           if (ODMresult1 == false) {
            ODMresult1_c = "#ff0000";
          } else {
            ODMresult1_c = "#00ff00";
          }
          if (ODMresult2 == false) {
            ODMresult2_c = "#ff0000";
          } else {
            ODMresult2_c = "#00ff00";
          }
          if (ODMresult3 == false) {
            ODMresult3_c = "#ff0000";
          } else {
            ODMresult3_c = "#00ff00";
          }  
          if (ODMresult4 == false) {
            ODMresult4_c = "#ff0000";
          } else {
            ODMresult4_c = "#00ff00";
          } 
          

          // summation of the true or false statements assigning the overall score of the data
          var sumODMresult = ODMresult_b + ODMresult1_b + ODMresult2_b + ODMresult3_b + ODMresult4_b;

          // if statements assigning the total value of the agreement between vies and inputted data
          if (sumODMresult == 0) {
            var correlationODMresult = "0%"
            var ODMresult_overall_c = "#ff0000"
          } else if (sumODMresult == 1) {
            var correlationODMresult = "20%"
            var ODMresult_overall_c = "#ff5050"
          } else if (sumODMresult == 2) {
            var correlationODMresult = "40%"
            var ODMresult_overall_c = "#ff9933"
          } else if (sumODMresult == 3) {
            var correlationODMresult = "60%"
            var ODMresult_overall_c = "#ffff00"
          } else if (sumODMresult == 4) {
            var correlationODMresult = "80%"
            var ODMresult_overall_c = "#99ff33"
          } else if (sumODMresult == 5) {
            var correlationODMresult = "100%"
            var ODMresult_overall_c = "#00ff00"
          }
          
          // Overall variable score
          var ODMsuccessrate = correlationODMresult;

          
          var objODM = {viesResponse, ODM: {OverallCorrelation: ODMsuccessrate, addressCorrelation: ODMresult, countryCodeCorrelation: ODMresult1, nameCorrelation: ODMresult2, requestDateCorrelation: ODMresult3, vatNumberCorrelation: ODMresult4}, Colourcode: {OverallCorrelation_c: ODMresult_overall_c, addressCorrelation_c: ODMresult_c, countryCodeCorrelation_c: ODMresult1_c, nameCorrelation_c: ODMresult2_c, requestDateCorrelation_c: ODMresult3_c, vatNumberCorrelation_c: ODMresult4_c}};
          
          //colour = Colourcode;
          
          //console.log(Entity.find({}, (err, entities)));


          //console.log(objODM); 
          // Object output to https as a json 
         return objODM.Colourcode;

  
          
          // creation of object for https console such that the items may be transferred to the html page
         
    }

    function saveEntity(entity){
        // Saves Entity Name to the HTML
        
         entity.save(error => {
            console.log(error);
          });
    }


    
     client.post(odmUrl, args, function(data, validation, viesResults, colour){
       
        validation = data.result;
        viesResults = viesResponse;
        
        
        colour = colourcheck(validation);

      console.log("colour")      
      console.log(colour)


         let entity = new Entity({
            vatNumber: viesResults.data.vatNumber,
            countryCode: viesResults.data.countryCode,
            name: viesResults.data.name,
            address: viesResults.data.address,
            address_c: colour.addressCorrelation_c,
            name_c: colour.nameCorrelation_c,
            countryCode_c: colour.countryCodeCorrelation_c,
            vatNumber_c: colour.vatNumberCorrelation_c,
            overall_c: colour.OverallCorrelation_c
            });

         
         saveEntity(entity);

       


      });

      console.log("the very end");


  }
  catch (err){
    console.log(err)
    res.send('error')
  }
	

  


});           




/* Delete all Identifiers. */
router.get('/delete', (req, res) => {
    
   mongoose.connection.db.dropDatabase(error => {
  if(error) res.status(500).send(error)

  res.status(200).json({
            message: 'Identifiers Deleted'
       });
      console.log('db dropped')   
    });
    
});



// this post completes two primary searches - it firstly reads strings from a .txt or .csv file                      
router.post('/ERPVATLinkreader', (req,res) => {
  var command = "cat" + req.body.ERPVATLink;
  // Extracts the strings from the .txt or .csv files
  ERPVATRepository = exec("cat info.txt", function(error, stdout, stderr) {
      //console.log('stdout: ' + stdout);
      //console.log('stderr: ' + stderr);
      if (error != null) {
        console.log('exec error: ' + error);
      }

      array = stdout; // renames the variable stdout to array

      //var VATinfo = array.split(',');
      //console.log(VATinfo);

      // For loop extracting the location of the commas separating the details of information on invoices
      var VATDetails = [], i;
      for(i = 0; i < array.length; i++) {
        if (array[i] === ';'){
          VATDetails.push(i);
        }
      }
      //console.log(VATDetails);

      // Organises the data by comma separation
      var organisedinfo = [], j;
      for(j = -1; j < VATDetails.length; j++) {
          if (j == -1){
            slicedVATinfo = array.slice(VATDetails[j], VATDetails[j+1])
            organisedinfo.push(slicedVATinfo);
          } else {
            slicedVATinfo = array.slice((VATDetails[j]+1), VATDetails[j+1])
            organisedinfo.push(slicedVATinfo);
          }
      }     
    //console.log(organisedinfo);
    var k;
    // separating the entities in address/countryCode/name/requestDate/valid/vatNumber
    // create an object defining the above
    for(k = 0; k < organisedinfo.length; k++) {
       
       var objectcollection = [];

       k = k*5;
       
       var objectname = {address: organisedinfo[k], countryCode: organisedinfo[k+1], name: organisedinfo[k+2], requestDate: organisedinfo[k+3], valid: organisedinfo[k+4], vatNumber: organisedinfo[k+4] };
     

              /// write to file
       // var txtFile = "/home/matthias/Desktop/vat2be/mean-docker/mongodb/test.txt";
        //var file = new File(txtFile);
        

        //file.open("w"); // open file with write access
        //file.write(objectname);
        //file.close();d
        console.log(objectname);
      }   
      



       
      //console.log(positioning);
      return;
    });

});

router.post('')

module.exports = router;