export class AlgorithmMaker {
  calculateomelessness(
    income: number,
    expenses: number,
    is_renter: boolean,
    credit_score: number,
    net_worth: number,
    is_employed: boolean,
    num_jobs: number,
    job_duration: number
  ): number {
    let risk_factor = 0;

    // Check if expenses exceed income
    if (expenses > income) {
      risk_factor += (expenses - income) / 1000; // scale risk factor
    }

    // Consider higher risk for renters
    if (is_renter) {
      risk_factor += 5;
    }

    // Lower credit score may increase risk
    if (credit_score < 650) {
      risk_factor += (650 - credit_score) / 100;
    }

    // Lower net worth may increase risk
    if (net_worth < 50000) {
      risk_factor += (50000 - net_worth) / 10000;
    }

    // Being unemployed may increase risk
    if (!is_employed) {
      risk_factor += 10;
    }

    // Having multiple jobs may decrease risk
    risk_factor -= num_jobs;

    // Short job duration may increase risk
    if (job_duration < 12) {
      risk_factor += 12 - job_duration;
    }

    console.log(risk_factor, 'risk factor');
    // Generate a random number
    const random_number = Math.floor(Math.random() * 101);

    // Nights of homelessness is a function of the risk_factor and the randomness
    const nights_homeless = Math.floor((risk_factor / 100) * random_number);

    return nights_homeless;
  }
}
