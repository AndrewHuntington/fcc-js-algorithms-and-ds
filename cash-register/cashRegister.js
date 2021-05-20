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

// TODO: Solve tests 3 & 5
function totalInRegister(cid) {
  let total = 0;
  for (const unit of cid) {
    total += unit[1];
  }

  return total;
}

function makeChange(cashDue, cid, { change }) {
  const drawer = [...cid].reverse();
  const originalCashDue = cashDue;
  const drawerTotal = totalInRegister(drawer);
  const currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  // cashDue = 96.74
  for (const index in currency) {
    console.log(cashDue);
    console.log(currency[index][1]);
    console.log(drawer[index][1] > 0);

    const amountIsLargerThanDenomination = cashDue > currency[index][1];
    const haveDenomination = drawer[index][1] > 0;

    if (amountIsLargerThanDenomination && haveDenomination) {
      let currentAmountInChange = 0;

      while (cashDue > 0 && drawer[index][1] > 0) {
        console.log(cashDue > 0);
        console.log(drawer[index][1] > 0);

        console.log(cashDue);

        console.log(currency[index][1]);
        if (cashDue >= currency[index][1]) {
          console.log(drawer[index][1]);
          drawer[index][1] = +(drawer[index][1] - currency[index][1]).toFixed(
            2
          );
          cashDue = +(cashDue - currency[index][1]).toFixed(2);
          console.log(drawer[index][1]);
        } else {
          break;
        }

        console.log(drawer[index]);

        currentAmountInChange = +(
          currentAmountInChange + currency[index][1]
        ).toFixed(2);

        console.log(cashDue);
        console.log(currentAmountInChange);
      }
      change.push([currency[index][0], currentAmountInChange]);

      console.log(change);
    }
  }

  console.log(totalInRegister(change));
  console.log(originalCashDue);

  if (+totalInRegister(change).toFixed(2) === originalCashDue) {
    return change;
  } else {
    return [];
  }
}

function checkCashRegister(price, cash, cid) {
  const cashDue = cash - price;
  console.log(cashDue);
  const totalCID = +totalInRegister(cid).toFixed(2);
  console.log(totalCID);
  const result = {
    status: "",
    change: [],
  };

  if (cashDue === totalCID) {
    result.status = "CLOSED";
    result.change = cid;

    return result;
  }

  const totalChange = makeChange(cashDue, cid, result);

  if (cashDue > totalCID || totalChange.length === 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = totalChange;
  } else {
    result.status = "OPEN";
    result.change = totalChange;
  }

  return result;
}

// TESTS

// // Failing
console.log(
  checkCashRegister(3.26, 100, [
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
); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// // // Passing
// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); // {status: "OPEN", change: [["QUARTER", 0.5]]}

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

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // {status: "INSUFFICIENT_FUNDS", change: []}
