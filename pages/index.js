import Header from "../components/Header";
import Container from "../components/Container";
import Head from "next/head";

export default function Home() {
  return (
      <main>
          <Head>
              <title>Lorenzgram</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        <Header/>
        <Container/>
      </main>
  )
}
