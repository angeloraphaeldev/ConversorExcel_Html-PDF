class Table {
  constructor(arr){
    this.header = arr[0];
    //shift deleta sempre o primeiro falor do array
    arr.shift()
    this.rows = arr;
  }

  //Adicionar linha na tabela dinamicamente

  //usuarios.rows.push(["",",",",",","])

  
//Campo Virtual
  get RowCount(){
   return this.rows.length;
  }
  get ColumnCount(){
    return this.header.length;
  }
}


module.exports = Table