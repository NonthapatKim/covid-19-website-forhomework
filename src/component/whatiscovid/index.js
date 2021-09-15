import React from 'react'
import Imgc from '../../image/coronavirus-5107715_960_720.png'

const Whatiscovid = () => {
    return (
        <div className="whatiscovid mb-5" id="whatiscovid">
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <div className="tede text-center text-lg-end">
                            <h1>โควิด-19 (COVID-19) คืออะไร?</h1>
                            <p class="lh-base">โรคติดเชื้อไวรัสโคโรนา (โควิด-19) เป็นโรคติดต่อที่เกิดจากเชื้อไวรัส SARS-CoV-2 ผู้ป่วยโรคโควิด-19 ส่วนใหญ่จะมีอาการเล็กน้อยถึงปานกลาง และหายจากโรคนี้ได้เองโดยไม่ต้องรับการรักษาพิเศษ อย่างไรก็ตาม ผู้ป่วยบางรายอาจป่วยหนักและต้องเข้ารับการรักษา <br/> ไวรัสสามารถแพร่กระจายผ่านอนุภาคของเหลวขนาดเล็กจากปากหรือจมูกของผู้ติดเชื้อเมื่อไอ จาม พูด ร้องเพลง หรือหายใจ โดยอนุภาคเหล่านี้มีตั้งแต่สารคัดหลั่งละอองฝอยขนาดใหญ่จากระบบทางเดินหายใจไปจนถึงละอองลอยขนาดเล็ก <br/> คุณอาจติดเชื้อได้จากการหายใจเอาไวรัสเข้าสู่ร่างกายเมื่ออยู่ใกล้ชิดกับผู้ป่วยโควิด-19 หรือโดยการสัมผัสพื้นผิวที่มีเชื้อไวรัสแล้วสัมผัสตา จมูก หรือปากของตนเอง ไวรัสแพร่กระจายได้ง่ายขึ้นในพื้นที่ปิดและสถานที่แออัด</p>
                            
                            <p className="text-muted">ข้อมูลจาก: กรมอนามัยโลก (WHO)</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Imgc} width="400" height="400" className="mx-auto d-block img-fluid" alt="whatiscovidimg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatiscovid
