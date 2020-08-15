import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'
import { useGetCategories } from '../../navbar/redux/hooks'
import { baseURL } from '../../../axios'
import { Link } from 'react-router-dom'
// import { useQuery } from 'react-query'
import { fetchCats } from '../query'

export default function Categories() {
    // const categories = useQuery(['categories', fetchCats])
    const { categories, getCategories, getCategoriesPending } = useGetCategories()

    return (
        <Container fluid>
            <Row>
                <Col className={`d-flex align-items-center flex-column bg-primary text-white`}>
                    <h2 className={`m-4`}>Asosiy kategoriyalar</h2>
                    <Jumbotron className={`bg-white d-flex flex-column align-items-center p-5`}>
                        <Container>
                            <Row className={`d-flex flex-wrap align-items-center justify-content-center`}>
                                {categories && categories.map((item, index) => {
                                    return (
                                        <Col md={3} sm={5} xs={10}
                                            className={`
                                                    m-1 p-1 
                                                    bg-primary text-white 
                                                    rounded                                                    
                                                    `}>
                                            <Link to={`courses/${item.suid}`}
                                                className={`text-white d-flex flex-wrap align-items-center `}>
                                                <div className={`w-25 d-flex justify-content-center`}>
                                                    <img style={{ height: '35px', width: '35px' }}
                                                        src={baseURL + item.thumbnail.url} />
                                                </div>
                                                <div className={`w-75 d-flex justify-content-center`}>{item.name}</div>
                                            </Link>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                        <Link to={`categories`} className={`mt-4 btn btn-outline-primary`} outline>Barcha kategoriyalar</Link>
                    </Jumbotron>
                </Col>
            </Row>

        </Container >
    )
}
