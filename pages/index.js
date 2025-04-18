import Head from 'next/head';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Products from '@/components/Products';


export default function Home({}){
    return(
        <>
        <Head>
        <title>Appscrip Shop - Your Fashion Destination</title>
        <meta
          name="description"
          content="Discover the latest fashion trends at ShopTrend. Shop quality clothing, accessories, and more at affordable prices."
        />
      </Head>
      <Header/>
      <main>
        <Hero />
        <section >
          <div>
             <Products />
          </div>
        </section>
      </main>
      <Footer />
        </>
    )
}