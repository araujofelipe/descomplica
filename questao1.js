//Escreva uma função capaz de retornar, a partir de uma lista de aulas, aquelas que se iniciam em minuto ímpar.

// 	Formato da representação de aula recebida:

// 	[
// {
// discipline: “math”,
// startHour: 11,
// startMinute: 0
// },
// {
// discipline: “biology”,
// startHour: 12,
// startMinute: 15
// },
// ]
const EXAMPLE = [
  {
    discipline: "math",
    startHour: 11,
    startMinute: 0,
  },
  {
    discipline: "biology",
    startHour: 12,
    startMinute: 15,
  },
];
const oddMinuteStartClasses = (classes) => classes.filter(class_ => class_.startMinute % 2 > 0 );

console.log(oddMinuteStartClasses(EXAMPLE));