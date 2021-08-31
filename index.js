// Your code here
function saturdayFun(string= "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function (activity= "go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(style= "*"){
    return function(adjective ="special"){
        return `You are ${style}${adjective}${style}!`
    }
}
  
const Calculator = {
    add: function(a,b) {
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: (a,b) => {
        return a*b
    },
    divide: (a,b) => {
        return a/b
    }
}

function actionApplyer(start, array){
    if(array=== []){
        return start
    } else {
        for (let i= 0; i< array.length; i++){
            start = array[i](start)
        }
    }
return start
}