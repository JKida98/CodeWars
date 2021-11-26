snail = function (array) {
  if (array[0].length === 0) {
    return [];
  }
  if (array[0].length === 1) {
    return array[0];
  }
  var sideWidth = array.length;
  var returnArray = [];
  var top = true;
  var sideR = false;
  var sideL = true;
  var bot = false;
  while (array.length > 0) {
    if (top) {
      toWork = array[0];
      toWork.map((element) => returnArray.push(element));
      array.shift();
      top = false;
      sideR = true;
    } else if (sideR) {
      if (array.length === 1) {
        toWork = array[0];
        for (var i = toWork.length - 1; i >= 0; i--) {
          returnArray.push(toWork[i]);
        }
        array.shift();
        return returnArray;
      } else {
        array.map((x) => {
          returnArray.push(x[sideWidth - 1]);
          x.pop();
        });
        sideWidth -= 1;
        sideR = false;
        bot = true;
      }
    } else if (bot) {
      toWork = array[array.length - 1];
      for (var i = toWork.length - 1; i >= 0; i--) {
        returnArray.push(toWork[i]);
      }
      array.pop();
      bot = false;
      sideL = true;
    } else if (sideL) {
      if (array.length === 1) {
        toWork = array[0];
        last = toWork[toWork.length - 1];
        toWork.pop();
        for (var i = toWork.length - 1; i >= 0; i--) {
          returnArray.push(toWork[i]);
        }
        returnArray.push(last);
        array.shift();
        return returnArray;
      } else {
        for (var i = array.length - 1; i >= 0; i--) {
          returnArray.push(array[i][0]);
          array[i].shift();
        }
        sideWidth -= 1;
        sideL = false;
        top = true;
      }
    }
  }
};
