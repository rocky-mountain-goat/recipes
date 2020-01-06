import { Recipe } from './models/recipe'

export const resolvers = {
  Query: {
		recipes: () => Recipe.find(),
		recipe: (root, { _id} ) => Recipe.findOne({ _id })
  },

	Mutation: {
		createRecipe: (_, args) => {
			const recipe = new Recipe(args)
			return recipe.save()
		},
		deleteRecipe: (_, args) => {
			return Recipe.findByIdAndRemove({ _id: args.id }, {}, function(result) {
				console.log('deleteRecipe', args.id)
				return { id: args.id }
			})
		},
		updateRecipe: (_, args) => {
			return Recipe.findByIdAndUpdate(args.id, args, {}, function(result) {
				return result
			})
		}
	}
};
