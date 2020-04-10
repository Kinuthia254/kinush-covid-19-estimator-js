function doubleSet(timeToElapse) {
  return Math.ceil(2 ** (timeToElapse / 3));
}

const covid19ImpactEstimator = (data) => {
  const output = {};

  output.data = data;

  const impact = {};

  output.impact = impact;

  const severeImpact = {};

  output.severeImpact = severeImpact;

  impact.currentlyInfected = data.reportedCases * 10;

  severeImpact.currentlyInfected = data.reportedCases * 50;

  const power = doubleSet(data.timeToElapse);
  impact.infectionsByRequestedTime = impact.currentlyInfected * power;

  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * power;

  return output;
};

export default covid19ImpactEstimator;
