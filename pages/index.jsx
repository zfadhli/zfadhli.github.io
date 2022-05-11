import Head from 'next/head'
import Link from 'next/link'
import LocalImage from '../components/local-image'
import ExternalLinkIcon from '../public/icons/external-link.svg'
import LocationMarkerIcon from '../public/icons/location-marker.svg'
import InboxIcon from '../public/icons/inbox.svg'
import PhoneIcon from '../public/icons/phone.svg'
import GithubIcon from '../public/icons/github.svg'
import TwitterIcon from '../public/icons/twitter.svg'

const projects = [
  {
    imgUrl: '/supabase-bookmark.png',
    alt: 'Supabase bookmark',
    title: 'Supabase Bookmark',
    url: 'https://supabase-bookmark.vercel.app/',
    website: 'supabase-bookmark.vercel.app',
    description: 'A bookmark application build with Next.js and Supabase',
  },
  {
    imgUrl: '/tailwind-unsplash-gallery.png',
    alt: 'Tailwind Unsplash Gallery',
    title: 'Tailwind Unsplash Gallery',
    url: 'http://tailwind-unsplash-gallery.vercel.app/',
    website: 'tailwind-unsplash-gallery.vercel.app',
    description: 'Next.js application for unsplash gallery',
  },
  {
    imgUrl: '/tailwind-devkit-landing-3.png',
    alt: 'Tailwind Devkit Landing 3',
    title: 'Tailwind Devkit Landing 3',
    url: 'https://tailwind-devkit-landing-3.vercel.app/',
    website: 'tailwind-devkit-landing-3.vercel.app',
    description: 'This is a clone of Devkit Landing 3. Build with Next.js and Tailwindcss.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Zulfadhli Zakari</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full min-h-screen antialiased bg-indigo-50 text-slate-900 font-inter'>
        <section className='border-t-8 border-indigo-600'>
          {/* <div className='container py-8'>
            <div className='flex items-center justify-between'>
              <Link href='/'>
                <a className='text-xl font-bold'>zfadhli</a>
              </Link>
              <nav className='flex items-center gap-x-4'>
                <Link href='/'>
                  <a className='font-medium border-b-4 border-transparent hover:border-white'>
                    Home
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='font-medium border-b-4 border-transparent hover:border-white'>
                    Contact
                  </a>
                </Link>
              </nav>
            </div>
          </div> */}
        </section>

        <section className='section'>
          <div className='container'>
            <div className='grid grid-cols-2 gap-x-8'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600'>
                  Zulfadhli Zakari
                </h1>
                <p className='pt-1 text-gray-700'>Web developer</p>
                <p className='pt-4 text-lg text-gray-700'>
                  I am a passionate developer who build things for the web with NodeJS and Reactjs.
                </p>
              </div>
              <div className='flex items-center justify-end'>
                <div className=' w-52 h-52'>
                  <LocalImage
                    className='border-4 rounded-full shadow-md border-slate-200'
                    src='/profile-small.png'
                    alt='Zulfadhli Zakari'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div>
              <h2 className='text-4xl font-bold tracking-tight'>Projects</h2>
            </div>
            <div className='pt-10 space-y-8'>
              {projects.map((project) => (
                <div className='p-8 bg-white rounded-lg shadow-md'>
                  <div className='flex space-x-8'>
                    <div>
                      <div className='w-[400px] h-[400px]'>
                        <LocalImage
                          className='rounded-lg shadow'
                          src={project.imgUrl}
                          alt={project?.alt}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col justify-between flex-1'>
                      <div>
                        <h3 className='text-xl font-bold'>{project.title}</h3>
                        <a href={project.url} className='text-sm text-slate-500'>
                          {project?.website}
                        </a>
                        <p className='pt-6 text-sm text-gray-700'>{project.description}</p>
                      </div>
                      <div className='mt-auto'>
                        <a
                          href={project.url}
                          className='relative space-x-2 button'
                          target='_blank'
                          rel='noopener'
                        >
                          <ExternalLinkIcon className='w-6 h-6' />
                          <span>Visit Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div>
              <h2 className='text-4xl font-bold tracking-tight'>Contact</h2>
            </div>
            <div className='grid grid-cols-2 pt-10 gap-x-8'>
              <div>
                <h3 className='text-xl font-bold text-slate-700'>Get in touch</h3>
                <div className='pt-4 space-y-2'>
                  <div className='flex gap-x-2'>
                    <LocationMarkerIcon className='w-7 h-7' />
                    <span className='text-slate-700'>
                      No. 3, Kampung Pulau Belayar, 33300 Gerik, Perak, Malaysia
                    </span>
                  </div>
                  <div className='flex gap-x-2'>
                    <InboxIcon className='w-6 h-6' />
                    <span className='text-slate-700'>zulfadhlizakari@gmail.com</span>
                  </div>
                  <div className='flex gap-x-2'>
                    <PhoneIcon className='w-6 h-6' />
                    <span className='text-slate-700'>+60134432488</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold text-slate-700'>Socials</h3>
                <div className='pt-4 space-y-2'>
                  <div className='flex gap-x-2'>
                    <GithubIcon className='w-6 h-6' />
                    <a
                      className='border-b-4 border-transparent hover:border-indigo-600'
                      href='https://github.com/zfadhli'
                      target='_blank'
                      rel='noopener'
                    >
                      Github
                    </a>
                  </div>
                  <div className='flex gap-x-2'>
                    <TwitterIcon className='w-6 h-6' />
                    <a
                      className='border-b-4 border-transparent hover:border-indigo-600'
                      href='https://twitter.com/zfadhlizakari'
                      target='_blank'
                      rel='noopener'
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-8 text-center'>
          <div className='text-sm'>
            Build with ❤ by{' '}
            <a
              className='font-bold'
              href='https://github.com/zfadhli'
              target='_blank'
              rel='noopener'
            >
              zfadhli
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
