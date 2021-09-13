
const query = require('../data/Querys')

class DeviceRepository{


    add(device){
        const sql = 'INSERT INTO DEVICES SET ?'
        return query(sql, device)
    }

    list(){    
        const sql = `SELECT * FROM DEVICES`
        return query(sql)
    }

    listById(id, resp){
        const sql = `SELECT * FROM DEVICES WHERE id=${id}` 
        return   query(sql);
    }
        
    delete(id, resp){
        const sql = 'DELETE FROM DEVICES WHERE id=?'

        connection.query(sql, id, (erro, result) => {
            if (erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(200).json({ id })
            }
        })
    }
}

module.exports = new DeviceRepository();