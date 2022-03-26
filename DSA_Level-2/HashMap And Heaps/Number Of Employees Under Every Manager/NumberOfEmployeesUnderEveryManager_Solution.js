
function getEmployeesCount(root,map,res){
    
    if(map.has(root)==false){
        res.set(root,0);
        return 1;
    }
        
    let sz=0;
    for(let emp of map.get(root)){
        sz+=getEmployeesCount(emp,map,res);
    }

    res.set(root,sz);
    return sz+1;
}

function NumberOfEmployees(arr){
    
    let map=new Map();

    let root="";
    for(let str of arr){
        let s=str.split(' ');
        let manager=s[1];
        let employee=s[0];
        if(s[0]==s[1]){
            root=s[0];
        }
        else{
            let employees=[];
            if(map.has(manager)){
                employees=map.get(manager);
            }
            employees.push(employee);
            map.set(manager,employees);
        }
    }

    // for(let [key,value] of map.entries()){
    //     console.log(key+":"+value);
    // }

    let res =new Map();
    getEmployeesCount(root,map,res);
    console.log(res);
}

NumberOfEmployees(['A C','B C','C F','D E','E F','F F']);