import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './trading/trading.css';
import HorizontalLine from "@/components/HorizontalLine";
import LogisticCard from "@/components/LogisticCard";

export default function TradingPage() {
  const t = useTranslations();

  const logisticsData = [
    {image: '/images/uco.avif', title: 'UCO - Used Cooking Oil'},
    {image: '/images/veg_oil.jpg', title: 'Vegetable Oils'},
    {image: '/images/fatty_acids.jpg', title: 'Fatty acids'},
  ];

  return (
    <div className="trading-page">
      <h1 className="page-title">{t("title")}</h1>
      <HorizontalLine color="#676767" height={5} />
      <section className="intro-text-section">
        <p className="intro-text">{t('tradingPage.introText1')}</p>
        <p className="intro-text">{t('tradingPage.introText2')}</p>
        <p className="intro-text">{t('tradingPage.introText3')}</p>
        <p className="intro-text">{t('tradingPage.introText4')}</p>
      </section>
      <section className="image-section">
        <div className="full-width-image-wrapper">
          <Image
            src="/images/home.png"
            alt="Trading"
            className="full-width-image"
            fill
            priority
          />
        </div>
      </section>
      <div className="p-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {logisticsData.map((item, index) => (
            <LogisticCard key={index} imageSrc={item.image} title={item.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}
