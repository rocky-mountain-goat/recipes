import { gql } from 'apollo-server-express'

// const recipe = new Recipe({ 
// 	name: 'Test Recipe 1',
// 	category: 'Test Category 1',
// 	imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjX7KbtnOPmAhXBU80KHfWdDDUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.thekitchn.com%2Fturkey-meatballs-22931916&psig=AOvVaw3lPe0ZX8yeEnAXTRufHBjK&ust=1577996409134187',
// 	instructions: 'These are the test instructions for recipe 1. These are the test instructions for recipe 1. These are the test instructions for recipe 1. These are the test instructions for recipe 1.',
// 	ingredients: 'Test Ingredient 1'
// });

export const typeDefs = gql`
  type Query {
    hello: String,
		recipes: [Recipe!]!
  }

	type Recipe {
		id: ID!
		name: String!
		category: String
		imageUrl: String
		instructions: String
		ingredients: String
	}

	type Mutation {
		createRecipe(name: String!) : Recipe!
	}
`;



