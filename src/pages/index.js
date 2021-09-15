import React, {useState} from 'react'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import Hero from '../component/hero'
import Whatiscovid from '../component/whatiscovid';
import Protectcovid from '../component/protectcovid';
import Covidvaccine from '../component/covidvaccine';
import Covidcase from '../component/covidcases';
import {Helmet} from "react-helmet";
import Footer from '../component/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta property="og:url" content="/" />
                <meta property="og:type"  content="article" />
                <meta property="og:title" content="COVID-19" />
                <meta property="og:description" content="เว็บไซต์แนะนำโรคโควิด 19 และระบบรายงานผู้ติดเชื้อในประเทศไทย เว็บไซต์นี้เป็นส่วนหนึ่งของวิชาเลือกเพิ่มเติม วิชาโปรแกรมผลิตสื่อดิจิตอล" />
                <meta property="og:image" content="../image/cover.png" />
                <title>COVID-19</title>
            </Helmet>
        
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero/>
            <Whatiscovid />
            <Protectcovid />
            <Covidvaccine />
            <Covidcase />
            <Footer />
        </>
    )
}

export default Home
