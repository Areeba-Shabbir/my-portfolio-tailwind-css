export default function Contact() {
    return (
      <div className="px-4 sm:px-8 bg-black lg:px-16 py-12">
        <div className="contact flex flex-col lg:flex-row justify-between gap-8">
          {/* Contact Text Section */}
          <div className="contact-text flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Contact <span className="text-blue-500">Me!</span>
            </h2>
            <p className="text-white mb-6">
              Lets create something amazing together! I am here to answer questions, explore new ideas, or chat about projects. Drop me a message!
            </p>
            <div className="list text-white space-y-4">
              <li>
                <a href="tel:03012497612">
                  <h5 className="font-semibold"> My contact number:</h5> 03012497612
                </a>
              </li>
              <li>
                <a href="mailto:shabbirareeba94@gmail.com">
                  <h5 className="font-semibold"> My Email:</h5> shabbirareeba94@gmail.com
                </a>
              </li>
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="contact-form flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Your Mobile Number"
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="How can I help you?"
                required
                className="w-full p-4 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
  
              <input
                type="submit"
                value="Send Message"
                className="w-full p-4 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
  