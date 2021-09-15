import React from 'react'
import Imgp from '../../image/undraw_wash_hands_nwl2.png'

const Protectcovid = () => {
    return (
        <div className="howtoprotect mb-5" id="howtoprotect">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Imgp} className="mx-auto d-block img-fluid" alt="protectcovidimg"></img>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <div className="tede text-lg-start">
                            <h1>วิธีป้องกันโรคโควิด-19 (COVID-19)</h1>
                            <ul class="lh-lg">
                                <li>รักษาระยะห่างที่ปลอดภัยจากผู้อื่น แม้ว่าผู้นั้นจะไม่ได้ป่วยก็ตาม</li>
                                <li>สวมหน้ากากอนามัยในที่สาธารณะ โดยเฉพาะเมื่ออยู่ในพื้นที่ปิดหรือเว้นระยะห่างไม่ได้</li>
                                <li>หลีกเลี่ยงพื้นที่ปิด พยายามอยู่ในพื้นที่เปิดโล่งและอากาศถ่ายเทสะดวก เปิดหน้าต่างเมื่ออยู่ในพื้นที่ปิด</li>
                                <li>ล้างมือบ่อยๆ โดยใช้สบู่และน้ำ หรือเจลล้างมือที่มีส่วนผสมหลักเป็นแอลกอฮอล์</li>
                                <li>รับวัคซีนเมื่อได้รับสิทธิ์ ปฏิบัติตามหลักเกณฑ์ในพื้นที่เกี่ยวกับการฉีดวัคซีน</li>
                                <li>ปิดจมูกและปากด้วยข้อพับด้านในข้อศอกหรือกระดาษชำระเมื่อไอหรือจาม</li>
                                <li>เก็บตัวอยู่บ้านเมื่อรู้สึกไม่สบาย</li>
                            </ul>

                            <p>หากมีไข้ ไอ และหายใจลำบาก โปรดไปพบแพทย์ โดยติดต่อล่วงหน้าเพื่อที่ผู้ให้บริการด้านสุขภาพจะได้แนะนำให้คุณไปยังสถานพยาบาลที่ถูกต้อง ซึ่งจะช่วยปกป้องคุณ รวมถึงป้องกันการแพร่กระจายของไวรัสและการติดเชื้ออื่น ๆ</p>
                            <p className="text-muted">ข้อมูลจาก: กรมอนามัยโลก (WHO)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Protectcovid
