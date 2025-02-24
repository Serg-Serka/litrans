import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './trading/trading.css';
import HorizontalLine from "@/components/HorizontalLine";
import LogisticCard from "@/components/LogisticCard";

export default function TradingPage() {
  const t = useTranslations('tradingPage');

  const logisticsData = [
    {image: '/images/card1.jpeg', title: 'Oils'},
    {image: '/images/card2.jpeg', title: 'Other oils'},
  ];

  return (
    <div className="trading-page">
      <h1 className="page-title">{t("title")}</h1>
      <HorizontalLine color="#676767" height={5} />
      <section className="intro-text-section">
        <p className="intro-text">{t('introText1')}</p>
        <p className="intro-text">{t('introText2')}</p>
        <p className="intro-text">{t('introText3')}</p>
        <p className="intro-text">{t('introText4')}</p>
      </section>
      <section className="image-section">
        <div className="full-width-image-wrapper">
          <Image
            src="/images/home.jpeg"
            alt="Trading"
            className="full-width-image"
            fill
            priority
          />
        </div>
      </section>
      <div className="p-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {logisticsData.map((item, index) => (
            <LogisticCard key={index} imageSrc={item.image} title={item.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}
