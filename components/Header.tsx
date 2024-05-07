import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'  // Importing the Image component

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="relative flex items-center justify-between">
            <div className="z-10 mr-3">
              {/* Using Image component for logo */}
              <Image 
                src="/static/images/logo.png" 
                alt="logo" 
                width={80}   // Specify the width
                height={80}  // Specify the height
                className="h-20 w-20"
              />
            </div>
            {/* Background image with Image component */}
            <Image 
              src="/static/images/LinkedinHeader2.png"
              alt="background"
              layout="fill"  // Makes the image cover the designated area
              className="absolute top-0 left-0 z-0 opacity-50"
            />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
