const category = require ('../models/Category')
const url = '/category'

module.exports = app => {
    app.get(url, (req, resp) => {    

        category.list()
            .then(results => resp.json(results))
            .catch(errors => resp.status(400).json(errors))
    })

    app.post(url, (req, resp)=>{

        const _category = req.body

        category.add(_category)
            .then(savedCategory =>                 
                resp.status(201).json(_category))
            .catch(errors => resp.status(400).json(errors)) 
    })
   


}
