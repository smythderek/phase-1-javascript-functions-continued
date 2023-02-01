// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
        return 'This Saturday, I want to roller-skate!'
    }
    else {
        return `This Saturday, I want to ${activity}!`
    }
}

/*
function mondayWork(activity) {
    if (activity !== undefined) {
        return `This Monday, I will ${activity}.`
    }
    else {
        return 'This Monday, I will go to the office.'
    }
}
*/

const mondayWork = function(activity) {
    if (activity !== undefined) {
        return `This Monday, I will ${activity}.`
    }
    else {
        return 'This Monday, I will go to the office.'
    }
}

function wrapAdjective(flair = '*') {
    return function(word = 'special') {
        return `You are ${flair}${word}${flair}!`
    }
}