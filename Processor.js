class Processor {
  static Processor(data) {
    //Dividir uma string em partes, metodo split
    let a = data.split("\r\n");
    let rows = []
    a.forEach(row =>{
      let arr = row.split(",");
      rows.push(arr)
    })
    return rows
  }
}

module.exports = Processor;
