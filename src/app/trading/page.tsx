import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './trading.css';
import HorizontalLine from "@/components/HorizontalLine";

export default function TradingPage() {
  const t = useTranslations('tradingPage');

  return (
    <div className="trading-page">
      <h1 className="page-title">{t("title")}</h1>
      <HorizontalLine color="#676767" height={5} />
      {/*<hr style={{*/}
      {/*  color: '#676767',*/}
      {/*  backgroundColor: '#676767',*/}
      {/*  height: 5,*/}
      {/*  width: '40vw',*/}
      {/*  opacity: 1,*/}
      {/*}}/>*/}
      <section className="intro-text-section">
        <p className="intro-text">{t('introText1')}</p>
        <p className="intro-text">{t('introText2')}</p>
        <p className="intro-text">{t('introText3')}</p>
        <p className="intro-text">{t('introText4')}</p>
      </section>
      <section className="image-section">
        <div className="full-width-image-wrapper">
          <Image
            src="/images/header.webp"
            // src="/images/trading_1.jpeg"
            alt="Trading"
            className="full-width-image"
            // width={800}
            // height={500}
            fill
            priority
          />
        </div>
      </section>
      <section className="additional-text">
        <p className="additional-text">{t('additionalText')}</p>
        <p className="additional-text">{t('additionalText')}</p>
        <p className="additional-text">{t('additionalText')}</p>
        <p className="additional-text">{t('additionalText')}</p>
      </section>
    </div>
  );
}
