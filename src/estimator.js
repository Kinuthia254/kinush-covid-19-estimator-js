const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

function doubleSet(timeToElapse) {
  return Math.ceil(2 ** (timeToElapse / 3));
}

/*function weeks(timeToElapse) {
  const week = Math.floor(timeToElapse / 7);
  return Math.ceil((3 ** 3) * week);
}*/


const conversionFunc = (periodType) => {
  let days;

  switch(periodType){
    case 'weeks':
      days = data.timeToElapse *7;
      break;

    case 'months':
      days = data.timeToElapse * 30
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
  //const powerWeek = weeks(data.timeToElapse);
  //powerDays
  //powerWeek

  impact.infectionsByRequestedTime = impact.currentlyInfected * powerDays;
  
  //impact.infectionsByRequestedTime = impact.currentlyInfected * powerWeek;

  

  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerDays;

  conversionFunc(data.periodType);
  // 10129244160 severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * powerWeek;

  return output;
};
 const result = covid19ImpactEstimator(data);
 result
export default covid19ImpactEstimator;
