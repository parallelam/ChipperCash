const Papa = require('papaparse');
/**
 * Function to accept read data from file system and parse into usable logic.
 * @param {*} unparsedData - Accepts file system read data to be parsed.
 * @return Array - Returns array of parsed data.
 */
module.exports = function (unparsedData) {
  let a1;
  try {
    a1 = Papa.parse(unparsedData, {
      complete: function (results) {
        return results;
      },
    });
  } catch (error) {
    console.error(`Error with parseData function: ${error}`);
  } finally {
    console.log(`Executed parseData function 'finally' block.`);
  }
  return a1['data'][0];
};
