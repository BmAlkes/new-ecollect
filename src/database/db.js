// import a dependencia do sqlite

const sqlite3 = require("sqlite3").verbose()

// iniciar objeto de banco de dados que ira fazer operacoes mo banco de dados

const db= new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de banco de dados para nosssas operacoes
db.serialize(()=>{
 
    // com comados Sql

    //  1 criar uma tabela com comados sql
db.run(`
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        adress2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`)
    // 2 inserir dados na tabela
        const query =`
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES(?,?,?,?,?,?);
        `
const values =[
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    "Colectoria",
    "Rehov Ben gurion",
    "215",
    "Israel",
    "Ashdod",
    "eletronics waste and lamps"
]

function afterInsertData(err){
      if ( err){
                return  console.log(err)
            }
            console.log("register with sucess")
            console.log(this)
}
        db.run(query,values,afterInsertData)
    // 3 consultar dados da tabela
       

    // 4 deletar um dado da tabela
})