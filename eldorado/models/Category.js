//id auto
//name max 128
const { category } = require('../data/Tables');
const repository = require('../repository/CategoryRepository')

class Category{

    constructor(){

        this.validName = lgth => lgth > 128 

        this.valid = params =>
            this.validations.filter(value => {
                const { ParamName } = value
                const param = params[ParamName]

                return !value.result(param)
            })

        this.validations = [       
            {
                ParamName: 'name',
                result: this.validName,
                msg: 'Max value for name is 128! to large!'
            }
        ]

    }


    add(category){

        if(!category.name){
            return Promise.reject('Invalid params! name can not be null!')            
        }
        
        if(category.name.length > 128){
            return Promise.reject('Max value for name is 128! to large!')
        }


/*
        const params = {            
            name: { lgth: category.name.length }
        }

        const errors = this.valid(params)
        console.log('erro ', errors)

        if(errors.length){
            return new Promise((resolve, reject) => reject(errors))
        }        
       */

        return repository.add(category)    
         
            

    }

    delete(id, resp){
        if(id){
            return repository.delete(id,resp);
        }
       return new Promise((resolve, reject) => reject('Invalid id'))

    }

    list(){
        return repository.list();
    }
    
    listById(id){
        if(id){
            return repository.listById(id)
        }

    }

}
module.exports = new Category();