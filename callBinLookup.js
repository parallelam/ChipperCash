const binlist = require('binlookup')();
const checkCountry = require('./checkCountry');
/**
 * Function to accept array of parsed BIN ids and call each lookup accordingly, with a return array of resolved Promises.
 * @param {*} element - Accepts array of BIN ids.
 * @return Array - Returns array of resolved promises.
 */
module.exports = async function (element) {
  let binlistResponses = [];
  let resolvedResponses;
  try {
    for (let i = 0; i < 5; i++) {
      binlistResponses.push(
        await new Promise((resolve, reject) => {
          return binlist(element[i], function (err, data) {
            let a2;
            if (err) {
              console.log(`Error with callBinLookup function: ${err}`);
              reject(err);
            } else {
              a2 = checkCountry(data['country']['name']);
              a2 === true ? resolve(data) : console.log(`Unsupported Country: ${data['country']['name']}`);
            }
          });
        })
      );
    }
  } catch (e) {
    console.error(`Error with callBinLookup function: ${e}`);
  } finally {
    console.log(`Executed callBinLookup function 'finally' block.`);
  }
  resolvedResponses = Promise.all(binlistResponses);
  return resolvedResponses;
};
