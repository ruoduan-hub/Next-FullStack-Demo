import { redirect } from 'next/navigation'

const Page2 = () => {

  redirect('/login')

  return <>
    <h1>page2</h1>
    <button>toHome</button>
  </>
}

export default Page2