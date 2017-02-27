/**
 * Created by jonlazarini on 27/02/17.
 */

// Epoch date returned from API, needs to be converted to a ms timestamp for processing
const convertTimeUnix = (unixDate) => ( new Date(unixDate * 1000 ) )


export const getDayFromUnixTimeStamp = (timeStamp) => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    // retrieves the day from timeStamp: [0, 1, 2, ...]
    return weekday[convertTimeUnix(timeStamp).getDay()]
}
