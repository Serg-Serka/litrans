import Image from 'next/image';
import { useTranslations } from 'next-intl';
import './trading.css';

export default function TradingPage() {
  const t = useTranslations('tradingPage');

  return (
    <div className="trading-page">
      <h1 className="page-title">{t("title")}</h1>
      <section className="intro-text">
        <p className="intro-text">{t('introText1')}</p>
        <p className="intro-text">{t('introText2')}</p>
        <p className="intro-text">{t('introText3')}</p>
        <p className="intro-text">{t('introText4')}</p>
      </section>
      <section className="image-section">
        <div className="full-width-image-wrapper">
          <Image
            src="/images/trading_1_1.webp"
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
