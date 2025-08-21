import QrCodeWrapper from '@/common/wrappers/qrcodeDisplay';
import Layout from '@/components/Layout';
import TextInput from '@/components/TextInput';
import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import type { NextPage } from 'next';

const Home: NextPage<{ seo: ICommon['seo'] }> = () => {
  const seo = {
    metaTitle: 'Youvit QR Code Generator - Create QR Codes Instantly',
    metaDescription:
      "Generate QR codes for text, email, WiFi, and vCard with Youvit's free QR code generator. Fast, easy, and customizable.",
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 font-inter text-3xl font-bold text-secondary">Text to QR Code</h2>
            <p className="font-inter text-gray-600">
              Enter your text below to generate a QR code instantly
            </p>
          </div>

          <TextInput />
        </div>

        <div className="flex justify-center">
          <QrCodeWrapper />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
