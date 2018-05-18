/**
 * quoteShippingGen - Calculate the price of a delivery according his weight
 *
 * @param {Array} configurationPrices List of constants and prices
 * @param {Number} kg Weight of the package in kg
 * @param {Number} km Total distance
 * @param {Number} safe Insurance of the package
 * @param {Number} extraStops Number of extra stops
 *
 * @return {Number} Total prices of the service
 */

// This function not allow negative numbers.
const limitToZero = n => n < 0 ? 0 : n

const quoteShippingGen = configurationPrices => ({
  kg,
  km = 3,
  safe = 500000,
  extraStops = 0
}) => {
  // Getting the data that correspond to the weight
  const data = configurationPrices.find(data => kg <= data.kgLimit)

  // Difference between Base safe and safe
  const diffSafe = limitToZero(safe - data.baseSafe)
  const priceExtraPolicy = diffSafe * data.extraSafePercentage // SubTotal

  // Difference between km (entered by the user) and limit km or base km
  const diffKm = limitToZero(km - data.kmFree)
  const priceDistance = diffKm * data.extraKmPrice // SubTotal

  const total =
    data.baseRate +
    priceDistance +
    priceExtraPolicy +
    (extraStops ? extraStops * data.extraStopPrice : 0)

  return total
}

export default quoteShippingGen
