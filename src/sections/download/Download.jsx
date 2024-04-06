import React from 'react';
import styles from './download.module.css';

const Download = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.content} container`}>
        <div className={styles.leftSide}>
          <h2>
            Uma nova experiência <br /> em{' '}
            <span style={{ color: '#EB3850' }}>serviços financeiros.</span>
          </h2>
          <p>
            Nossa abordagem inovadora e personalizada oferece uma
            <br /> experiência única para atender às suas necessidades.
          </p>

          <div className={styles.downloadApp}>
            <a href="#">
              <div>
                <img src="/src/assets/icons/AppleWhiteLogo.svg" alt="" />
              </div>
              <span>
                <h5>Download via</h5>
                <p>Apple store</p>
              </span>
            </a>
            <a href="#">
              <div>
                <img src="/src/assets/icons/GooglePlayWhiteLogo.svg" alt="" />
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
            <img src="/src/assets/images/download-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
