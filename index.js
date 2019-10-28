// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match

const findMatching = function(drivers, s) {
  let match = drivers.filter( n => {
    return n.toLowerCase() === s.toLowerCase()
  });
  return match
};
// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
const fuzzyMatch = function(drivers, s) {
  let match = drivers.filter( n => {
    return n.toLowerCase().slice(0, s.length) === s.toLowerCase()
  });
  return match
};

// matchName()
// 7) accesses the data structure to check if name matches
const matchName = function(drivers, s) {
  let match = drivers.filter( n => {
    return n['name'].toLowerCase() === s.toLowerCase()
  });
  return match
};
