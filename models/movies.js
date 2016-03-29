'use strict';
var mongoose=require('mongoose');
var seachPlugin=require('mongoose-search-plugin');
var movieModel=function () {
	// body...
	var movieSchema=mongoose.Schema({

		title:String,
		genre:String,
		plot:String,
		director:String,
		release_date:Date,
		trailer:String,
		cover:String
	});

	movieSchema.plugin(seachPlugin,{
		fields:['title','plot','cover']
	})
	return mongoose.model('Movies', movieSchema);

};
module.exports=new movieModel();