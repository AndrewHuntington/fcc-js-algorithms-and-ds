// FCC JS Challenge: Cash Register

// OBJECTIVE:
// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second argument
// (cash), and cash-in-drawer (cid) as the third argument.

// The checkCashRegister() function should always return an object with a
// status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less
// than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value
// for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in
// coins and bills, sorted in highest to lowest order, as the value of the
// change key.

// TODO: All tests pass on FCC
function checkCashRegister(price, cash, cid) {
  const cashDue = cash - price; // 0.5
  // console.log(cashDue); //TODO: REMOVE
  let totalCID = 0;
  const result = {
    status: "",
    change: [],
  };

  // Find the total cid
  // TODO: make function
  for (const unit of cid) {
    totalCID += unit[1];
  }
  totalCID = totalCID;
  // console.log(totalCID); //TODO: REMOVE

  if (cashDue > totalCID) {
    result.status = "INSUFFICIENT_FUNDS";
  } else if (cashDue === totalCID) {
    result.status = "CLOSED";
    result.change = cid;
  } else {
    result.status = "OPEN";
    // result.change =
  }

  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // {status: "INSUFFICIENT_FUNDS", change: []}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
