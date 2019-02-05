// Code your solution in this file
function findMatching(drivers, match){
  const newDrivers
  for(const driver of drivers){
    if (driver.toUpperCase === match.toUpperCase) {
      newDrivers.push(driver)
    }
  }
  return newDrivers
}
