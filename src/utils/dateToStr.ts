const dateToStr = (date: Date): string => {
  let day: number | string = date.getDate()
  let year: number = date.getFullYear()
  let month: number | string = date.getMonth() + 1

  if (day < 10) day = '0' + day.toString()
  if (month < 10) month = '0' + month.toString()

  return `${day}-${month}-${year}`
}

export default dateToStr
