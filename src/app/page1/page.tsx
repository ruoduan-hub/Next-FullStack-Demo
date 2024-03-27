"use client"

import { useRouter } from 'next/navigation'

import style from './index.module.scss'

const Page1 = () => {
  const router = useRouter()

  const toHome = () => {
    router.push('/')
  }

  return <>
    <h1 className={style.text}>page1</h1>
    <button onClick={toHome}>toHome</button>
  </>
}

export default Page1