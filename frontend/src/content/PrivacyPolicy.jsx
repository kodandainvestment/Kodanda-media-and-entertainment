import { useNavigate } from "react-router-dom";
export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C91111] text-[#C91111] font-medium text-sm transition-all duration-300 hover:bg-[#C91111] hover:text-white hover:shadow-lg"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to Home
        </button>

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="text-sm text-gray-600 leading-relaxed space-y-6">

          <p className="text-gray-400 text-xs text-center">
            Last updated: January 2026
          </p>

          {/* 1 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Introduction</p>
            <p>
              Kodanda Media and Entertainment Pvt. Ltd. respects your privacy and is committed to protecting your personal data.
            </p>
          </div>

          {/* 2 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">2. Information We Collect</p>
            <p className="mb-2">We may collect the following types of information:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-gray-700">Personal Information:</span> Name, email address, contact details
              </li>
              <li>
                <span className="font-medium text-gray-700">Non-Personal Information:</span> Browser type, IP address, device info, website usage data
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">3. How We Use Your Information</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improve user experience</li>
              <li>Respond to inquiries</li>
              <li>Send updates (if subscribed)</li>
              <li>Analyze website performance</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Cookies</p>
            <p className="mb-2">We may use cookies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Understand user behavior</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="mt-2">You can disable cookies in your browser settings.</p>
          </div>

          {/* 5 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">5. Data Sharing</p>
            <p className="mb-2">We do not sell personal data. We may share data with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Service providers (hosting, analytics)</li>
              <li>Legal authorities if required</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">6. Data Security</p>
            <p>
              We take reasonable steps to protect your data, but no system is 100% secure.
            </p>
          </div>

          {/* 7 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">7. Third-Party Services</p>
            <p className="mb-2">We may use:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Analytics</li>
              <li>YouTube embeds</li>
              <li>Social media integrations</li>
            </ul>
            <p className="mt-2">
              These platforms have their own privacy policies.
            </p>
          </div>

          {/* 8 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">8. Your Rights</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of communications</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">9. Children’s Privacy</p>
            <p>
              Our content is not directed at children under 13. We do not knowingly collect data from minors.
            </p>
          </div>

          {/* 10 */}
          <div>
            <p className="font-semibold text-gray-800 mb-1">10. Changes to Privacy Policy</p>
            <p>
              We may update this policy from time to time.
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