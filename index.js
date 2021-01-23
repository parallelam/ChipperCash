const assetRead = require('./assetRead');
const callBinLookup = require('./callBinLookup');
const parseData = require('./parseData');
const sortCreditDebit = require('./sortCreditDebit');

/**
 * BIN lookups are rate limited to 10 per minute, so current functionality stops HTTP calls after 5 requests.
 */
var businessLogicHandler = async function () {
  let businessLogicAssetRead;
  let businessLogicParseData;
  let businessLogicCallBinLookup;
  let businessLogicSortCreditDebit;
  try {
    businessLogicAssetRead = assetRead();
    businessLogicParseData = parseData(businessLogicAssetRead);
    businessLogicCallBinLookup = await callBinLookup(businessLogicParseData);
    businessLogicSortCreditDebit = sortCreditDebit(businessLogicCallBinLookup);
    console.log(`sortCreditDebit return: ${JSON.stringify(businessLogicSortCreditDebit, null, 2)}`);
  } catch (e) {
    console.error(e);
  }
};
businessLogicHandler();
