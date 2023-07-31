import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import Pdfcard from '../components/pdfcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MetaHeader from '../components/metaHeader'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Activity | MWIT Open House 2023',
    url: 'activity',
    description:
      'รวมข้อมูลสำหรับกิจกรรมภายใน MWIT Open House 2023',
    img: 'ogimage.png',
  }
const File = [
    {
        name : "Google Form ลงทะเบียนเข้าร่วม MWIT OPEN HOUSE 2023: DISCOVERY",
        href : "https://forms.gle/9r7ax1gAwxDK5Hov6",
        src: "logo",
        desc: "ขอความกรุณาทุกท่านที่มีความประสงค์เข้าร่วมกิจกรรมร่วมมือกรอกข้อมูลลงทะเบียนเข้างานเพื่อความสะดวกในการเข้างานในวันจริง",
        button: "ฟอร์ม"
    },
    {
        name : "Google Form ลงทะเบียนเข้าแข่งขัน MWIT SPELLING BEE",
        href : "https://docs.google.com/forms/d/e/1FAIpQLSfKl3SQ5HzlAsrQ7BIPtD6Un0_LnH3VJBwxhOBglF0Ifd40Rw/closedform",
        src: "SpellingBee",
        desc: "สำหรับผู้ที่สนใจเข้าแข่งขันในกิจกรรม Spelling bee ในวันที่ 25 สิงหาคม 2566",
        button: "ฟอร์ม"
    }
  ]
