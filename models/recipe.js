import mongoose from 'mongoose'

export const Recipe = mongoose.model('Recipe', { 
	name: String,
	category: String,
	imageUrl: String,
	instructions: String,
	ingredients: String
});