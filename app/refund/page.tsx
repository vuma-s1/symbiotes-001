import React from "react";



const RefundPage = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div className="max-w-4xl mx-auto pt-40 pb-16 ont-dmsans">
        <h1 className="text-3xl font-bold mb-8 text-[#d0ed01]">Refund Policy</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#d0ed01]">Refund Policy - Symbiotes</h2>
          <p className="text-sm text-gray-400 mb-4">
            Last updated: January 07, 2025
          </p>

          <main className="container space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">1. Overview</h2>
              <p className="text-gray-300 mb-4">
                This refund policy outlines the terms and conditions for refunds and cancellations for services purchased through Symbiotes. We are committed to ensuring customer satisfaction and providing clear guidelines for refund requests.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">2. Refund Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Refund requests must be submitted within 7 days of purchase</li>
                <li>The service must not have been fully utilized or completed</li>
                <li>Refund requests must include a valid reason for the refund</li>
                <li>Technical issues preventing service usage may qualify for a refund</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">3. Refund Process</h2>
              <p className="text-gray-300 mb-4">
                Once a refund is approved, it will be processed within 3 business days. The refund will be credited to the original payment method used for the purchase.
              </p>
              <p className="text-gray-300 mb-4">
                Please note that the time taken for the refund to reflect in your account may vary depending on your payment provider.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">4. Non-Refundable Items</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Services that have been fully completed</li>
                <li>Services purchased more than 7 days ago</li>
                <li>Services that have been partially used beyond 50% completion</li>
                <li>Any additional features or add-ons purchased separately</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">5. Cancellation Policy</h2>
              <p className="text-gray-300 mb-4">
                You may cancel your service subscription at any time. However, please note that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Cancellations must be made at least 24 hours before the next billing cycle</li>
                <li>No refunds will be provided for partial months of service</li>
                <li>Any unused credits or services will be forfeited upon cancellation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#d0ed01]">6. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our refund policy or need assistance with a refund request, please contact us at:{" "}
                <a href="mailto:help@symbiotes.ai" className="text-blue-600 hover:underline">
                  help@symbiotes.ai
                </a>
              </p>
            </div>
          </main>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400">
              For any questions about our terms, please contact us at:{" "}
              <a href="mailto:legal@symbiotes.in" className="text-blue-600 hover:underline">
                legal@symbiotes.ai
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPage;