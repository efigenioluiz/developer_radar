const axios=require('axios');
const Developer=require('../models/Developer')
const parseStringAsArray=require('../utils/ParseStringAsArray');

module.exports = {
    async index (request,reponse){
        const developer=await Developer.find();
        return reponse.json(developer); 
    },
    async store (request,reponse) {
        console.log(request.body);
        
        const {github_username , techs, latitude, longitude}=request.body;
        
        let developer= await Developer.findOne({
            github_username
        });

        if(!developer){
            //await aguarda o retorno
            const   apiReponse= await axios.get(`https://api.github.com/users/${github_username}`);
            
            const {name=login,avatar_url,bio}= apiReponse.data
        
            const arrayTech= parseStringAsArray(techs);
        
            const location={
              type: 'Point',
              coordinates:[longitude,latitude]
            }
        
            developer= await Developer.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: arrayTech,
                location
            });
        }   
        // console.log(apiReponse.data);
    
        return reponse.json(developer);
      }
};