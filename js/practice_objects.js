const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs : function (p) {
        const {age} = p;
        const {languages} = p.skills;
        let str = `Мне ${age} и я владею языками: `;
        for(let i in languages){
            str+=`${languages[i].toUpperCase()} `;
        }
        return str;

    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); 

// function showExperience(p) {
//     const {exp} = p.skills;
//     return exp;  
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let str='';
//     for(let i in programmingLangs){
//         str+=`Язык ${i} изучен на ${programmingLangs[i]} `;
//     }
//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));