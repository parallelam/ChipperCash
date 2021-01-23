const { readFileSync } = require('fs');
/**
 * Function to synchronously read data from a local asset by Node's file system.
 * @return Object - Returns data from file system read of local asset.
 */
module.exports = function () {
  const bins = './bins.csv';
  let unparsedData;
  try {
    unparsedData = readFileSync(bins, 'utf-8');
  } catch (e) {
    console.error(`Error with assetRead function: ${e}`);
  } finally {
    console.log(`Executed assetRead function 'finally' block.`);
  }
  //console.log(`assetRead function results: ${unparsedData}`);
  return unparsedData;
};
