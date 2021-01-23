/**
 * Function to accept array of BIN lookup responses and sort those responses by card type into a single object with keys specified by type.
 * @param {*} dataObject - Accepts BIN lookup response array.
 * @return Object - Returns object with BIN responses sorted.
 */
module.exports = function (dataObject) {
  let credit = [];
  let debit = [];
  let errant = [];
  let creditDebitObject = {};
  try {
    for (let i = 0; i < dataObject.length; i++) {
      if (dataObject[i]['type'].toLowerCase() === 'credit') {
        credit.push(dataObject[i]);
      }
      if (dataObject[i]['type'].toLowerCase() === 'debit') {
        debit.push(dataObject[i]);
      }
      if (!dataObject[i]['type']) {
        errant.push(dataObject[i]);
      }
    }
    creditDebitObject['CREDIT'] = credit;
    creditDebitObject['DEBIT'] = debit;
    creditDebitObject['ERRANT'] = errant;
  } catch (error) {
    console.error(`Error with sortCreditDebit function: ${JSON.stringify(error, null, 2)}`);
  } finally {
    console.log(`Executed sortCreditDebit function 'finally' block.`);
  }
  return creditDebitObject;
};
