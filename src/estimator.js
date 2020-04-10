function doubleSet(timeToElapse) {
  return Math.ceil(2 ** (timeToElapse / 3));
}

const conversionFunc = (periodType) => {
  let days;

  switch (periodType) {
    case 'weeks':
      days = data.timeToElapse * 7;
      break;

    case 'months':
      days = data.timeToElapse * 30;
      break;

    default:
      days = data.timeToElapse;
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

  const powerDays = doubleSet(data.timeToElapse);

  impact.infectionsByRequestedTime = impact.currentlyInfected * powerDays;

  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerDays;

  conversionFunc(data.periodType);

  return output;
};

export default covid19ImpactEstimator;
