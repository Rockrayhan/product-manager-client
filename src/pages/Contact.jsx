import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'> Contact Us </h1>

            <div className="container my-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-white p-10 shadow-xl">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold text-teal-950">
                Want To Get In Touch ?
              </h1>
              <p className="text-gray-600">
                Do you have any kind of question in your mind ? if so , please
                don't hasitate to contact us.
              </p>

              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <h3 className="font-semibold text-lg"> mastertravels@gmail.com </h3>
              </div>
              <hr />
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <h3 className="font-semibold text-lg"> +880 1682011307 </h3>
              </div>
              <hr />
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <h3 className="font-semibold text-lg">
                  Taltola, Agargaon, Dhaka, Bangladesh
                </h3>
              </div>
            </div>
          </div>

{/* contact form  */}
<div className="col-span-2 shadow-xl p-5">
  <form
    className="mt-10 p-8 bg-transparent rounded-lg "
  >
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Name
      </label>
      <input
        name="client_name"
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-gray-100 transition-colors"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Email
      </label>
      <input
        name="client_email"
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-gray-100 transition-colors"
        placeholder="Enter Your Email"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Message
      </label>
      <textarea
        name="client_message"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-gray-100 transition-colors"
        placeholder="Write your message here..."
      ></textarea>
    </div>
    <div className="flex justify-center">
      <input
        type="submit"
        value="Send Message"
        className="px-6 py-3 w-full bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700"
      />
    </div>
  </form>
</div>
        </div>
      </div>
        </div>
    );
};

export default Contact;