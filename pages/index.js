import Head from 'next/head'
import { 
  FaTwitter, 
  FaGoogle, 
  FaFacebookF, 
  FaRegEnvelope 
} from 'react-icons/fa';
import { MdOutlineLock } from 'react-icons/md'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Weverse Login</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
        <div className='text-left font-bold'>
          <span className='text-teal-300'>weverse</span> account
        </div>
        <div className='py-10'>
          <h2 className='text-3xl font-bold text-teal-300 mb-2'>
            Sign in to Account
          </h2>
          <div className='border-2 w-10 border-teal-300 inline-block mb-2'></div>
          <div>
          <div className='flex justify-center my-2'>
            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaTwitter className='text-sm'/> 
            </a>
            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaGoogle className='text-sm'/> 
            </a>
            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
            <FaFacebookF className='text-sm'/> 
            </a>
          </div>
          <p className='text-gray-400 my-3'>or use your e-mail account</p>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> 
            <FaRegEnvelope className='text-gray-400 m-2' />
            <input type='email' name='email' placeholder='E-mail' className='bg-gray-100 outline-none text-sm flex-1'/>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-100 w-64 p-2 flex items-center'> 
            <MdOutlineLock className='text-gray-400 m-2' />
            <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
            </div>
          </div>
          <a href='#' className='m-4 border-2 border-teal-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-teal-300 hover:text-white'>Sign In</a>
          </div> {/* social login */}
        </div>
        </div>
        {/* Sign in section */}
        <div  className="w-2/5 bg-teal-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className='text-3xl font-bold mb-2'>Official for All Fans, Weverse</h2>
          <div className='border-2 w-10 border-white inline-block mb-2'></div>
          <p className='mb-2'>Global fandom platform for the fans and artists around the world.</p>
          <a href='#' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-teal-400'>Sign Up</a>
        </div> 
        {/* Sign up section */}
        </div>
      </main>

    
    </div>
  )
}
