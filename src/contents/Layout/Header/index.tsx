import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const Header: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props

  return (
    <>
      <header className="sticky top-0 z-20 bg-opacity-70 backdrop-blur shadow-md">
        <div className="w-full navbar flex justify-center relative">
          <div className="absolute left-0 ml-2">
            <button
              className="btn btn-ghost text-3xl"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <BiMenu />
            </button>
          </div>
          <div className="">
            <Link href="/">
              <a>
                <button className="btn btn-ghost h-10">
                  <img src="/images/header_logo.png" alt="はるとんのブログ" style={{ width: 209, height: 34 }} />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
