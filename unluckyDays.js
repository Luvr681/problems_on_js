function unluckyDays(year){ // Возвращает количество чёрных пятниц в году
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let day = new Date(year, i, 13);
    if (day.getDay() === 5) 
      count++;
  }
  return count;
}
