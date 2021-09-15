import React from 'react'
import Imgh from '../../image/undraw_social_distancing_2g0u.png'

const Hero = () => {
    return (
        <div className="hero mb-5" id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Imgh} className="mx-auto d-block img-fluid" alt="heroimg"></img>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <div className="tede text-center text-lg-start">
                            <h1>COVID-19</h1>
                            <p>เว็บไซต์แนะนำโรคโควิด 19 และระบบรายงานผู้ติดเชื้อในประเทศไทย <br/> เว็บไซต์นี้เป็นส่วนหนึ่งของวิชาเลือกเพิ่มเติม วิชาโปรแกรมผลิตสื่อดิจิตอล </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
