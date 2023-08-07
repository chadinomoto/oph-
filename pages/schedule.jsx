import {
  faAward,
  faChalkboard,
  faChartPie,
  faChartSimple,
  faFlag,
  faFlaskVial,
  faGlobeAsia,
  faLightbulb,
  faMicrophoneLines,
  faPersonChalkboard,
  faSquareRootAlt,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { m } from 'framer-motion'
import Head from 'next/head'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector("sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd");
const card = document.querySelector("dsffffffffffffffffffffsdf");
const close = document.querySelector("sdfsdddddddddddfsdfsdf");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}

const meta = {
  title: 'Schedule | MWIT Open House 2023',
  url: 'schedule',
  description:
    'กำหนดการกิจกรรมต่าง ๆ ภายในงาน MWIT Open House 2023 พบกับกิจกรรมรูปแบบออนไซต์ที่ผู้เข้าร่วมจะได้สัมผัสประสบการณ์และเรียนรู้เกี่ยวกับ MWIT ด้วยตัวเอง อาทิเช่น การนำเสนอโครงงานของนักเรียน กิจกรรม MWIT Challenge การแข่งขัน MWIT Square กิจกรรมคุยกับนักเรียนศิษย์ปัจจุบัน และอื่น ๆ อีกมากมาย',
  img: 'ogimage.png',
}

