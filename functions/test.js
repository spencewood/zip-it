const endOfHour = require("date-fns/endOfHour");

export const handler = () => {
  const body = `The end of the hour is ${endOfHour(new Date())}`;

  return {
    body,
    statusCode: 200,
  };
};
