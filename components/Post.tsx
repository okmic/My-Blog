import Link from "next/link"
import { Button, Card, CardText, CardTitle, Col } from "reactstrap"

type PropsType = {
    title: string | undefined
    description: string | undefined
    action: string | undefined
    slug: string | undefined
}

export const Post: React.FC<PropsType> = ({ title, description, slug, action }) => <Col sm={6}>
    <Card body >
        <CardTitle tag='h5'>
            {title}
        </CardTitle>
        <CardText>
            {description}
        </CardText>
        <Link href={`/articles/${slug}`}>
            <Button>
                {action}
            </Button>
        </Link>
    </Card>
</Col>