const arr = ['2354', '6543', '4743', '5456', '23451', '55437', '6453']

arr.forEach(element => {
  if (element[0] == '4' || element[0] == '2'){
    console.log(element)
  }
  if (element){

  }
});

function cutter(stringToCut) {
  if (typeof(stringToCut) != 'string'){
    console.log('это не строка')
    return
  }
  if (stringToCut.length > 30){
    console.log(stringToCut.slice(0,30) + '...')
  } else(
    console.log(stringToCut.trim())
  )
}

cutter('                  1312312     ')

//3123123123qqqewqeq