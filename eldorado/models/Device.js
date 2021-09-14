//id auto, category- class ,color String max -16 - only letter - /[^a-z]/i, partNumber positive integer

const repository = require('../repository/DeviceRepository')
const categoryRepository = require('../repository/CategoryRepository')

class Device{
    constructor(){

    }

    add(device){

        device.toUperca

        if(!device){
            return Promise.reject('Device can not be null!')
        }

        if(device.color){
           var n = device.color.search(/[^a-z]/i)

            if(device.color.lenght > 16 || n > 0 ){
                return Promise.reject('Device color invalid!')
            }
        }

        if(!device.partNumber || device.partNumber < 0){
            return Promise.reject('PartNumber invalid!')
        }

       return repository.add(device)


    }

    async list(){       
      
       let _device = await  repository.list()

        for (const item of _device) {
            if(item.CATEGORY){
               let _category = await categoryRepository.listById(item.CATEGORY)
               item.CATEGORY = _category[0]
            }
        }    

        return _device

    }

   async listById(id){
        if(id){
            let _device = await repository.listById(id)

            if(_device[0].CATEGORY){
                let _category = await categoryRepository.listById(item.CATEGORY)
                _device[0].CATEGORY = _category[0]
             }

        }

        return Promise.reject('Id can not be null!')

    }

    delete(id){

        if(id){
            repository.delete(id);
        }

        return Promise.reject('Id can not be null!')
    }

}

module.exports = new Device();