const { ApolloServer } = require("apollo-server");

let links = [
	{
		id: "link-0",
		url: "www.howtographql.com",
		description: "Fullstack tutorial for GraphQL",
	},
];

const resolvers = {
	Query: {
		info: () => `This is the API of a Hackernews Clone`,
		feed: () => links,
		link: (parent, args) => {
			for (let link of links) {
				if (link.id.substring(5) == args.id) {
					return link;
				}
			}

			return null;
		},
	},
	// Link: {
	// 	id: (parent) => {
	// 		return parent.id;
	// 	},
	// 	description: (parent) => parent.description,
	// 	url: (parent) => parent.url,
	// },
	Mutation: {
		post: (parent, args) => {
			let idCount = parseInt(links[links.length - 1].id.substring(5)) + 1;

			const link = {
				id: `link-${idCount++}`,
				description: args.description,
				url: args.url,
			};

			links.push(link);
			return link;
		},
		updateLink: (parent, args) => {
			for (let i = 0; i < links.length; i++) {
				if (links[i].id.substring(5) == args.id) {
					if (args.url != null) {
						links[i].url = args.url;
					}

					if (args.description != null) {
						links[i].description = args.description;
					}
					return links[i];
				}
			}

			return null;
		},
		deleteLink: (parents, args) => {
			let ret = null;

			for (let link of links) {
				if (link.id.substring(5) == args.id) {
					ret = link;
				}
			}

			links = links.filter((link) => {
				return link.id.substring(5) != args.id;
			});

			return ret;
		},
	},
};

const fs = require("fs");
const path = require("path");

const server = new ApolloServer({
	typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
	resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
