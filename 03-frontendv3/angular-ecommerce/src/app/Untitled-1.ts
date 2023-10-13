import { now } from "jquery";
import { isSameWeek } from 'date-fns'

// const getWeek = (date) => {
//     const janFirst = new Date(date.getFullYear(), 0, 1);
//     // Source: https://stackoverflow.com/a/27125580/3307678
//     return Math.ceil((((date.getTime() - janFirst.getTime()) / 86400000) + janFirst.getDay() + 1) / 7);
// }

// const isSameWeek = (dateA, dateB) => {
//     return getWeek(dateA) === getWeek(dateB);
// }


function isAfter(date1, date2) {
    return date1 > date2;
  }

function calculateWeeksRemaining(spotDateList: Array<Date>) {
    var nowDate = new Date(); 
    var counter = 0;
    var eligibleSpotDates = new Array();
    spotDateList.forEach(date => {
        if (isAfter(date, nowDate)) {
            eligibleSpotDates.push(date)
        }
    })

    if (eligibleSpotDates.length > 0) {
        for (var i = 0; i < eligibleSpotDates.length; i++) {
            var compareDate = eligibleSpotDates[i];
            for (var j = i + 1; j < eligibleSpotDates.length; j++) {
                var date = eligibleSpotDates[j];
                if (isSameWeek(compareDate, date, {
                    weekStartsOn: 1
                })) {
                    counter++;
                }
            }
        }
    }

    return (eligibleSpotDates.length - counter)

}


const dateA = new Date('2022-12-6')
const dateB = new Date('2022-12-16')
const dateC = new Date('2022-12-13')

var testArray = new Array();
testArray.push(dateA)
testArray.push(dateB)
testArray.push(dateC)

console.log(testArray)

const result = isSameWeek(dateA, dateB, {
    weekStartsOn: 1
  })

// console.log(result)


calculateWeeksRemaining(testArray)

