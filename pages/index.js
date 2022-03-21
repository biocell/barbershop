import Head from 'next/head';
import Team from '../components/Team';
import Offer from '../components/Offer';
import Employees from '../components/Employees';
import JobOpenings from '../components/JobOpenings';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Barber Shop</title>
      </Head>
      <Team />
      <Offer />
      <Employees />
      <JobOpenings />
      <ContactUs/>
      </div>
  )
}
