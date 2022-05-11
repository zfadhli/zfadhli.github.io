import Head from 'next/head'
import Link from 'next/link'
import LocalImage from '../components/local-image'

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
          <div className='container py-8'>
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
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div className='grid grid-cols-2 gap-x-8'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-extrabold tracking-tight'>Zulfadhli Zakari</h1>
                <p className='pt-1 text-gray-600'>Web developer</p>
                <p className='pt-4 text-gray-700'>
                  I am a passionate developer who build things for the web with NodeJS and Reactjs
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
                        <button className='button'>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