const timetb = [
  {
    date: '25 สิงหาคม 2566',
    slot: [
      {
        time: '08.00 - 09.00 น.'
        ,act: [
          {
            title: "ลงทะเบียนเข้าร่วมกิจกรรม",
            desc: "นักเรียนทั้งที่ลงทะเบียนในระบบและนักเรียนที่เข้าร่วมกิจกรรมแบบ Walk in ลงทะเบียนที่ประตูข้างโรงเรียนได้ตั้งแต่ 08.00 น. ไปจนตลอดทั้งวัน"
          },
          {
            title: "ลงทะเบียนผู้เข้าแข่งขันกิจกรรม MWIT Spelling Bee",
            desc: "ลงทะเบียนผู้เข้าแข่งขันกิจกรรม MWIT Spelling Bee สำหรับทีมที่ลงทะเบียนล่วงหน้า"
          },
          {
            title: "ลงทะเบียนผู้เข้าแข่งขันกิจกรรม MWIT Square",
            desc: "ลงทะเบียนผู้เข้าแข่งขันกิจกรรม MWIT Square สำหรับทีมที่ลงทะเบียนล่วงหน้า"
          }
        ]
      },
      {
        time: '09.00 - 12.00 น.',
        act: [
          {
            title: 'การนำเสนอโครงงาน',
            desc: 'รับชมการนำเสนอโครงงานของนักเรียน MWIT กว่า 90 โครงงานพร้อม Q&A session',
            icon: faPersonChalkboard,
          },
          {
            title: 'MWIT CURRICULUM DISCOVERY EXHIBITION',
            desc: 'เป็นนิทรรศการที่จะทำให้ผู้เข้าชมได้เข้าใจในหลักสูตรการเรียนการสอนและกิจกรรมพัฒนาผู้เรียนได้มากขึ้น สามารถรับชมภาพรวมลักษณะของเนื้อหาการเรียนการสอนรวมไปถึงกิจกรรมต่างๆตลอด 3 ปีใน MWIT และยังมีเกมสนุกๆชิงของรางวัลบริเวณหน้านิทรรศการอีกด้วย (หลังจาก 10.30 น. เป็นต้นไป จะมีเกมให้เล่น)'
          },
          {
            title: 'น้องถาม พี่ตอบ',
            desc: 'session ถาม-ตอบ และพูดคุยกับรุ่นพี่ศิษย์ปัจจุบันของ MWIT'
          },
          {
            title: 'School tour',
            desc: 'กิจกรรมแนะนำสถานที่ต่าง ๆ ภายใน MWIT'
          },
          {
            title: 'การแข่งขัน MWIT Square รอบที่ 1 ',
            desc: 'การแข่งขันวิทยาศาสตร์และคณิตศาสตร์ระดับชั้นมัธยมศึกษาตอนต้น รอบคัดเลือก จัดที่หอประชุมพระอุบาลี'
          },
          {
            title: 'MWIT Spelling Bee',
            desc: 'การแข่งขันสะกดคำภาษาอังกฤษ '
          },
        ],
      },
      {
        time: '13.00 - 14.30 น.',
        act: [
          {
            title: 'นำเสนอโครงงานแบบโปสเตอร์',
            desc: 'การนำเสนอโครงงานแบบโปสเตอร์ ซึ่งผู้ที่สนใจสามารถเดินชมได้อย่างอิสระ'
          },
        ]
      },
      {
        time: '13.00 - 16.00 น.',
        act: [
          {
            title: 'MWIT CURRICULUM DISCOVERY EXHIBITION',
            desc: 'เป็นนิทรรศการที่จะทำให้ผู้เข้าชมได้เข้าใจในหลักสูตรการเรียนการสอนและกิจกรรมพัฒนาผู้เรียนได้มากขึ้น สามารถรับชมภาพรวมลักษณะของเนื้อหาการเรียนการสอนรวมไปถึงกิจกรรมต่างๆตลอด 3 ปีใน MWIT และยังมีเกมสนุกๆชิงของรางวัลบริเวณหน้านิทรรศการอีกด้วย'
          },
          {
            title: 'กิจกรรม CLUB FESTIVALS',
            desc: 'นิทรรศการแสดงผลงานการจัดกิจกรรมชุมนุมของนักเรียน'
          },
          {
            title: 'School tour',
            desc: 'กิจกรรมแนะนำสถานที่ต่าง ๆ ภายใน MWIT'
          },
          {
            title: 'น้องถาม พี่ตอบ',
            desc: 'session ถาม-ตอบ และพูดคุยกับรุ่นพี่ศิษย์ปัจจุบันของ MWIT'
          },
          {
            title: 'การแข่งขัน MWIT Square รอบที่ 2 ',
            desc: 'การแข่งขันวิทยาศาสตร์และคณิตศาสตร์ระดับชั้นมัธยมศึกษาตอนต้น รอบชิงชนะเลิศ จัดที่หอประชุมพระอุบาลี'
          },

          
        ]
      }
    ],
  },
  {
    date: '26 สิงหาคม 2566',
    slot: [
      {
        time: 'ตั้งแต่ 08.00 น. เป็นต้นไป'
        ,act: [
          {
            title: "ลงทะเบียนเข้าร่วมกิจกรรม",
            desc: "นักเรียนทั้งที่ลงทะเบียนในระบบและนักเรียนที่เข้าร่วมกิจกรรมแบบ Walk in ลงทะเบียนที่ประตูข้างโรงเรียนได้ตั้งแต่ 08.00 น. ไปจนตลอดทั้งวัน"
          }
        ,{
            title: "ลงทะเบียนเข้าร่วมกิจกรรม MWIT Challenge รอบแรก",
            desc: "นักเรียนที่สนใจร่วมลงทะเบียนเพื่อเข้าร่วมกิจกรรม MWIT Challenge รอบที่ 1"
          }
          
        ]
      },
      {
        time: '09.00 - 12.00 น.',
        act: [
          {
            title: 'MWIT Challenge ภาคเช้า',
            desc: 'กิจกรรม STEM Challenge ที่จะให้ผู้เข้าร่วมได้ฝึกทักษะการออกแบบสิ่งประดิษฐ์เพื่อแก้ปัญหาตามที่ได้รับมอบหมาย แบ่งออกเป็น 2 รอบ รอบละ 90 นาที่ รับ 30 ทีม ทีมละ 3 คน ต่อรอบ เป็นกิจกรรมแบบ Walk in'
          },
          {
            title: 'การนำเสนอโครงงานแบบบรรยาย',
            desc: 'รับชมการนำเสนอโครงงานของนักเรียน MWIT กว่า 90 โครงงานพร้อม Q&A session',
            icon: faPersonChalkboard
          },
          {
            title: 'กิจกรรมสาขาวิชาศิลปศาสตร์ 1 (สังคมศึกษาและศิลปะ)',
            icon: faLightbulb,
            desc: 'Liberal Arts for Fun - เรียนรู้วิธีการเรียนแบบศิลปศาสตร์ ที่ผสมผสานวิชาสังคมศึกษาและศิลปะได้อย่างลงตัวและสนุกสนาน',
          },
          {
            title: 'MWIT CURRICULUM DISCOVERY EXHIBITION',
            
            desc: 'เป็นนิทรรศการที่จะทำให้ผู้เข้าชมได้เข้าใจในหลักสูตรการเรียนการสอนและกิจกรรมพัฒนาผู้เรียนได้มากขึ้น สามารถรับชมภาพรวมลักษณะของเนื้อหาการเรียนการสอนรวมไปถึงกิจกรรมต่างๆตลอด 3 ปีใน MWIT และยังมีเกมสนุกๆชิงของรางวัลบริเวณหน้านิทรรศการอีกด้วย (หลังจาก 10.30 น. เป็นต้นไป จะมีเกมให้เล่น)'
          },
        ],
      },
      {
        time: '13.00-14.30 น.',
        act: [
          {
            title: 'นำเสนอโครงงานแบบโปสเตอร์',
            desc: 'การนำเสนอโครงงานแบบโปสเตอร์ ซึ่งผู้ที่สนใจสามารถเดินชมได้อย่างอิสระ'
          },
        ]
      },
      {
        time: '13.00 - 16.00 น.',
        act: [
          {
            title: 'MWIT Challenge ภาคบ่าย',
            desc: 'กิจกรรม STEM Challenge ที่จะให้ผู้เข้าร่วมได้ฝึกทักษะการออกแบบสิ่งประดิษฐ์เพื่อแก้ปัญหาตามที่ได้รับมอบหมาย แบ่งออกเป็น 2 รอบ รอบละ 90 นาที่ รับ 30 ทีม ทีมละ 3 คน ต่อรอบ เป็นกิจกรรมแบบ Walk in'
          },
          {
            title: 'MWIT CURRICULUM DISCOVERY EXHIBITION',
            desc: 'เป็นนิทรรศการที่จะทำให้ผู้เข้าชมได้เข้าใจในหลักสูตรการเรียนการสอนและกิจกรรมพัฒนาผู้เรียนได้มากขึ้น สามารถรับชมภาพรวมลักษณะของเนื้อหาการเรียนการสอนรวมไปถึงกิจกรรมต่างๆตลอด 3 ปีใน MWIT และยังมีเกมสนุกๆชิงของรางวัลบริเวณหน้านิทรรศการอีกด้วย'
          },
          {
            title: 'กิจกรรม CLUB FESTIVALS',
            desc: 'นิทรรศการแสดงผลงานการจัดกิจกรรมชุมนุมของนักเรียน'
          },
          {
            title: 'School tour',
            desc: 'กิจกรรมแนะนำสถานที่ต่าง ๆ ภายใน MWIT'
          },
          {
            title: 'น้องถาม พี่ตอบ',
            desc: 'session ถาม-ตอบ และพูดคุยกับรุ่นพี่ศิษย์ปัจจุบันของ MWIT'
          },
        ],
      },
    ],
  },
  
]

