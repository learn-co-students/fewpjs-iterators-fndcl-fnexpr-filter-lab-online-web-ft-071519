const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObject = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

const findMatching = (drivers, name) => {
    const matchingDrivers = drivers.filter(function(driver) {
        return driver.toUpperCase() === name.toUpperCase();
    })
    console.log(matchingDrivers)
    return matchingDrivers
}

const fuzzyMatch = (drivers, string) => {
    const filteredDrivers = drivers.filter(function(driver) {
        debugger
        return driver.toLowerCase().substring(0, 2) === string.toLowerCase().substring(0, 2)
    })
    return filteredDrivers
}

const matchName = (drivers, string) => {
    const filteredDrivers = drivers.filter(function(driver) {
        return driver.name.toLowerCase() === string.toLowerCase()
    })
    return filteredDrivers
}