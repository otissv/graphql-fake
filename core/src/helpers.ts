import * as moment from 'moment';

export function randomNumber (min: number, max: number, interval?: number): number {
  if (typeof interval === 'undefined') {
    interval = 1;
  }

  let r = Math.floor(Math.random() * (max - min + interval) / interval);
  return r * interval + min;
}

export function getDates () {
  const date = new Date();

  const startDate = moment({ 
    years  : date.getFullYear(),
    months : date.getMonth(), 
    date   : randomNumber(1, 28),
    hours  : randomNumber(0, 23), 
    minutes: randomNumber(1, 59)
  });

  const endDate = moment({ 
    years  : startDate.year(),
    months : startDate.month(),
    date   : randomNumber(1, 28),
    hours  : randomNumber(0, 23), 
    minutes: randomNumber(1, 59)
  });

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };
}
