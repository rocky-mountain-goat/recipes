import { Recipe } from './models/recipe'

export const resolvers = {
  Query: {
    hello: () => 'Hi world!',
		recipes: () => Recipe.find()
  },

	Mutation: {
		createRecipe: (_, args) => {
			const recipe = new Recipe(args)
			return recipe.save()
		}
	}
};
