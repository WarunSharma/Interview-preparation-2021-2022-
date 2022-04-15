
var sol=new Array();

function solution(people,nSkills,cp,oneSol,skills){
    
    if(cp==people.length){
        if(skills==((1<<nSkills)-1)){
            if(sol.length>oneSol.length || sol.length==0){
                sol=[...oneSol];
            }
        }
        return;
    }

    solution(people,nSkills,cp+1,oneSol,skills);
    oneSol.push(cp);
    solution(people,nSkills,cp+1,oneSol,skills|people[cp]);
    oneSol.pop();
}

function wrapper(skills,peopleSkills){
    let skillMap=new Map();
    let people=[];
    for(let i=0;i<skills.length;++i){
        skillMap.set(skills[i],i);
    }

    for(let i=0;i<peopleSkills.length;++i){
        let temp=0;
        for(let j=0;j<peopleSkills[i].length;++j){
            let val=skillMap.get(peopleSkills[i][j]);
            temp=temp|(1<<val);
        }
        people[i]=temp;
    }

    solution(people,skills.length,0,[],0);

}

skills=['java','nodejs','reactjs'];
peopleSkills=[['java'],['nodejs'],['nodejs','reactjs']];

wrapper(skills,peopleSkills);
console.log(sol);