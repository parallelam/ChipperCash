/**
 * Function to accept string value for Country Name, and check if identified country is currently supported, returning true for supported, and false for not supported.
 * @param {*} countryName - Accepts string representation of Country Name.
 * @return boolean - Returns true/false value.
 */
module.exports = function (countryName) {
  const supportedCountries = ['Ghana', 'South Africa', 'Nigeria', 'Uganda', 'Rwanda', 'Kenya', 'Tanzania'];
  let a1;
  try {
    if (supportedCountries.includes(countryName)) {
      a1 = true;
    } else {
      a1 = false;
    }
  } catch (error) {
    console.error(`Error with checkCountry function: ${error}`);
  } finally {
    console.log(`Executed checkCountry function 'finally' block.`);
  }
  return a1;
};
