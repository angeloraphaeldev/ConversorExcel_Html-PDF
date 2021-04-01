let Reader = require("./Reader");
let writer = require('./Writer')
let Process = require("./Processor")
let Table = require("./Table")
let HtmlParser = require("./HtmlParser")
let PDFwriter = require('./PDFWriter')


let leitor = new Reader();
let escritor = new writer()


async function main() {
  let dados = await leitor.Read("./Diaria.csv");
  let dadosProcessados = Process.Processor(dados)
  let users = new Table(dadosProcessados)

let html = await HtmlParser.Parse(users)
    escritor.Write(Date.now()+ ".html",html);
    PDFwriter.WritePDF(Date.now()+ ".pdf",html)
}


main();