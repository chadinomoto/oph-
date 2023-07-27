import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Document | MWIT Open House 2023',
    url: 'document',
    description:
      'รวมเอกสารทั้งหมดที่จำเป็นสำหรับการเข้าร่วมงาน MWIT Open House 2023',
    img: 'ogimage.png',
  }
const File = [
    {
        name : "Google Form",
        href : "https://forms.gle/9r7ax1gAwxDK5Hov6",
        pic: "",
        title: "Google Form ลงทะเบียนเข้าร่วมกิจกรรม",
        desc: "ขอความกรุณาทุกท่านที่มีความประสงค์เข้าร่วมกิจกรรมร่วมมือกรอกข้อมูลลงทะเบียนเข้างานเพื่อความสะดวกในการเข้างานในวันจริงa"
    },

]
export default function eventregis() {
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
        <main className='flex flex-col w-full'>
            <div style={{backgroundImage: `url(${process.env.CDN_URL + '/img/sky.webp'})`,}} className={'w-full bg-cover bg-bottom sm:bg-fixed flex items-end min-h-screen relative justify-self-center self-center space-y-2'}>
                <div className='font-CS text-3xl md:text-4xl font-bold text-bmw text-center'>
                    Doc
                </div>
            </div>
            {/*<div className='w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-6'>
            <span className='font-CS font-bold text-2xl md:text-3xl lg:text-4xl mt-5 text-white'>
              กิจกรรมตามสาขาวิชา
            </span>
            <div className='flex flex-wrap gap-4 justify-center'>
              {subjAct.File((s, si) => (
                <div
                  key={si}
                  className='flex flex-col group w-full max-w-sm overflow-hidden rounded-xl'
                >
                  <img
                    src={
                      process.env.CDN_URL + '/img/subject/' + s.img + '.webp'
                    }
                    className='w-full'
                  />

                  <div
                    className={
                      'w-full relative grid bg-black ' +
                      (s.vl ? 'grid-cols-2' : 'grid-cols-1')
                    }
                  >
                    <div className='flex flex-col absolute bottom-full right-0 left-0 px-3 py-2 bg-black/60 group-hover:bg-black/80 transition-all duration-300 backdrop-blur-md'>
                      <span className='font-CS font-semibold text-white text-xl'>
                        {s.name}
                      </span>
                      <span className='font-IBMPlex font-semibold text-blue-300 text-base'>
                        {s.sub}
                      </span>
                    </div>
                    {s.vl && (
                      <Link href={'/lab/' + s.vl}>
                        <a className='w-full justify-center items-center font-IBMPlex font-semibold flex gap-1 py-2 px-3 bg-ymw/20 text-ymw/40 hover:bg-ymw/30 hover:text-white/70 transition-colors duration-300'>
                          <FontAwesomeIcon
                            icon={faFlaskVial}
                            className='pb-1'
                          />
                          <span className=''>Virtual Lab</span>
                        </a>
                      </Link>
                    )}
                    <Link href={'/curriculum/' + s.curr}>
                      <a className='w-full justify-center items-center font-IBMPlex font-semibold flex gap-1 py-2 px-3 bg-bmw/30 text-white/40 hover:bg-bmw/50 hover:text-white/70 transition-colors duration-300'>
                        <FontAwesomeIcon
                          icon={faFileInvoice}
                          className='pb-1'
                        />
                        <span className=''>Curriculum</span>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
              </div>
                    </div>*/}
    
        </main>
    </>
      
  )
}