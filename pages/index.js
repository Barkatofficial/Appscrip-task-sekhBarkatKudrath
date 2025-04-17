import Head from 'next/head';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"


export default function Home({}){
    return(
        <>
        <Head>
        <title>ShopTrend - Your Fashion Destination</title>
        <meta
          name="description"
          content="Discover the latest fashion trends at ShopTrend. Shop quality clothing, accessories, and more at affordable prices."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              name: 'ShopTrend',
              url: 'https://www.shoptrend.com',
              description: 'Discover the latest fashion trends at ShopTrend.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.shoptrend.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </Head>
      <Header/>
      <main>
        <Hero />
        <section >
          <h2>Featured Products</h2>
          <div>
            {/* {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
          </div>
        </section>
      </main>
      <Footer />
        </>
    )
}