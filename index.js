// Code your solution here
function findMatching(driversArray, driversString){
    let match = driversArray.filter(name => {
        return name.toUpperCase() === driversString.toUpperCase()
    })
    return match
}

function fuzzyMatch(driversArray, driversString){
    let match = driversArray.filter(name => {
        return name.slice(0,2) === driversString.slice(0,2)
    })

    return match
}

function matchName(driversArray, driversString){
    let match = driversArray.filter(object => {
        return object.name === driversString
    })

    return match
}