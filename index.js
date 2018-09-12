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
        },
        employer: (el)=>{
            return el.t2.employer;
        },
        location: (el)=>{
            return el.t6.point;
        },
        createdAt: (el)=>{
            return el.t2.createdAt;
        }
    },
    Post: {
        objectId: (el)=>{
            return el.t1.objectId;
        },
        text: (el)=>{
            return el.t1.text;
        },
        author: (el)=>{
            return el.t1.author;
        },
        createdAt: (el)=>{
            return el.t1.createdAt;
        }
    },
    City: {
        objectId: (el)=>{
            return el.t4.objectId;
        },
        name: (el)=>{
            return el.t4.name;
        },
        country: (el)=>{
            return el.t4.country;
        },
        createdAt: (el)=>{
            return el.t4.createdAt;
        }
    },
    Country: {
        objectId: (el)=>{
            return el.t5.objectId;
        },
        name: (el)=>{
            return el.t5.name;
        },
        createdAt: (el)=>{
            return el.t5.createdAt;
        }
    },
    Category: {
        objectId: (el)=>{
            return el.t3.objectId;
        },
        name: (el)=>{
            return el.t3.name;
        },
        createdAt: (el)=>{
            return el.t3.createdAt;
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



