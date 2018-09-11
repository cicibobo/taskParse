const data = require('./response');
const schema  = require('./schema');

const mappingSchema  =  {
    User: {
        objectId: (el)=>{
           return el.t2.objectId;
        },
        name: (el)=>{
            return el.t2.name;
        },
        city: (el)=>{
            return el.t2.city;
        }
    }
};


const parseEl  = (el)=>{
    let parsed = {};
    for(schemaItem in schema.data){
        for(let a in schema.data[schemaItem].fields){
            if(mappingSchema[schema.data[schemaItem].className][a]){
                let result = { [a] : mappingSchema[schema.data[schemaItem].className][a](el)};
                parsed[schema.data[schemaItem].className] = { ...parsed[schema.data[schemaItem].className], ...result} ;
            }
        }      
    }
    return parsed;
}

const deserializeResponse =  (data)=>{
   return  data.map((el)=>{
        return parseEl(el)
   });
}

console.log(deserializeResponse(data.response));



