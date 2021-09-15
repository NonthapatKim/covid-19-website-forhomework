import React from 'react'
import Imgv from '../../image/policy-recommendations-vaccine-illustration.png'

const Covidvaccine = () => {
    return (
        <div className="covidvaccine mb-5" id="covidvaccine">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <div className="tede text-lg-start">
                            <h1>วัคซีนโรคโควิด-19 (COVID-19 Vaccine)</h1>
                            <p>ปัจจุบันมีวัคซีนโควิดมากมายที่กรมอนามัยโลก (WHO) รับรองว่าสามารถใช้ฉีดมนุษย์ได้ โดยประเทศไทยได้นำเข้าวัคซีน ที่รับรองจาก WHO ดังต่อไปนี้</p>

                            <ul>
                                <li>วัคซีนซิโนแวค</li>
                                <li>วัคซีนแอสตร้าเซนเนก้า<span className="text-danger">*</span> <span className="text-danger">(*วัคซีนแอสตร้าเซนเนก้า เป็นวัคซีนหลักของไทย อ้างอิงตามคำพูดของนายอนุทิน ชาญวีรกูล รมว.สาธารณสุข เมื่อวันที่ 10 พ.ค. 2564)</span></li>
                                <li>วัคซีนซิโนฟาร์ม <span className="text-danger">(ราชวิทยาลัยจุฬาภรณ์ เป็นผู้นำเข้าฯ)</span></li>
                                <li>วัคซีนไฟเซอร์ <span className="text-danger">(ล็อตล่าสุดเป็นวัคซีนบริจาค โดยปธน.โจ ไบเดน ของสหรัฐอเมริกา จำนวน 1.3 ล้านกว่าโดส)</span></li>
                                <li className="text-danger">วัคซีนโมเดอร์นา (ยังไม่มีการนำเข้าในขณะนี้ แต่โรงพยาบาลเอกชน จะได้รับล็อตแรกเดือน ต.ค. ปีนี้)</li>
                            </ul>

                            <p className="text-muted">ข้อมูลจาก: กรมอนามัยโลก (WHO), ไทยรัฐออนไลน์ และกรมควบคุมโรค กระทรวงสาธารณสุข</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Imgv} className="mx-auto d-block img-fluid" alt="covidvaccine"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covidvaccine
