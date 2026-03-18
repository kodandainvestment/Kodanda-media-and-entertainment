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
        <div className="overflow-y-auto px-8 py-6 text-sm text-gray-600 leading-relaxed space-y-5">
          <p className="text-gray-400 text-xs">Last updated: January 2026</p>

          <div>
            <p className="font-semibold text-gray-800 mb-1">1. Acceptance of Terms</p>
            <p>By accessing or using the Kodanda Media & Entertainment website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our site.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">2. Services</p>
            <p>Kodanda Media provides digital marketing, video production, brand identity, and related services. All service details, deliverables, and timelines are defined in individual client agreements.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">3. Intellectual Property</p>
            <p>All content on this website — including text, graphics, logos, and media — is the property of Kodanda Media and is protected by applicable copyright laws. Unauthorized use is strictly prohibited.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">4. Client Responsibilities</p>
            <p>Clients are responsible for providing accurate information, timely feedback, and necessary approvals. Delays caused by the client may affect project timelines and deliverables.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">5. Payment Terms</p>
            <p>Payment schedules are outlined in individual project agreements. Late payments may result in paused work or additional charges as specified in the contract.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">6. Limitation of Liability</p>
            <p>Kodanda Media shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website beyond the amount paid for the specific service.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">7. Termination</p>
            <p>Either party may terminate a service agreement with written notice as per the terms defined in the project contract. Completed work up to the termination date will be billed accordingly.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">8. Governing Law</p>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Indore, Madhya Pradesh.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1">9. Contact</p>
            <p>For any questions regarding these terms, contact us at CEO@kodandamedia.com or +91-9876543345.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
