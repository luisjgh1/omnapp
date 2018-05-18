/**
 * @jest-environment node
 */

import quoteShippingGen from '../utils/quoteShippingGen'
import configurationPrices from '../config/configurationPrices'

const quoteShipping = quoteShippingGen(configurationPrices)

test('Kg', () => {
  /**
   * Example 1.
   *
   * Weight: 1.320 kg < 1.500 kg
   *
   * Base safe: 0
   * Base safe (default): 500.000
   * diff Base safe: 500.000
   * 
   * Distance: 0 km
   * Base Distance (default): 3 km
   * Diff Distance: 3 km
   *
   * Base rate: 16.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 0
   * Total extra Km: 0
   * Total extra stops: 0
   *
   * Total: 16.000 (Base rate)
  */
  expect(quoteShipping({ kg: 1320 })).toBe(16000)

  /**
   * Example 2.
   *
   * Weight: 7.500 kg < 8.000 kg
   *
   * Base safe: 0
   * Base safe (default): 500.000
   * diff Base safe: 500.000
   *
   * Distance: 0 km
   * Base Distance (default): 3 km
   * Diff Distance: 3 km
   *
   * Base rate: 80.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 0
   * Total extra Km: 0
   * Total extra stops: 0
   *
   * Total: 80.000 (Base rate)
  */
  expect(quoteShipping({ kg: 7500 })).toBe(80000)
})

test('Kg and km', () => {
  /**
   * Example 3.
   *
   * Weight: 30 kg < 800 kg
   *
   * Base safe: 0
   * Base safe (default): 500.000
   * diff Base safe: 500.000
   *
   * Distance: 15 km
   * Base Distance (default): 3 km
   * Diff Distance (Extra km): 12 km
   * Price Extra km: 2.000
   *
   * Base rate: 12.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 0
   * Total extra Km: 12 * 2.000 = 24.000
   * Total extra stops: 0
   *
   * Total: 12.000 (base rate) + 24.000 (Total extra km) = 36.000
  */
  expect(quoteShipping({ kg: 30, km: 15 })).toBe(36000)

  /**
   * Example 4.
   *
   * Weight: 31.000 kg < 34.000 kg
   *
   * Base safe: 0
   * Base safe (default): 500.000
   * diff Base safe: 500.000
   *
   * Distance: 20 km
   * Base Distance (default): 3 km
   * Diff Distance (Extra km): 17 km
   * Price Extra Km: 23.000
   *
   * Base rate: 250.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 0
   * Total extra Km: 17 * 23.000 = 391.000
   * Total extra stops: 0
   *
   * Total: 250.000 + 391.000 = 641.000
  */
  expect(quoteShipping({ kg: 31000, km: 20 })).toBe(641000)
})

test('Kg, km, and safe', () => {
  /**
   * Example 5.
   *
   * Weight: 5 kg < 25 kg
   *
   * Base safe: 650.000
   * Base safe (default): 500.000
   * diff Base safe: 150.000
   * Price Extra safe: 1.9%
   *
   * Distance: 13 km
   * Base Distance (default): 3 km
   * Diff Distance: 10 km
   * Price extra km: 900
   *
   * Base rate: 5.800
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 150.000 * 0.019 = 2.850
   * Total extra Km: 10 * 900 = 9.000
   * Total extra stops: 0
   *
   * Total: 5.800 + 2.850 + 9.000 = 17.650
  */
  expect(quoteShipping({ kg: 5, km: 13, safe: 650000 })).toBe(17650)

  /**
   * Example 6.
   *
   * Weight: 4.300 kg < 4.500 kg
   *
   * Base safe: 950.000
   * Base safe (default): 500.000
   * diff Base safe: 450.000
   * Price extra safe: 1.9%
   *
   * Distance: 50 km
   * Base Distance (default): 3 km
   * Diff Distance: 47 km
   * Price Extra km: 8.500
   *
   * Base rate: 40.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 450.000 * 0.019 = 8.550
   * Total extra Km: 47 * 8.500 = 399.500
   * Total extra stops: 0
   *
   * Total: 40.000 + 8.550 + 399.500 = 448.050
  */
  expect(quoteShipping({ kg: 4300, km: 50, safe: 950000 })).toBe(448050)
})

test('Kg, km, safe and stops', () => {
  /**
   * Example 7.
   *
   * Weight: 750 kg < 800 kg
   *
   * Base safe: 650.000
   * Base safe (default): 500.000
   * diff Base safe: 150.000
   * Price Extra base: 1.9%
   *
   * Distance: 16 km
   * Base Distance (default): 3 km
   * Diff Distance: 13 km
   * Price Extra km: 2.000
   *
   * Extra Stops: 1
   * Price Extra stop: 4.000
   *
   * Base rate: 12.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 150.000 * 0.019 = 2.850
   * Total extra Km: 13 * 2.000 = 26.000
   * Total extra stops: 1 * 4.000 = 4.000
   *
   * Total: 12.000 + 2.850 + 26.000 + 4.000 = 44.850
  */
  expect(quoteShipping({ kg: 750, km: 16, safe: 650000, extraStops: 1 })).toBe(44850)

  /**
   * Example 8.
   *
   * Weight: 19.000 kg = 19.000 kg
   *
   * Base safe: 850.000
   * Base safe (default): 500.000
   * diff Base safe: 350.000
   * Price Extra Safe: 2.9%
   *
   * Distance: 31 km
   * Base Distance (default): 3 km
   * Diff Distance: 28 km
   * Price Extra Km: 20.000
   *
   * Extra stops: 3
   * Price Extra stop: 80.000
   *
   * Base rate: 200.000
   *
   * Sub totals
   *
   * Total extra policy (extra base safe): 350.000 * 0.029 = 10.150
   * Total extra Km: 28 * 20.000 = 560.000
   * Total extra stops: 3 * 80.000 = 240.000
   *
   * Total: 200.000 + 10.150 + 560.000 + 240.000 = 1.010.150
  */
  expect(quoteShipping({ kg: 19000, km: 31, safe: 850000, extraStops: 3 })).toBe(1010150)
})
