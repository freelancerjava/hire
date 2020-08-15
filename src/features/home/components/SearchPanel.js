import React from 'react'
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Jumbotron, Button } from 'reactstrap';

import search from '../assets/img/search.png'
import { Link } from 'react-router-dom';
import { VideosContainer } from '../../video/VideosPage';

export default function SearchPanel({ onlyInput }) {
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Jumbotron className="bg-white">
                            {!onlyInput && <div className="text-center">
                                <h2>Hayrli Kanalga hush kelibsiz</h2>
                                <p>
                                    Barcha sohadagi ilm va bilim olish bo'yicha video darsliklar jamlangan kanal!
                                    O'z kasbingizning ustasi bo'lishingizga va bunda bizning hissamiz qo'shilishiga tilakdoshmiz!
                                </p>
                            </div>}
                            {onlyInput && <h2 className={`text-center`}>Izalangan kalit so'z bo'yicha topilgan resurslar</h2>}
                            <InputGroup>
                                <Input placeholder="Izlash uchun yozing" className={`text-center`} />
                                <InputGroupAddon addonType="append">
                                    <Link to='search'>
                                        <Button outline color="primary">
                                            <img src={search} width={20} height={20} />
                                        </Button>
                                    </Link>
                                </InputGroupAddon>
                            </InputGroup>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

            {onlyInput && <VideosContainer />}
        </>
    )
}
