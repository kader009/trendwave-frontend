import Container from '@/components/ui/Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-8 relative overflow-hidden">
      <Container>
        <div className="max-w-[86rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">TrendWave</h1>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Discover trends, shop smart. TrendWave brings top brands & vendors
              together in one seamless experience.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="text-primary text-sm hover:underline"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Stay in the Loop!</h2>
            <p className="text-sm text-gray-400 mb-3">
              Get exclusive deals, style tips, and the latest news delivered to
              your inbox.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white rounded px-3 py-2 text-black w-full text-sm"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 text-sm bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  className="hover:text-white transition-colors"
                >
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-white transition-colors"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <p className="text-sm text-gray-400">
              123 Trend Street, Dhaka, Bangladesh
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Email: support@trendwave.com
            </p>
            <p className="text-sm text-gray-400">Phone: +880 123 456 789</p>

            <div className="mt-4 flex gap-4">
              {/* Social Icons (same as before) */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 hover:text-white transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.04h-2.6V12h2.6V9.65c0-2.57 1.54-4 3.89-4 1.13 0 2.31.2 2.31.2v2.54h-1.3c-1.28 0-1.68.8-1.68 1.61V12h2.85l-.46 2.91h-2.4v7.04A10 10 0 0022 12z" />
                </svg>
              </Link>

              {/* Twitter */}
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 hover:text-white transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.1 12.1 0 013 5.16a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.06a4.28 4.28 0 003.44 4.2 4.32 4.32 0 01-1.93.07 4.29 4.29 0 004 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0022.46 6z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 hover:text-white transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.58.01 4.84.07 1.17.05 1.97.24 2.43.41a4.9 4.9 0 011.77 1.15c.52.52.9 1.14 1.15 1.77.17.46.36 1.26.41 2.43.06 1.26.07 1.64.07 4.84s-.01 3.58-.07 4.84c-.05 1.17-.24 1.97-.41 2.43a4.9 4.9 0 01-1.15 1.77c-.52.52-1.14.9-1.77 1.15-.46.17-1.26.36-2.43.41-1.26.06-1.64.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.05-1.97-.24-2.43-.41a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.17-.46-.36-1.26-.41-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.84c.05-1.17.24-1.97.41-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.6 2.68c.46-.17 1.26-.36 2.43-.41C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33 0 7.06.06 5.75.12 4.6.36 3.65.75 2.61 1.19 1.74 1.74.9 2.58.06 3.42-.48 4.3-.93 5.35c-.39.95-.63 2.1-.69 3.41C-.01 9.67 0 10.07 0 12s.01 2.33.06 3.59c.06 1.31.3 2.46.69 3.41.45 1.05.99 1.94 1.83 2.78s1.73 1.38 2.78 1.83c.95.39 2.1.63 3.41.69 1.26.06 1.66.07 3.59.07s2.33-.01 3.59-.06c1.31-.06 2.46-.3 3.41-.69 1.05-.45 1.94-.99 2.78-1.83s1.38-1.73 1.83-2.78c.39-.95.63-2.1.69-3.41.06-1.26.07-1.66.07-3.59s-.01-2.33-.07-3.59c-.06-1.31-.3-2.46-.69-3.41a7.78 7.78 0 00-1.83-2.78A7.78 7.78 0 0020.35.9c-.95-.39-2.1-.63-3.41-.69C15.26-.01 14.87 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.6a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 hover:text-white transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.25 7H12v2.29h.08c.66-1.25 2.27-2.58 4.67-2.58 5 0 5.91 3.29 5.91 7.58V24h-5v-7.53c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.91 1.97-2.91 4v7.65H7.25V7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 relative z-10">
          {' '}
          {/* Added relative z-10 */}
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© {new Date().getFullYear()} TrendWave. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
