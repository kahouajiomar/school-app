import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.scss';
import { Col, Layout, Row } from 'antd';
import Home from './components/Home';
import Work from './components/Work';
import NotFoundPage from './components/NotFoundPage';
const { Content } = Layout;

const App = () => (
    <Layout>
        <Navbar />
        <Content>
            <Row >
                <Col md={{ span: 8, offset: 8 }} xs={{ span: 24, offset: 0 }}>
                    <Routes>
                        <Route path="/" exact="true" element={<Home/>} />
                        <Route path="/work" exact="true" element={<Work/>} />
                        <Route path="*" exact="true" element={<NotFoundPage/>} />
                    </Routes>
                </Col>
            </Row>
        </Content>
    </Layout>
)

export default App;
