export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 sm:py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">

          {/* Marca */}
          <div className="text-center md:text-left">
            <div className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">Pedro Castro</div>
            <div className="text-xs sm:text-sm text-gray-500">AI Engineer & Automation Specialist</div>
          </div>

          {/* Links */}
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600">
            <a href="https://linkedin.com/in/pedrocastropro" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/pedrocastropro" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="mailto:hello@pedrocastro.pro" className="hover:text-gray-900 transition-colors">
              Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center text-xs sm:text-sm text-gray-400">
          © 2025 Pedro Castro. Made with curiosity.
        </div>
      </div>
    </footer>
  )
}
