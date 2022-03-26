
function findItenary(arr){
    let mapJourney=new Map();

    for(let cities of arr){
        let city=cities.split(" ");
        let source=city[0];
        let destination=city[1];

        mapJourney.set(source,destination);
    }

    let mapSource=new Map();
    for(let cities of arr){
        let city=cities.split(" ");
        let source=city[0];
        let destination=city[1];

        if(!mapSource.has(source)){
            mapSource.set(source,true);
        }

        mapSource.set(destination,false);
    }

    let initialSource="";

    for(let [key,value] of mapSource.entries()){
        if(value==true){
            initialSource=key;
        }
    }

    process.stdout.write(initialSource);
    destination=initialSource
    while(mapJourney.has(destination)){
        destination=mapJourney.get(destination);
        process.stdout.write("->"+destination);
    }
    
}


findItenary(['Chennai Banglore' ,'Bombay Delhi' ,'Goa Chennai' ,'Delhi Goa' ]);