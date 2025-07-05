import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.facebook.com/ValvarenArt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://bsky.app/profile/valvaren.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Image
              src="/icons/bluesky.svg"
              alt="Bluesky"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.instagram.com/valvarenart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="text-center text-white">
          <p>&copy; {currentYear} Valvaren. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
