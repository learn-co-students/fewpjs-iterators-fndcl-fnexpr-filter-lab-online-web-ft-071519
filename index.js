function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.substring(0, string.length) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver["name"] === string
    })
}