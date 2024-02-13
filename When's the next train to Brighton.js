// Solution / Решение

function nextTrain(time, minutes) {
    const [curHour, curMin] = time.split(':').map(Number); // Парсим текущее время
    const [trainStart, trainFinish] = [300, 1410];
    const totalCurrentMinutes = curHour * 60 + curMin; // Преобразуем текущее время в минуты
    const totalArrivalMinutes = Number(minutes); // Минуты, необходимые для прибытия на станцию
    
    let nextTrainTime = totalCurrentMinutes + totalArrivalMinutes; // Время отправления следующего поезда (в минутах), если прибытие на станцию займет arrivalMinutes
    // Если следующий поезд отправится после 23:30, то следующий поезд будет в 05:00
    if (nextTrainTime < trainStart || nextTrainTime > trainFinish) return "The next train is at 05:00.";

    // Находим время отправления следующего поезда
    while (nextTrainTime % 30 !== 0) nextTrainTime++;

    const nextTrainHour = Math.floor(nextTrainTime / 60); // Преобразуем время отправления следующего поезда обратно в формат часов и минут
    const nextTrainMinute = nextTrainTime % 60;

    // Форматируем результат
    return `The next train is at ${nextTrainHour < 10 ? '0' + nextTrainHour : nextTrainHour}:${nextTrainMinute < 10 ? '0' + nextTrainMinute : nextTrainMinute}.`;
}


// Tests

// console.log(nextTrain("09:35", "10")); // The next train is at 10:00.
// console.log(nextTrain("17:40", "30")); // The next train is at 18:30.
console.log(nextTrain("02:00", "60")); // The next train is at 05:30.

/*

Write a function that tells you when is the next train to Brighton you can take, 
given the time of day and the minutes it takes you to get to the station.

There is one train every half an hour from 05:00 to 23:30.

The current time is represented by a string in the format "hh:mm". 
The minutes you need to arrive at the station are also represented by a string.

The result is a string that says "The next train is at hh:mm" (see examples below).

If it's too late for the last train of the day 
(e.g. it's 23:50 and you need 40 minutes to get to the station), 
the function returns "The next train is at 05:00.".

EXAMPLES

nextTrain("17:40", "30") => "The next train is at 18:30."
nextTrain("23:20", "25") => "The next train is at 05:00."
nextTrain("03:36", "95") => "The next train is at 05:30."

*/

/*

Напишите функцию, которая подскажет вам, на какой ближайший поезд в Брайтон вы можете сесть, 
учитывая время суток и минуты, которые вам потребуются, чтобы добраться до станции.

С 05:00 до 23:30 каждые полчаса отправляется один поезд.

Текущее время представлено строкой в формате "чч:мм". 
Минуты, необходимые для прибытия на станцию, также представлены строкой.

В результате вы получите строку "Следующий поезд будет в hh:mm" (см. примеры ниже).

Если для последнего поезда дня уже слишком поздно. 
(например, сейчас 23:50 и вам нужно 40 минут, чтобы добраться до станции), 
функция возвращает "Следующий поезд будет в 05:00".

ПРИМЕРЫ

nextTrain("17:40", "30") => "The next train is at 18:30."
nextTrain("23:20", "25") => "The next train is at 05:00."
nextTrain("03:36", "95") => "The next train is at 05:30."

*/