const wcText = 'สวัสดีผู้ร่วมงาน MWIT Open House 2022\n\nกระผมในนามของโรงเรียนมหิดลวิทยานุสรณ์ หรือ MWIT ขอขอบคุณที่ท่านให้เกียรติมาแวะเวียนเยี่ยมชมและร่วมกิจกรรมเปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ (MWIT Open House 2022) ในปีนี้ สิ่งที่ท่านเห็นทั้งหมดเกิดจากน้ำพักน้ำแรงของนักเรียน ม.4 ม.5 ม.6 ของ MWIT ที่ภูมิใจนำเสนอผลจากการที่เขาได้รับการพัฒนาเมื่ออยู่ที่ MWIT รวมถึงบรรยากาศการใช้ชีวิตในรั้วโรงเรียนและหลังจากจบจาก MWIT ให้สังคมไทยได้ร่วมกันชื่นชม\n\nนักเรียน MWIT ทุกคน เป็นผู้ที่มีความสามารถพิเศษด้านวิทยาศาสตร์และคณิตศาสตร์ของประเทศไทย และมีความตั้งใจที่จะพัฒนาตนเองให้มีทักษะการเป็นนักวิจัยและความสามารถในการคิดค้นสิ่งใหม่ ประดิษฐ์และสร้างนวัตกรรม โดยที่เขาเลือก MWIT เพราะเป็นโรงเรียนแห่งโอกาส โอกาสที่จะทำให้เขาได้รับการพัฒนาอย่างรอบด้าน ทั้งด้านวิชาการ ความสามารถเฉพาะในการสร้างองค์ความรู้ และโอกาสในการพัฒนาการใช้ชีวิตอย่างกลมกลืนในสังคมใหญ่ เรียนรู้ที่จะเป็นผู้นำและผู้ตาม ใช้เหตุใช้ผลในการดำรงชีวิต เพื่อที่ร่วมกันสร้างสังคมไทยที่เจริญก้าวหน้า และเป็นสังคมที่อยู่ร่วมกันอย่างผาสุกได้\n\nทีมงานผู้จัดเป็นบุคลากร MWIT ทั้งโรงเรียน โดยมีคณะกรรมการนักเรียน (กน.) เป็นแกนนำ เราวางแผนและดำเนินการร่วมกันเพื่อนำเสนอผลสำเร็จในมิติต่างๆ ไม่ว่าจะเป็น \n- ผลการพัฒนาทักษะวิจัยผ่านกิจกรรม Science Project กว่า 90 โครงงาน\n- ผลการจัดการเรียนการสอนผ่านห้องเรียน Class@MWIT จากทุกสาขาวิชา \n- ผลการจัดการเรียนรู้แบบบูรณาการของกิจกรรม STEM Challenge ผ่าน MWIT Pitching\n- ผลการจัดกิจกรรม สอวน. และโอลิมปิกวิชาการ ซึ่งเราเป็นโรงเรียนแห่งเดียวที่เป็นศูนย์ สอวน. ทั้ง 8 สาขาผ่านกิจกรรม MWIT Square ครั้งที่ 14\n- ผลการสร้างบุคลากรของประเทศ ผ่านกิจกรรม Interview MWIT Alumni \n- ผลการเตรียมตัวก่อนเข้า MWIT ผ่านกิจกรรม TIPs & TRICKs by MWIT Students\n- ผลงานริเริ่มของนักเรียนในการเปิดพื้นที่ทำกิจกรรมที่ตนสนใจและมีประโยชน์ ผ่านนิทรรศการออนไลน์ MWIT Club ซึ่งในปีนี้เรามีถึง 56 ชุมนุม สำหรับนักเรียนเพียง 720 คนของเรา\n\nนอกจากนี้ยังมี Blog, Vlog, Virtual Tour, Gallery และ MWITagram ซึ่งเป็นผลงานของนักเรียนทั้งหมด\n\nกิจกรรมและผลงานที่แสดงในงาน MWIT Open House 2022 ครั้งนี้จะยืนยันในคุณลักษณะของนักเรียน MWIT ที่จะได้รับการหล่อหลอมและส่งเสริมเมื่อเข้ามาเป็นสมาชิกของครอบครัว MWIT ขอให้ผู้ร่วมงานทุกท่านใช้เวลากับกิจกรรมต่างๆ อย่างเต็มที่ เพื่อให้เรียนรู้ถึง MWIT DNA และสมรรถนะที่แท้จริงของนักเรียน MWIT ผมมั่นใจว่า หากได้ร่วมชมผลงานแล้วในทุกกิจกรรมแล้วก็คงอยากมาเป็นครอบครัว MWIT\n\nขอให้มีความสุขกับการชื่นชมผลงานของนักเรียน MWIT ด้วยกันนะครับ\n\nด้วยความเคารพ\n\nดร.วรวรงค์ รักเรืองเดช\nผู้อำนวยการโรงเรียนมหิดลวิทยานุสรณ์\n21 สิงหาคม 2565'
export default function Activity() {
  const [showWC, setShowWC] = useState(false)
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
        <div className='flex flex-col w-full'>
        <div
            style={{
              backgroundImage: `url(${'' + '/img/sky.webp'})`,
            }}
            className='w-full bg-cover bg-bottom sm:bg-fixed flex min-h-screen space-y-2'
        >
          <div className='flex font-CS font-bold text-2xl md:text-3xl lg:text-4xl'>
              Activities
          </div>
          <div className='w-full h-full py-6 flex items-center'>
          
            <div className='w-full max-w-7xl grid md:grid-cols-2 gap-6 mx-auto px-6'>
              <iframe
                type='text/html'
                className='w-full max-w-xl aspect-video rounded-xl'
                src='https://www.youtube.com/embed/NPT5ljzqJr4?modestbranding=1&color=white&iv_load_policy=3'
                frameBorder='0'
                allowFullScreen
              />
              <div className='flex flex-col gap-3'>
                <AnimateSharedLayout type='crossfade'>
                  <motion.div
                    className='flex flex-col gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl'
                    layoutId='welcome-canvas'
                  >
                    <motion.span
                      layoutId={'welcome-title'}
                      className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                    >
                      Welcome Message
                    </motion.span>
                    <motion.span
                      layoutId={'welcome-desc'}
                      className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                    >
                      สาส์นจากผู้อำนวยการโรงเรียนมหิดลวิทยานุสรณ์
                    </motion.span>
                    <div className='flex flex-col gap-2 mt-2'>
                      {wcText.split('\n\n').map(
                        (t, ti) =>
                          ti < 2 && (
                            <motion.span
                              key={ti}
                              layoutId={'welcome-ct-' + ti.toString()}
                              className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                            >
                              {t}
                            </motion.span>
                          ),
                      )}
                    </div>
                    <button
                      onClick={() => setShowWC(true)}
                      className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                    >
                      Read full text
                    </button>
                  </motion.div>
                  {showWC && (
                    <div className='fixed inset-0 pt-16 px-6 pb-6 z-50 overflow-y-scroll'>
                      <motion.div
                        className='w-full relative max-w-2xl mx-auto flex flex-col gap-1 bg-white/80 shadow-lg backdrop-blur-md px-4 py-5 rounded-xl'
                        layoutId='welcome-canvas'
                      >
                        <div
                          className='absolute right-3 top-3 cursor-pointer z-30'
                          onClick={() => setShowWC(false)}
                        >
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className='text-3xl text-gray-400/60 hover:text-red-500/60 transition-colors duration-300'
                          />
                        </div>
                        <motion.span
                          layoutId={'welcome-title'}
                          className='font-CS text-3xl md:text-4xl font-bold text-bmw'
                        >
                          Welcome Message
                        </motion.span>
                        <motion.span
                          layoutId={'welcome-desc'}
                          className='font-CS text-base md:text-lg lg:text-xl text-blue-500'
                        >
                          สาส์นจากผู้อำนวยการโรงเรียนมหิดลวิทยานุสรณ์
                        </motion.span>
                        <div className='flex flex-col gap-2 mt-2'>
                          {wcText.split('\n\n').map((t, ti) =>
                            ti < 2 ? (
                              <motion.span
                                key={ti}
                                layoutId={'welcome-ct-' + ti.toString()}
                                className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                              >
                                {t}
                              </motion.span>
                            ) : (
                              <span
                                className='font-IBMPlexLoop leading-relaxed md:leading-relaxed text-sm md:text-base text-black'
                                key={ti}
                              >
                                {t.split('\n').map((tn, tni) => (
                                  <Fragment key={tni}>
                                    {tn}
                                    <br />
                                  </Fragment>
                                ))}
                              </span>
                            ),
                          )}
                        </div>
                        <button
                          onClick={() => setShowWC(false)}
                          className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                        >
                          Close
                        </button>
                      </motion.div>
                    </div>
                  )}
                </AnimateSharedLayout>
              </div>
              </div>
            </div>
        </div>
        </div>
    </>
      
  )
}