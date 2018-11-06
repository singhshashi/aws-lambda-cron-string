const getAwsLambdaCronString = require('./index');

test('throws an error if passed paramter cannot be converted to date', () => {
    expect(getAwsLambdaCronString).toThrow();
    expect(getAwsLambdaCronString).toThrow(TypeError);
});

test('returns aws cron string which has 6 parts', () => {
    const dateTime = new Date();
    const result = getAwsLambdaCronString(dateTime);
    expect(typeof result).toBe("string");
    expect(result.split(' ')).toHaveLength(6);
});

test('return aws cron string for UTC values', () => {
    const dateTime = new Date();
    const result = getAwsLambdaCronString(dateTime);
    expect(result).toContain(dateTime.getUTCMinutes());
    expect(result).toContain(dateTime.getUTCHours());
    expect(result).toContain(dateTime.getUTCDate());
    expect(result).toContain(dateTime.getUTCMonth());
    expect(result).toContain(dateTime.getUTCDay() + 1);
    expect(result).toContain(dateTime.getUTCFullYear());
})