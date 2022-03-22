import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  	<div>
  		<Head>
	    	<title>My Portfolio</title>
	      <meta name="description" content="My Portfolio" />
	    </Head>
	    <main className="overflow-x-hidden">
  			<Component {...pageProps} />
  		</main>
  	</div>
  );
}

export default MyApp;
