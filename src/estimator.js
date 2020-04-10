
function doubleSet(timeToElapse) {
  return Math.ceil(2 ** (timeToElapse / 3));
}

function weeks(timeToElapse){

  
  let week = Math.floor(timeToElapse / 7);
  return Math.ceil((3 ** 3) * week )
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

  const powerDays = doubleSet(data.timeToElapse);
  const powerWeek = (weeks(data.timeToElapse));

  
  impact.infectionsByRequestedTime = impact.currentlyInfected * powerDays;
  impact.infectionsByRequestedTime = impact.currentlyInfected * powerWeek;

  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerDays;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerWeek;

  return output;
};

export default covid19ImpactEstimator;
