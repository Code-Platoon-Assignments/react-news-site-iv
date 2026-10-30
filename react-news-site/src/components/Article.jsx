import { Container, Row, Col } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


function Article ({ title, created_at, url, author }){

    return(
        <Container >
            <Row className='article'>
                <Col lg='12'>
                    <Row>
                        <h1>{title}</h1>
                    </Row>
                    <Row>
                        <p>{created_at}</p>
                    </Row>
                    <Row>
                        <h2>{ author }</h2>
                    </Row>
                    <Row>
                        { url && <a href={url}>{url}</a> }
                    </Row>

                </Col>
            
                            
            </Row>
        </Container>
    )
}
export default Article;
