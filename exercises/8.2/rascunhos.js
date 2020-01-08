let books = [{
    nome: 'a',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    ano: 'c'
  },
  {
    nome: 'x',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    ano: 'y'
  }
]

function teste() {
  const achaAno = books.find(item => item.author.birthYear === 1892);
  return achaAno.author.name
}


console.log(teste ())