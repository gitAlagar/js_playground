let person = { 0 : {"name":"John", "age":30, "native":"chennai"},
            
            1: {"name":"dom", "age":29, "native":"bangalore"},
            2: {"name":"Ravi", "age":30, "native":"chennai"}
        }
        
 let index = Object.values(person).findIndex(v =>  v.age===30);

 let key;

 for(let v in person){
    if(person[v].age===29){
        key=v;
    }
 }

 console.log(key)


