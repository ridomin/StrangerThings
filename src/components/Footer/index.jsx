import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>StrangerThings</h5>
            <p className={styles.description}>
              Real Devices doing Stranging Things with Azure IoT platform
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/">
                  IoT Hub
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Edge Computing
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/">
                  Visual Studio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
