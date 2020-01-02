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
		}
	}
};
