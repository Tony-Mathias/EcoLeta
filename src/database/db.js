// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o obejeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar o objeto do banco de dados
db.serialize(() => {
    //criar uma tabela
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
 //           image TEXT,
 //           name TEXT,
 //           address TEXT,
  //          address2 TEXT,
 //           state TEXT,
 //           city TEXT,
 //           items TEXT
  //      );
 //   `)


    //inserir dados na tebela
//    const query = `
//    INSERT INTO places (
//        image,
 //       name,
//        address,
//        address2,
//        state,
//        city,
//        items
//    ) VALUES(?,?,?,?,?,?,?);
//`
//const values = [
//    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?//ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//    "papersider",
//    "Guilherme Gemballa, Jardim America",
//    "Numero 260",
//    "Rio do Sul",
//    "Residuos Eletronicos, Lampadas"
//
//]

//function afterInsertData(err) {
//    if(err) {
//        return console.log(err)
//    }

//    console.log("Cadastrado com sucesso")
//    console.log(this)
//}

//    db.run(query, values, afterInsertData)

    //consultar od dados da tabela 
    //db.all(`SELECT name FROM places`, function(err, rows){
    //    if(err) {
    //        return console.log(err)
    //    }
    //    console.log("Aqui estão seus registros")
    //    console.log(rows)
    //})


    //deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
        //if(err) {
           // return console.log(err)
        //}
    
       // console.log("Registro deletado com sucesso!")
    //})
})