const motionProp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}

import React from "react";

// reactstrap components

function Example() {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  return (
    <>
      <div className=" accordion-1">
        <Container>
          <Row>
            <Col className=" ml-auto" md="12">
              <div className=" accordion my-3" id="accordionExample">
                <Card>
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        How do I order?{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingTwo"
                    aria-expanded={openedCollapse === "collapseTwo"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseTwo"
                              ? ""
                              : "collapseTwo"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        How can i make the payment?{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseTwo"}
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                    id="collapseTwo"
                  >
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingThree"
                    aria-expanded={openedCollapse === "collapseThree"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseThree"
                              ? ""
                              : "collapseThree"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        How much time does it take to receive the order?{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseThree"}
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                    id="collapseThree"
                  >
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFour"
                    aria-expanded={openedCollapse === "collapseFour"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFour"
                              ? ""
                              : "collapseFour"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Can I resell the products?{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFour"}
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                    id="collapseFour"
                  >
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFifth"
                    aria-expanded={openedCollapse === "collapseFifth"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFifth"
                              ? ""
                              : "collapseFifth"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Where do I find the shipping details?{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFifth"}
                    aria-labelledby="headingFifth"
                    data-parent="#accordionExample"
                    id="collapseFifth"
                  >
                    <CardBody className=" opacity-8">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Example;
export default function Schedule() {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content={'https://openhouse.mwit.ac.th/' + meta.url}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:image'
          content={'img/ogimage.png'}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content={'img/ogimage.png'}
        />
      </Head>
    </>
  )
}
