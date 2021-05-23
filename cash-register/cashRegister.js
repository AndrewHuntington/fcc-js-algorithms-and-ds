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

// All tests pass on FCC
function totalAmount(currency) {
  let total = 0;
  for (const unit of currency) {
    total += unit[1];
  }

  return total;
}

function makeChange(cashDue, cid, { change }) {
  const drawer = [...cid].reverse();
  const originalCashDue = cashDue;
  const drawerTotal = totalAmount(drawer);
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

  for (const index in currency) {
    const amountIsLargerThanDenomination = cashDue > currency[index][1];
    const haveDenomination = drawer[index][1] > 0;

    if (amountIsLargerThanDenomination && haveDenomination) {
      let currentAmountInChange = 0;

      while (cashDue > 0 && drawer[index][1] > 0) {
        if (cashDue >= currency[index][1]) {
          drawer[index][1] = +(drawer[index][1] - currency[index][1]).toFixed(
            2
          );
          cashDue = +(cashDue - currency[index][1]).toFixed(2);
        } else {
          break;
        }

        currentAmountInChange = +(
          currentAmountInChange + currency[index][1]
        ).toFixed(2);
      }
      change.push([currency[index][0], currentAmountInChange]);
    }
  }

  if (+totalAmount(change).toFixed(2) === originalCashDue) {
    return change;
  } else {
    return [];
  }
}

function checkCashRegister(price, cash, cid) {
  const cashDue = cash - price;
  const totalCID = +totalAmount(cid).toFixed(2);
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
