const Developer=require('../models/Developer')
const parseStringAsArray=require('../utils/ParseStringAsArray');

module.exports={
    async index(request,response){ 
        const {latitude,longitude,techs}=request.query;

        techsArray=parseStringAsArray(techs);
        // console.log(techsArray);

        const developers= await Developer.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json({ developers });
    }
}