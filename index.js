//cron string format: Minutes Hours Day-of-month Month Day-of-week Year


function isValidDate(d) {
    const result = d instanceof Date && !isNaN(d.getTime());    
    return result;
}


function getAwsLambdaCronString(dateTime) {
    if(!isValidDate(dateTime)) {
        throw new TypeError('Passed parameter is not a valid date object');
    }
    let cronString = "";
    cronString = `${dateTime.getUTCMinutes()} ${dateTime.getUTCHours()} ${dateTime.getUTCDate()} ${dateTime.getUTCMonth()} ${dateTime.getUTCDay() + 1} ${dateTime.getUTCFullYear()}`
    return cronString;
}

module.exports = getAwsLambdaCronString