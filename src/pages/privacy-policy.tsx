import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy" description="Masarna's privacy policies and data protection information">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 18, 2025</p>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              At Masarna ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy.
            </p>
            <p>
              This policy describes the types of information we may collect from you or that you may provide when you visit our website at www.masarna.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We collect several types of information from and about users of our Website, including information:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
              <li>That is about you but individually does not identify you, such as job title, industry, or professional experience; and/or</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Collect Your Information</h2>
            <p className="mb-4">We collect this information:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Directly from you when you provide it to us.</li>
              <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
              <li>From third parties, for example, our business partners.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              <li>To improve our Website, products or services, marketing, or customer relationships and experiences.</li>
              <li>In any other way we may describe when you provide the information.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p className="mb-4">We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Masarna's assets.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
            <p className="mt-4">We may also disclose your personal information:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements, including for billing and collection purposes.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Masarna, our customers, or others.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
            </p>
            <p>
              The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
            <p className="mb-4">For users in the European Union, we comply with GDPR requirements, providing you with the following rights:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>The right to be informed about our data collection practices</li>
              <li>The right to access your personal data</li>
              <li>The right to rectify or correct inaccurate personal data</li>
              <li>The right to erasure or deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>Rights in relation to automated decision making and profiling</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">California Privacy Rights</h2>
            <p className="mb-4">
              California Civil Code Section 1798.83 permits users of our Website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to privacy@masarna.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">CCPA Privacy Notice</h2>
            <p className="mb-4">
              Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Right to Know:</strong> You have the right to request that we disclose what personal information we collect, use, disclose, and sell.</li>
              <li><strong>Right to Delete:</strong> You have the right to request the deletion of your personal information that we collected and maintained, subject to certain exceptions.</li>
              <li><strong>Right to Opt-Out of Sale:</strong> You have the right to opt-out of the sale of your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="mb-4">
              Our Website uses cookies to enhance your experience, gather general visitor information, and track visits to our website. Cookies are small files that a site or its service provider transfers to your device through your web browser that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
            </p>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Help us understand your preferences based on previous or current site activity.</li>
              <li>Compile aggregate data about site traffic and site interactions.</li>
              <li>Enhance and personalize your site experience.</li>
              <li>Assist us in our marketing efforts.</li>
            </ul>
            <p className="mt-4">
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. Since each browser is different, look at your browser's Help Menu to learn the correct way to modify your cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to Our Privacy Policy</h2>
            <p>
              It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at: privacy@masarna.com or via our contact page.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;