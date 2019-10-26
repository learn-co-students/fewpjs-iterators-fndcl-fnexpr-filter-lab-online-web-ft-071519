function findMatching(array, string) {
  let drivers = array.filter(name => {
      return name.toLowerCase() === string.toLowerCase()
  })
  return drivers
}

function fuzzyMatch(array, string) {
  let drivers = array.filter(name => {
      return name[0] === string[0]
  })
  return drivers
}

function matchName(array, string) {
  let drivers = array.filter(driver => {
      return driver["name"] === string
  })
  return drivers
}