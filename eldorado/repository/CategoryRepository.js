
const query = require('../data/Querys')

class CategoryRepository{


    add(category){
        const sql = 'INSERT INTO CATEGORY SET ?'
        return query(sql, category)
    }

    list(){    
        const sql = `SELECT * FROM CATEGORY`
        return query(sql)
    }

    listById(id, resp){
        const sql = `SELECT * FROM CATEGORY WHERE id=${id}` 
        return   query(sql);
    }
        
    delete(id, resp){
        const sql = 'DELETE FROM CATEGORY WHERE id=?'

        connection.query(sql, id, (erro, result) => {
            if (erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(200).json({ id })
            }
        })
    }
}

module.exports = new CategoryRepository();