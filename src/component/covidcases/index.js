import React, { Component } from 'react'
import axios from 'axios';
// import Imgh from '../../image/undraw_social_distancing_2g0u.png'

const api = axios.create({
    baseURL: `https://covid19.ddc.moph.go.th/api/Cases/today-cases-all/`
})

class Covidcase extends Component {

    state = {
        covidth: []
    }

    constructor() {
        super();
        api.get('/').then(res=> {
            // console.log(res.data)
            this.setState({ covidth: res.data })
        })
    }

    render(){
        return (
            <div className="covidcase mb-5" id="covidcases">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>รายงานผู้ติดเชื้อโควิด-19 (COVID-19) ประจำวันที่ </h3>{this.state.covidth.map(covidth => <h3>{covidth.update_date}</h3>)}
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>ผู้ติดเชื้อวันนี้</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-danger">{covidth.new_case}</h2>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>ผู้ติดเชื้อทั้งหมด</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-dark">{covidth.total_case}</h2>)}
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>จำนวนผู้ป่วยตายรายใหม่</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-dark">{covidth.new_death}</h2>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>จำนวนผู้ป่วยตายสะสม</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-dark">{covidth.total_death}</h2>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>จำนวนผู้ป่วยรักษาหายรายใหม่</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-success">{covidth.new_recovered}</h2>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 text-center">
                                    <div className="card newcase p-2">
                                        <div className="card-body">
                                            <h4>จำนวนผู้ป่วยรักษาหายสะสม</h4>
                                            {this.state.covidth.map(covidth => <h2 className="fw-bold text-success">{covidth.total_recovered}</h2>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="apiby">
                            <p className="text-end text-muted">ข้อมูลจาก: <a href="https://covid19.ddc.moph.go.th/" style={{"textDecoration": "none"}}>https://covid19.ddc.moph.go.th/</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Covidcase;
