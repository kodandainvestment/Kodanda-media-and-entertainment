export default function TermsCondition({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Terms &amp; Conditions</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition text-lg leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 text-sm text-gray-600 leading-relaxed space-y-6">

          <p className="text-gray-400 text-xs">Last updated: January 2026</p>

          {/* 1 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Introduction</p>
            <p>
              Welcome to Kodanda Media and Entertainment Pvt. Ltd. (“Company”, “we”, “our”, or “us”).
              By accessing or using our website, content, and services, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </div>

          {/* 2 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">2. Use of Website</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You agree to use this website for lawful purposes only</li>
              <li>You must not misuse, copy, or exploit content without permission</li>
              <li>Unauthorized use may result in legal action</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">3. Intellectual Property Rights</p>
            <p className="mb-2">
              All content on this website, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Videos</li>
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Branding</li>
            </ul>

            <p className="mt-3 mb-2">
              is the property of Kodanda Media and Entertainment Pvt. Ltd., unless stated otherwise.
              You may not:
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Reproduce</li>
              <li>Distribute</li>
              <li>Modify</li>
              <li>Republish</li>
            </ul>

            <p className="mt-2">without written permission.</p>
          </div>

          {/* 4 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Content Disclaimer</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Content is for educational and informational purposes only</li>
              <li>We do not guarantee accuracy, completeness, or reliability</li>
            </ul>

            <p className="mt-2 mb-1">Content should not be considered:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Financial advice</li>
              <li>Legal advice</li>
              <li>Professional advice</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">5. Third-Party Links</p>
            <p className="mb-2">
              Our website may contain links to third-party websites. We:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not control those websites</li>
              <li>Are not responsible for their content or policies</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">6. Limitation of Liability</p>
            <p className="mb-2">
              Kodanda Media shall not be held liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Any direct or indirect damages</li>
              <li>Loss of data or profits</li>
              <li>Decisions made based on our content</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">7. User Conduct</p>
            <p className="mb-2">Users must not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Post harmful or illegal content</li>
              <li>Attempt to hack or disrupt the website</li>
              <li>Violate any applicable laws</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">8. Termination</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We reserve the right to restrict or terminate access</li>
              <li>Remove content</li>
              <li>Take legal action if necessary</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">9. Changes to Terms</p>
            <p>
              We may update these Terms at any time. Continued use of the website means you accept updated terms.
            </p>
          </div>

          {/* 10 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">10. Governing Law</p>
            <p>
              These Terms shall be governed by the laws of India.
            </p>
          </div>

          {/* 11 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">11. Contact Information</p>
            <p>📧 kodandamedia@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
}