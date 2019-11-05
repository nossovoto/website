function titleToSlug(title) {
  let str = String(title).toString();
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();
  return str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, "");
}

function formatDate(date) {
  return date
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}

function getIntFromDate(date) {
  date = date.replace("T", "");
  date = date.replace("Z", "");
  date = date.replace(".", "");
  date = date.replace(/:/g, "");
  date = date.replace(/-/g, "");
  return parseInt(date);
}

function throttle(func, delay) {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    setTimeout(() => {
      func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
      inProgress = false;
    }, delay);
  };
}

module.exports.formatDate = formatDate;
module.exports.getIntFromDate = getIntFromDate;
module.exports.titleToSlug = titleToSlug;
module.exports.throttle = throttle;
