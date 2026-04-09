export default function PrivacyPolicy({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition text-lg leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 text-sm text-gray-600 leading-relaxed space-y-5">
          <p className="text-gray-400 text-xs">Last updated: January 2026</p>

          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Information We Collect</p>
            <p>We collect information you provide directly, such as your name, email address, phone number, and any messages submitted through our contact forms. We may also collect usage data automatically when you visit our website.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">2. How We Use Your Information</p>
            <p>Your information is used to respond to inquiries, deliver our services, send relevant updates, and improve our website experience. We do not sell your personal data to third parties.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">3. Cookies</p>
            <p>We use cookies to enhance your browsing experience and analyze site traffic. You may disable cookies through your browser settings, though some features may not function properly as a result.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Data Security</p>
            <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">5. Third-Party Services</p>
            <p>We may use third-party tools (e.g., analytics, email platforms) that have their own privacy policies. We encourage you to review those policies independently.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">6. Your Rights</p>
            <p>You have the right to access, update, or request deletion of your personal data at any time. Contact us at CEO@kodandamedia.com to exercise these rights.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">7. Contact</p>
            <p>For any privacy-related questions, reach us at CEO@kodandamedia.com or call +91-9876543345.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
