import React from 'react';
import { GetStaticProps } from 'next';
import PageLayout from '@/components/PageLayout';
import { Separator } from "@/components/ui/separator";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Terms of Use",
      description: "Masarna's terms and conditions for using our services",
      keywords: "terms of use, terms and conditions, user agreement, legal terms, service terms, intellectual property rights"
    },
    revalidate: 86400 // Revalidate once per day
  };
};

interface TermsOfUseProps {
  title: string;
  description: string;
  keywords: string;
}

const TermsOfUse = ({ title, description, keywords }: TermsOfUseProps) => {
  return (
    <PageLayout 
      title={title} 
      description={description}
      keywords={keywords}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Use</h1>
          <p className="text-gray-600 mb-8">Last updated: May 18, 2025</p>

          <Separator className="my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Masarna ("we," "us" or "our"), concerning your access to and use of the masarna.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </section>
          
          {/* Additional sections omitted for brevity */}
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: legal@masarna.com
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfUse;