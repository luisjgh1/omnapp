/**
 *  Table of data
 *  ____________________________________________________________________________________________________________________
 *  | Vehicle    | kgLimit    | base Rate (3KM) | Extra Km | Base Safe | Extra base safe | Mins | Extra minute | Extra stop |
    | MOTOS      | 25    | $5.800          | $900     | $500.000  | 0,019%          | 15   | $170         | $3.000     |
    | CARRY      | 800   | $12.000         | $2.000   | $500.000  | 0,019%          | 15   | $300         | $4.000     |
    | LUV        | 1500  | $16.000         | $4.000   | $500.000  | 0,019%          | 15   | $400         | $4.000     |
    | NHR        | 2500  | $30.000         | $5.000   | $500.000  | 0,019%          | 15   | $600         | $5.000     |
    | TURBOS     | 4500  | $40.000         | $8.500   | $500.000  | 0,019%          | 15   | $800         | $20.000    |
    | SENCILLO   | 8000  | $80.000         | $10.000  | $500.000  | 0,029%          | 15   | $1.200       | $40.000    |
    | PATINETA   | 19000 | $200.000        | $20.000  | $500.000  | 0,029%          | 15   | $2.500       | $80.000    |
    | TRACTOMULA | 34000 | $250.000        | $23.000  | $500.000  | 0,029%          | 15   | $2.500       | $100.000   |
    --------------------------------------------------------------------------------------------------------------------
 */

const configurationPrices = [
  {
    kgLimit: 25,
    baseRate: 5800,
    extraKmPrice: 900,
    extraMinutePrice: 170,
    extraStopPrice: 3000
  },
  {
    kgLimit: 800,
    baseRate: 12000,
    extraKmPrice: 2000,
    extraMinutePrice: 300,
    extraStopPrice: 4000
  },
  {
    kgLimit: 1500,
    baseRate: 16000,
    extraKmPrice: 4000,
    extraMinutePrice: 400,
    extraStopPrice: 4000
  },
  {
    kgLimit: 2500,
    baseRate: 30000,
    extraKmPrice: 5000,
    extraMinutePrice: 600,
    extraStopPrice: 5000
  },
  {
    kgLimit: 4500,
    baseRate: 40000,
    extraKmPrice: 8500,
    extraMinutePrice: 800,
    extraStopPrice: 20000
  },
  {
    kgLimit: 8000,
    baseRate: 80000,
    extraKmPrice: 10000,
    extraSafePercentage: 0.029,
    extraMinutePrice: 1200,
    extraStopPrice: 40000
  },
  {
    kgLimit: 19000,
    baseRate: 200000,
    extraKmPrice: 20000,
    extraSafePercentage: 0.029,
    extraMinutePrice: 2500,
    extraStopPrice: 80000
  },
  {
    kgLimit: 34000,
    baseRate: 250000,
    extraKmPrice: 23000,
    extraSafePercentage: 0.029,
    extraMinutePrice: 2500,
    extraStopPrice: 100000
  }
]

// Assign default values.

export default configurationPrices.map(data => ({
  baseSafe: 500000,
  extraSafePercentage: 0.019,
  kmFree: 3,
  mins: 15,
  ...data
}))
