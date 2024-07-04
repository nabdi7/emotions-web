import React from 'react'

const Terms = () => {
  return (
    <section className="min-h-screen font-sans bg-white">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="rounded-lg shadow-sm">
          <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: July 4th, 2024</p>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">WHO WE ARE</h2>
              <p className="text-sm text-gray-700">
                This page informs website visitors about QD Web Designs policies regarding the collection, use, and 
                disclosure of Personal Information. By using our service, you agree to these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">PURPOSE OF THIS PRIVACY POLICY</h2>
              <p className="text-sm text-gray-700">
                This policy helps you understand how we collect, use, and process your personal data. It applies 
                whether youre a customer or just visiting our website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">INFORMATION WE COLLECT & HOW WE PROCESS DATA</h2>
              <p className="text-sm text-gray-700">
                We are a data Processor and Collector. We process data received from our website and services, 
                taking proportionate precautions in storing such information for short periods on our secure servers 
                until permanently destroyed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-sm text-gray-700">
                QD Web Designs may update this privacy policy at any time. When we do, we will revise the updated 
                date. You acknowledge and agree that it is your responsibility to review this privacy policy 
                periodically and become aware of modifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Terms
