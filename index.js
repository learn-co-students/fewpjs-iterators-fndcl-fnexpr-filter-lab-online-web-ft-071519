// Code your solution here
function findMatching(drivers, goal) {
    return drivers.filter(match => 
        match.toLowerCase() === goal.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(match =>
        match.toLowerCase().indexOf(letter.toLowerCase()) === 0 
    )
}

function matchName(drivers, name) {
    return drivers.filter(match =>
        match.name === name)
}