
class Edge{
    constructor(v1,v2,wt){
        this.v1=v1;
        this.v2=v2;
        this.wt=wt;
    }
}

function createGraph(){
     let graph=new Array(7);

     for(let i=0;i<7;++i){
         graph[i]=new Array();
     }

     graph[0].push(new Edge(0,1,10));
     graph[0].push(new Edge(0,3,40));

     graph[1].push(new Edge(1,0,10));
     graph[1].push(new Edge(1,2,40));

     graph[2].push(new Edge(2,1,10));
     graph[2].push(new Edge(2,3,10));

     graph[3].push(new Edge(3,2,10));
     graph[3].push(new Edge(3,0,10));
     graph[3].push(new Edge(3,4,2));

     graph[4].push(new Edge(4,3,2));
     graph[4].push(new Edge(4,5,3));
     graph[4].push(new Edge(4,6,8));

     graph[5].push(new Edge(5,4,3));
     graph[5].push(new Edge(5,6,3));

     graph[6].push(new Edge(6,4,8));
     graph[6].push(new Edge(6,5,3));

     return graph;
}

function displayGraph(result,visited,src,dest,psf){
    if(src==dest){
        console.log(psf);
        return true;
    }
    let edges=result[src];

    visited[src]=true;
    
    for(let i=0;i<edges.length;++i){
        if(visited[edges[i].v2]==false){
            displayGraph(result,visited,edges[i].v2,dest,psf+edges[i].v2);
        }
    }
}

function hasPath(result,visited,src,dest){
    if(src==dest){
        return true;
    }

    visited[src]=true;

    let edges=result[src];

    for(let i=0;i<edges.length;++i){
        let edge=edges[i];
        if(visited[edge.v2]==false){
            let pathExists=hasPath(result,visited,edge.v2,dest);
            if(pathExists){
                return true;
            }
        }
    }

    return false;
}

let result=createGraph();
let visited=new Array(result.length);
for(let i=0;i<visited.length;++i){
    visited[i]=false;
}
//displayGraph(result,visited,0,6,"0");

console.log(hasPath(result,visited,0,6));