'use client'

import { FilloutStandardEmbed } from '@fillout/react'

export default function CommissionsPage() {
  return (
    <div>
      <div className="pt-14 md:pt-25 md:bg-[url('/home/home-bg.svg')] bg-right-top bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading text-gray-800 mb-4">
              Commissions
            </h1>
          </div>

          <div className="flex justify-center mt-8">
            <div className="max-w-2xl">
              <p className="mb-4">
                This form is to help me get an idea of what you are looking for
                so I know what questions to ask next, as well as to give me a
                rough idea of a quote to give you.
              </p>
              <p className="mb-4">
                Turn around time on commissions is 2-3 weeks and range in price
                from $60-200USD depending on what model you choose and how
                complex the pattern.
              </p>
              <p className="">
                Expect a follow up email to this form in 1-2 business day after
                submission.
              </p>
            </div>
          </div>

          <FilloutStandardEmbed filloutId="tUqkW5s2h1us" dynamicResize={true} />
        </div>
      </div>
    </div>
  )
}
