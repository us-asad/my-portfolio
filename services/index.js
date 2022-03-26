import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getHomePageData = async () => {
	const query = gql`
		query MyQuery {
		  homePages(first: 1) {
		    email
		    introH1Text
		    introH2Text
		    introH6Text
		    logoName
		  }
		  pageTitles(first: 1) {
		    home
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return {
		homeData: result.homePages[0],
		homePageTitle: result.pageTitles[0].home
	};
}

export const getAboutPageData = async () => {
	const query = gql`
		query MyQuery {
		  aboutPages(first: 1) {
		    text
		  }
		  pageTitles(first: 1) {
		    about
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return {
		aboutData: result.aboutPages[0],
		aboutPageTitle: result.pageTitles[0].about
	};
}

export const getWorkPageData = async () => {
	const query = gql`
		query MyQuery {
		  pageTitles(first: 1) {
		    work
		  }
		  workDatas {
		    name
		    id
		    tags
		    description
		    demoUrl
		    githubUrl
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return {
		workData: result.workDatas,
		workPageTitle: result.pageTitles[0].work
	};
}

export const getBlogPageData = async () => {
	const query = gql`
		query MyQuery {
		  pageTitles(first: 1) {
		    blog
		  }
		  blogDatas {
		    id
		    link
		    image {
		      url
		    }
		    tags
		    title
		    date
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return {
		blogData: result.blogDatas,
		blogPageTitle: result.pageTitles[0].blog
	};
}

export const getSkillsPageData = async () => {
	const query = gql`
		query MyQuery {
		  pageTitles(first: 1) {
		    skills
		  }
		  skillPages(first: 1) {
		    skills
		    subtitle
		    title
		    tools
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return {
		skillsData: result.skillPages[0],
		skillsPageTitle: result.pageTitles[0].skills
	};
}

export const getSocialMediaAccounts = async () => {
	const query = gql`
		query MyQuery {
		  socialAccounts {
		    socialMediaName
		    socialMediaUrl
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return result.socialAccounts;
}

export const getLogoName = async () => {
	const query = gql`
		query MyQuery {
		  homePages {
		    logoName
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return result.homePages[0].logoName;
}
