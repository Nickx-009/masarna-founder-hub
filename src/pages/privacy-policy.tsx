import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Separator } from "@/components/ui/separator";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Privacy Policy",
      description: "Masarna's privacy policies and data protection information",
      keywords: "privacy policy, data protection, GDPR compliance, CCPA privacy notice, cookie policy, personal information"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface PrivacyPolicyProps {
  title: string;
  description: string;
  keywords: string;
}

const PrivacyPolicy = ({ title, description, keywords }: PrivacyPolicyProps) => {
  return (
    <PageLayout 
      title={title} 
      description={description}
      keywords={keywords}
    >
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
          
          {/* Additional sections omitted for brevity */}
          
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