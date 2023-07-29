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
            desc: "นักเรียนทั้งที่ลงทะเบียนในระบบและนักเรียนที่เข้าร่วมกิจกรรมแบบ Walk in ลงทะเบียนที่ประตูข้างโรงเรียน ได้ตั้งแต่ 08.00 น. ไปจนตลอดทั้งวัน"
          },
          {
            title: "ลงทะเบียนกิจกรรม Spelling Bee",
            desc: "ลงทะเบียนเข้าร่วมกิจกรรม Spelling Bee"
          },
          {
            title: "ลงทะเบียนกิจกรรม MWIT Challenge",
            desc: "ลงทะเบียนเข้าร่วมกิจกรรม MWIT Challenge รอบแรก ในระหว่างเวลา 09.00 - 10.30 น. "
          }
        ]
      },
      {
        time: '09.00 - 12.00 น.',
        act: [
          {
            title: 'การนำเสนอโครงงาน',
            desc: 'รับชมการนำเสนอโครงงานของนักเรียน MWIT กว่า 90 โครงงานพร้อม Q&A session ที่เปิดโอกาสให้ผู้ชมถามข้อสงสัย',
            icon: faPersonChalkboard,
          },
          {
            title: 'MWIT CURRICULUM DISCOVERY EXHIBITION',
            desc: 'นิทรรศการสาขาวิชาและการจัดการเรียนการสอน ที่จะอธิบายหลักสูตรการเรียนการสอนของนักเรียน MWIT (หลังจาก 10.30 น. เป็นต้นไป จะมีเกมให้เล่น)'
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
            desc: 'นิทรรศการสาขาวิชาและการจัดการเรียนการสอน ที่จะอธิบายหลักสูตรการเรียนการสอนของนักเรียน MWIT'
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
            desc: "นักเรียนทั้งที่ลงทะเบียนในระบบและนักเรียนที่เข้าร่วมกิจกรรมแบบ Walk in ลงทะเบียนที่ประตูข้างโรงเรียน"
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
            title: 'กิจกรรมสาขาคณิตศาสตร์และวิทยาการคำนวณ',
            icon: faLightbulb,
            desc: 'Cath-Mom - เป็นกิจกรรมแนะนำสาขาวิชา การจัดการเรียนการสอน สื่อต่างๆ และมีตัวอย่างโจทย์ปัญหาที่แก้ได้โดยบูรณาการความรู้ทางคณิตศาสตร์และวิทยาการคำนวณ ให้ผู้เข้าร่วมได้ร่วมแสดงความคิดเห็น ตอบคำถามชิงรางวัล',
          },
          {
            title: 'กิจกรรมสาขาวิชาศิลปศาสตร์ 1 (สังคมศึกษาและศิลปะ)',
            icon: faLightbulb,
            desc: 'Liberal Arts for Fun - เรียนรู้วิธีการเรียนแบบศิลปศาสตร์ ที่ผสมผสานวิชาสังคมศึกษาและศิลปะได้อย่างลงตัวและสนุกสนาน',
          },
        ],
      },
      {
        time: '13.00 - 16.00 น.',
        act: [
          {
            title: 'MWIT Challenge ภาคบ่าย',
            desc: 'กิจกรรม STEM Challenge ที่จะให้ผู้เข้าร่วมได้ฝึกทักษะการออกแบบสิ่งประดิษฐ์เพื่อแก้ปัญหาตามที่ได้รับมอบหมาย แบ่งออกเป็น 2 รอบ รอบละ 90 นาที่ รับ 30 ทีม ทีมละ 3 คน ต่อรอบ เป็นกิจกรรมแบบ Walk in'
          },
          {
            title: 'กิจกรรมสาขาวิชาศิลปศาสตร์ 2 (ภาษาไทย)',
            icon: faLightbulb,
            desc: 'Thai@MWIT - ทำกิจกรรมทดสอบทักษะและความรู้เกี่ยวกับภาษาไทย',
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
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />
      </Head>

      <main className='w-full bg-sdbg/75'>
        <div className='flex flex-col text-white gap-6 items-center mx-auto justify-self-center w-full max-w-6xl px-8 py-10'>
          <span className='font-CS font-bold text-3xl md:text-4xl lg:text-5xl'>
            Schedule
          </span>
          <div className='flex flex-col sm:grid sm:grid-cols-fitc-2 md:grid-cols-fitc-3 gap-x-4 gap-y-4 font-IBMPlex font-medium text-lg lg:text-xl'>
            {timetb.map((t, i) => (
              <Fragment key={i}>
                <motion.span
                  className='text-center text-sddt text-xl md:text-lg lg:text-xl md:text-end font-bold col-span-2 md:col-span-1'
                  {...motionProp}
                >
                  {t.date}
                </motion.span>
                {t.slot.map((s, id) => (
                  <Fragment key={id}>
                    <motion.span
                      className='col-start-1 md:col-start-2 text-sdtm whitespace-nowrap'
                      {...motionProp}
                    >
                      {s.time}
                    </motion.span>
                    <div
                      className={
                        (id === t.slot.length - 1 && 'mb-4') +
                        ' flex flex-col gap-2 border-l-2 border-sdtt pl-3'
                      }
                    >
                      {s.act.map((a, idx) => (
                        <motion.div
                          className='flex flex-col gap-1'
                          key={idx}
                          {...motionProp}
                        >
                          <div className='flex flex-col gap-2'>
                            {/* <FontAwesomeIcon
                              icon={a.icon}
                              className='h-[0.8em] pt-1'
                            /> */}
                            {/*{a.live && (
                              <div className='flex w-fit h-fit items-center gap-1 px-2 text-white bg-gradient-to-r from-sdf1 to-sdf2 rounded-md'>
                                <FontAwesomeIcon
                                  icon={faFacebook}
                                  className='text-xs'
                                />
                                <span className='text-sm font-semibold'>
                                  LIVE
                                </span>
                              </div>
                            )}*/}
                            <span className='text-lg lg:text-xl text-sdtt hover:text-sdth transition-colors duration-500'>
                              {a.title}
                            </span>
                          </div>
                          {a.desc && (
                            <span className='font-IBMPlexLoop font-normal text-sm sm:text-base lg:text-lg'>
                              {a.desc}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
