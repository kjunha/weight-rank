'use strict';

class BaseController {
  hasRequiredKeys(obj, keyList) {
    let objKeys = Object.keys(obj);
    let result = true;
    keyList.forEach((reqkey) => {
      if (!objKeys.includes(reqkey)) {
        result = false;
        return;
      }
    });
    return result;
  }
}

module.exports = BaseController;
