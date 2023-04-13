// Code your solution here
function findMatching (array, driverName) {
        return array.filter(array => array.toLowerCase() === driverName.toLowerCase()) 
}
console.log(findMatching(drivers, 'sally'))

function fuzzyMatch(array, driverName) {
    return array.filter(array => array.charAt(0) === driverName.charAt(0))
}
console.log(fuzzyMatch(drivers, 'Bane'))

function matchName(array, driverName) {
    return array.filter(array => array.name === driverName)
}
console.log(matchName(drivers, 'Sammy'))