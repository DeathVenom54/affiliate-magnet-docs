import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Home'}
      description="Replace Unity Assetstore links with your affiliate">
        <div className="header">
          <div className="left">
            <img className="logo" src="/img/logo/trans-mascot-happy.png" alt="Affiliate Magnet logo"/>
          </div>
          <div className="right">
            <h1>Affiliate Magnet</h1>
            <p>Monetise your Discord community using Unity affiliate links</p>
            <div className="buttons">
              <a href="/docs/invite">Invite</a>
              <a href="/docs/intro">Guide</a>
            </div>
          </div>
        </div>
      <hr/>
    </Layout>
  );
}
