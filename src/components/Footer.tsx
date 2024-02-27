
import Link from "next/link"

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
            Embark on your coding journey with GEC Jamui Coding Club and unlock the endless possibilities of technology. Whether you're dreaming of building the next big app, launching a startup, or simply mastering the art of coding, we're here to support you every step of the way. Join us today and let's code together!
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors duration-300">Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>GEC Jamui</p>
            <p>Amrath 811313</p>
            <p>Email: santoshkumar23kky@gmail.com</p>
            <p>Phone: (+91) 9835212815</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 GEC Jamui Coding Club. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer