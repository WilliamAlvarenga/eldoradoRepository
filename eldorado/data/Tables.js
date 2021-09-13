class Tables {
    init(connection) {
        this.connection = connection   
        
        this.createDtBase();  
        this.category();
        this.devices();        
    }

    changeUsed(){
        this.connection.changeUser({
            database : 'eldoradoapp'
        }, function(err) {
            if (err) {
            console.log('error in changing database', err);
            return;
            }
        })
    }

    createDtBase(){                 
      this.connection.query("CREATE DATABASE IF NOT EXISTS eldoradoapp", error=> {
          console.log("Database created!");   
        });   
       
        this.changeUsed();
    }


    category(){
        
        const sql =
        'CREATE TABLE IF NOT EXISTS CATEGORY (id int NOT NULL AUTO_INCREMENT, NAME varchar(128) NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } 
        })
    }

    devices(){

        const sql =
        'CREATE TABLE IF NOT EXISTS DEVICES (id int NOT NULL AUTO_INCREMENT, CATEGORY int,COLOR varchar(16),PARTNUMBER bigint ,PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } 
        })

    }    
}

module.exports = new Tables()