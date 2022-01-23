import Head from 'next/head'
import Image from 'next/image'
import banner from '../public/images/home.png'

export default function Home() {
  return (
    <div>
      <Head>
      <title>Barber Shop</title>
      </Head>
      <span className='team'>
          <h1>JOIN OUR TEAM</h1>
      </span>
      <span className='offer'>
        <span className='offer-items'>
        <h2>WHAT WE OFFER</h2>
        <p>Nothing beats having a happy team, we believe in unity and oneness and this is one of<br/> the values we uphold at Fierce Cuts </p>
        <div className='offer-img'>dujvj</div>
        </span>
        </span>
      </div>
  )
}
