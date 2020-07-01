const updateObject = (oldObject, updateObject) => {
  return {
    ...oldObject,
    ...updateObject
  };
};
const makeQueryString = obj => {
  var str = "";
  var length = Object.keys(obj).length;
  Object.entries(obj).map(([key, value], index) => {
    if (key !== "cnfpassword") {
      str += key + "=" + value;
    }
    if (index < length - 2) {
      str += "&";
    }
    return true;
  });
  return str;
};

export { updateObject, makeQueryString };
