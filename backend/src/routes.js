const {Router}= require('express');
const axios=require('axios');
const Developer=require('./models/Developer')
const DeveloperController=require('./controllers/DeveloperController')
const SearchController=require('./controllers/SearchControllers')

const routes=Router();

routes.get('/developers',DeveloperController.index );
routes.get('/search',SearchController.index );
routes.post('/developers',DeveloperController.store );

module.exports= routes;