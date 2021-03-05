const students = [
  {id: 21, name: 'Omar Sunny'},
  {id: 31, name: 'Manaaaaa'},
  {id: 41, name: 'Moyouri'},
  {id: 71, name: 'DeepJol'},
  {id: 24, name: 'Tarun mitra'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
// const bigger = students.filter( s => s.id > 40);   // 40 er boro age dakhabe
const bigger = students.find( s => s.id > 40);   
console.log(names,bigger);