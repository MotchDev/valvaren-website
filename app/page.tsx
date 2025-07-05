import Image from 'next/image'
import categories from '@/data/categories.json'
import products from '@/data/products.json'

export default function Home() {
  const categoriesWithItems = categories
    .map(category => ({
      ...category,
      items: products
        .filter(product => product.category === category.id)
        .sort((a, b) => a.title.localeCompare(b.title)),
    }))
    ?.filter(category => category.items.length > 0)

  return (
    <main className="pt-14 md:pt-25">
      <div className="flex flex-col md:flex-row md:h-[600px]">
        <div className="">
          <Image
            src="/home/promo.png"
            alt="Promotion image"
            width={838}
            height={745}
            loading="eager"
            className="max-h-full object-cover"
          />
        </div>
        <div className="relative flex-1 bg-brown md:mt-0">
          <div className="hidden absolute overflow-hidden -left-20 top-0 h-[600px] md:block">
            <Image
              src="/home/promo-wave.svg"
              height={600}
              width={285}
              alt="Transitons background to a new color"
            />
          </div>
          <div className="absolute left-[-1px] w-[calc(100%+1px)] -top-10 overflow-hidden md:hidden">
            <Image
              src="/home/promo-wave-mobile.svg"
              height={600}
              width={285}
              alt="Transitons background to a new color"
              className="w-full"
            />
          </div>
          <div className="text-white relative px-4 pt-6 md:px-12 md:py-6 flex items-center h-full z-1">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl mb-6 uppercase">
                Welcome!
              </h1>
              <p className="mb-4 md:text-xl">
                Hello and thank you for your interest in my artwork! I
                specialize in creating reptile and amphibian sculptures.
              </p>
              <p className="mb-4 md:text-xl">
                If you wish you commission me please send me an email at{' '}
                <a href="mailto:commissions@valvaren.com" className="underline">
                  commissions@valvaren.com
                </a>{' '}
                or use the{' '}
                <a href="/commissions" className="underline">
                  contact form
                </a>{' '}
                on my commissions page.
              </p>
              <p className="mb-4 md:text-xl">
                Below you can find what I have available with pricing estimates.
                Pricing varies based on pattern and morph chosen.
              </p>
              <p className="md:text-xl">— Fen</p>
            </div>
          </div>
          <div className="absolute left-[-1px] w-[calc(100%+1px)] -bottom-20 overflow-hidden md:hidden">
            <Image
              src="/home/promo-wave-mobile.svg"
              height={600}
              width={285}
              alt="Transitons background to a new color"
              className="rotate-180 w-full"
            />
          </div>
        </div>
      </div>
      <div className="md:bg-[url('/home/home-bg.svg')] bg-right-top bg-no-repeat pt-40 md:pt-20">
        <div className="flex justify-center md:px-6">
          <div className="w-full max-w-7xl">
            {categoriesWithItems.map(category => (
              <div key={category.id} className="mb-20">
                <h1 className="text-5xl md:text-6xl font-heading uppercase text-gray-800 px-6">
                  {category.title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map(item => (
                    <div key={item.id} className="flex flex-col items-center ">
                      <div
                        className={`${item.clipPath} bg-[#EB513B] w-[354px] h-[354px] md:h-[416px] md:w-[416px] flex items-center justify-center`}
                      >
                        <div className={item.clipPath}>
                          <div className="overflow-hidden w-[340px] h-[340px] md:h-[400px] md:w-[400px] flex items-center justify-center">
                            <Image
                              className="w-full h-auto object-cover"
                              src={item.image}
                              width={item.imageWidith}
                              height={item.imageHeight}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div>
                          <div className="text-gray-800 font-heading text-2xl md:text-4xl">
                            {item.title}
                          </div>
                          <div className="text-gray-600 font-bold text-sm md:text-xl">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
