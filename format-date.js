/**
 * format date
 * @param {Date} target
 * @param {boolean} needMs
 */
module.exports = function(target, needMs) {
  if(!(target instanceof Date))
    throw TypeError('target should be a Date')
  
  let result = `${target.getFullYear() || '0000'
    }-${ps(target.getMonth() + 1)
    }-${ps(target.getDate())
    } ${ps(target.getHours())
    }:${ps(target.getMinutes())
    }:${ps(target.getSeconds())}`
  
  if(needMs)
    result += '.' + ps(target.getMilliseconds(), 3)
  
  return result
}

function ps(target, num = 2) {
  target = target || 0 // '0000-00-00 00:00:00'
  return (target + '').padStart(num, 0)
}