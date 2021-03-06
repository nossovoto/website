export const replaceAccents = (str: string) => {
  const ACCENTS = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
  const NON_ACCENTS = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz"

  const strAccents: string[] = str.split('')
  const strAccentsOut: string[] = new Array()

  const strAccentsLen: number = strAccents.length

  for (let y = 0; y < strAccentsLen; y++)
  {
    if (ACCENTS.indexOf(strAccents[y]) !== -1)
      strAccentsOut[y] = NON_ACCENTS.substr(ACCENTS.indexOf(strAccents[y]), 1)
    else
      strAccentsOut[y] = strAccents[y]
  }
  const newString: string = strAccentsOut.join('')
  return newString
}

export function titleToSlug(title: string) {
  let str = String(title).toString()
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()
  return str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, "")
}

export function formatDate(date: string) {
  return date
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/")
}

export function getIntFromDate(date: string) {
  date = date.replace("T", "")
  date = date.replace("Z", "")
  date = date.replace(".", "")
  date = date.replace(/:/g, "")
  date = date.replace(/-/g, "")
  return parseInt(date, 10)
}

export function throttle(func: (...args) => any, delay: number) {
  let inProgress = false
  return (...args) => {
    if (inProgress)
    {
      return
    }
    inProgress = true
    setTimeout(() => {
      func(...args) // Consider moving this line before the set timeout if you want the very first one to be immediate
      inProgress = false
    }, delay)
  }
}

export function scrollTo(top: number = 0, left: number = 0, behave: ScrollBehavior = 'smooth') {
  try
  {
    window.scroll({
      top,
      left,
      behavior: behave,
    })
  } catch (error)
  {
    // just a fallback for older browsers
    window.scrollTo(top, left)
  }
}

export function mapObjectKeys(obj: {}) {
  Object.keys(obj).map(key => {
    const data = obj[key]
    return data
  })
}

export function getUnauthorizedHttpAgent() {
  return new (require("https")).Agent({
    rejectUnauthorized: false
  })
}
