module.exports = (minutes) => {
  let hour = Math.floor(minutes / 60)
  let remainingMinutes = minutes - (hour * 60)
  if (hour && remainingMinutes) {
    return `${hour} Hours ${remainingMinutes} Minutes`
  } else if (hour) {
    return `${hour} Hours`
  } else if (remainingMinutes) {
    return `${remainingMinutes} Minutes`
  }
}