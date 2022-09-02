const getCurrentDate = (addDay = 1) => {
  let today = new Date()
  today.setDate(today.getDate() + addDay)
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  today = `${yyyy}-${mm}-${dd}`
  return today
}

export default getCurrentDate
