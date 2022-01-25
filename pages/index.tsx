import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { IArticle, IArticleFields, IMain, IMainFields } from '../contentful'
import client from '../contentful/index'
import { Container, Row} from 'reactstrap'
import { Post } from '../components/Post'
import { Main } from '../components/Main'


const Home = ({ home, articles }: { home: IMain, articles: IArticle[] }) => <>
      <Head>
        <title>{home.fields.title}</title>
      </Head>
      <main>
      <Main 
      url={home.fields.background?.fields.file.url}
      title={home.fields.title}
      description={home.fields.description} />

        <Container className='pt-5'>
          <Row>
            {articles.map(a => <Post
            key={a.fields.slug}
            title={a.fields.title}
            description={a.fields.description}
            slug={a.fields.slug}
            action={a.fields.action}
             /> 
            )}
          </Row>

        </Container>

      </main>
    </>

export default Home


export const getStaticProps: GetStaticProps = async () => {

  const home = await client.getEntries<IMainFields>({
    content_type: 'main',
    limit: 1
  })

  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: 'article',
    select: 'fields.title,fields.slug,fields.description,fields.action'
  })
  const [homePage] = home.items

  return {
    props: {
      title: 'Мой блог',
      home: homePage,
      articles: articleEntries.items
    }
  }
}