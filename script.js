// it can be sessionStorage too
const storage = localStorage

// this is data creation in storage
// uncomment ony on first run

// storage.setItem('tasks', JSON.stringify([
//     {
//         isCompleted: true,
//         text: 'Learn DOM',
//     }
// ]))
// storage.setItem('names', JSON.stringify(['Ala', 'Ola', 'Ela']))
// storage.setItem('name', 'Mateusz')
// storage.setItem('number', 123)

const name = storage.getItem('name')
const number = Number(storage.getItem('number'))
const names = JSON.parse(storage.getItem('names'))
const tasks = JSON.parse(storage.getItem('tasks'))