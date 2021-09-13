const device = require ('../models/Device')
const url = '/device'

module.exports = app => {
    app.get(url, (req, resp) => {    

        device.list()
            .then(results => resp.json(results))
            .catch(errors => resp.status(400).json(errors))
    })

    app.post(url, (req, resp)=>{

        const _device = req.body

        device.add(_device)
            .then(savedDevice =>                 
                resp.status(201).json(_device))
            .catch(errors => resp.status(400).json(errors)) 
    })
   


}