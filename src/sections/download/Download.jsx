import React from 'react';
import styles from './download.module.css';
import Apple from '../../assets/icons/AppleWhiteLogo.svg';
import GooglePlay from '../../assets/icons/GooglePlayWhiteLogo.svg';
import DownloadLogo from '../../assets/images/download-logo.svg';

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.downloadContentGroup} container`}>
        <div className={styles.leftSide}>
          <h2>
            Uma nova experiência <br /> em{' '}
            <span style={{ color: '#EB3850' }}>serviços financeiros.</span>
          </h2>
          <p>
            Nossa abordagem inovadora e personalizada oferece uma
            <br /> experiência única para atender às suas necessidades.
          </p>

          <div className={styles.downloadInfo}>
            <a href="#">
              <div>
                <img src={Apple} alt="AppleLogo" loading="lazy" />
              </div>
              <span>
                <h5>Download via</h5>
                <p>Apple store</p>
              </span>
            </a>
            <a href="#">
              <div>
                <img src={GooglePlay} alt="GooglePlay" loading="lazy" />
              </div>
              <span>
                <h5>Download via</h5>
                <p>Google play</p>
              </span>
            </a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div>
            <img src={DownloadLogo} alt="Logo" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
