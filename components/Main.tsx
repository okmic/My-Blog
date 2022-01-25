import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from '../styles/Home.module.css'

type PropsType = {
  url: string | undefined
  title: string | undefined
  //todo: create typer for description
  description: any
}

export const Main: React.FC<PropsType> = ({ url, title, description }) => <div
  className={`text-center p-5 ${styles.colorTitle}`}
  style={{
    background: `url("http:${url}") no-repeat center / cover`,
    minHeight: 300
  }}
>
  <h1 className='mt-5'>{title}</h1>
  <div className='mb-5'>
    {documentToReactComponents(description)}
  </div>
</div>