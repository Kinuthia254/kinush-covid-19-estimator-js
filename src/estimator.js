function doubleSet(timeToElapse) {
  return Math.ceil(2 ** (timeToElapse / 3));
}

const convertToDays = (periodType, timeToElapse) => {
  let days;

  switch (periodType) {
    case 'weeks':
      days = timeToElapse * 7;
      break;

    case 'months':
      days = timeToElapse * 30;
      break;

    default:
      days = timeToElapse;
  }
  return days;
};

const covid19ImpactEstimator = (data) => {
  const output = {};

  output.data = data;

  const impact = {};

  output.impact = impact;

  const severeImpact = {};

  output.severeImpact = severeImpact;

  impact.currentlyInfected = data.reportedCases * 10;

  severeImpact.currentlyInfected = data.reportedCases * 50;

  const days = convertToDays(data.periodType, data.timeToElapse);

  const powerDays = doubleSet(days);

  impact.infectionsByRequestedTime = impact.currentlyInfected * powerDays;

  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerDays;

  return output;
};

export default covid19ImpactEstimator;
