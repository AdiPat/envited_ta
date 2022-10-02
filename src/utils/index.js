import moment from "moment";

const EVENT_IMAGE_HEIGHT = 400;

const formatStartDate = (startDate) => {
  const momentObj = moment(startDate);
  return momentObj.format("DD MMMM hA");
};

const formatEndDate = (endDate) => {
  const momentObj = moment(endDate);
  return momentObj.format("DD MMMM hA UTC Z");
};

export { formatEndDate, formatStartDate, EVENT_IMAGE_HEIGHT };
