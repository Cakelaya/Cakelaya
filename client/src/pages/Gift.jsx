import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components"
import Begin from '../MultiStep/Begin';
import Header from "../components/Header";
import Announcement from '../components/Announcement';
import Footer from "../components/Footer";

const Container = styled.section`
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin-bottom: 10px;
`;

const Cards = styled.ul`
    list-style: none;
    /* display: flex; */
`;

const Card = styled.li`
    
`;


const Gift = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [gifts, setGifts] = useState([]);
    const [specificgift, setSpecificgift] = useState([]);

    useEffect(() => {
        const getGift = async () => {
            const res = await axios.get("http://localhost:4000/api/allGifts");
            setGifts(res.data);
        }
        getGift();
    }, []);


    return (
        <>
            <Announcement/>
            <Header/>
            <Container >
                <Begin />
            </Container >
            <Footer/>
        </>
    );
}

export default Gift;
