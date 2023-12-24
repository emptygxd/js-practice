async function app() {
  const usersFetch = await fetch("https://reqres.in/api/users?per_page=12");
  const res = await usersFetch.json();
  const data = res.data

  console.log('Все фамилии:')
  data.forEach(element => {
    console.log(element.last_name)
  });

  console.log('-----------');
  console.log('Фамилии на букву F:')
  data.forEach(element => {
    if(element.last_name[0] == 'F'){
    console.log(element.last_name)
    }
  });

  console.log('-----------');
  const result = data.reduce((acc, value) => {
    acc += `${value.first_name} ${value.last_name}, `

    return acc 
  }, '')
  let string = 'Наша база содержит данные следующих пользователей: '+result.slice(0,-2)
  console.log(string)

  console.log('-----------');
  console.log(Object.keys(data[0])) 
}

app()