import React from 'react';
import Layout from '@theme/Layout';
import DiscordChat from "@site/src/components/DiscordChat";
import styles from './index.module.css'
import discord from '../components/DiscordChat.module.css'

export default function Home(): JSX.Element {
  return (
    <Layout
      title={'Home'}
      description="Monetise your Discord server using affiliate links">
        <div className={styles.header}>
          <img className={styles.logo} src="/img/logo/mega-mascot-happy.png" alt="Affiliate Magnet logo"/>

          <div className="right">
            <h1 className={styles.title}>Affiliate Magnet</h1>
            <p className={styles.description}>Monetise your Discord server using affiliate links</p>
            <div className="buttons">
              <a className={styles.button} href="/docs/invite">Invite</a>
              <a className={styles.button} href="/docs/intro">Guide</a>
            </div>
            <div className="supports">
              <p className={styles.supports_text}>Currently supports:</p>
              <a href="https://assetstore.unity.com" target="_blank">
                <img className={styles.supports_icon} src="https://i.redd.it/tu3gt6ysfxq71.png" alt="Unity logo"/>
              </a>
              <a href="https://humblebundle.com" target="_blank">
                <img className={styles.supports_icon} src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Humble_Bundle_H_logo_red.svg" alt="Humble Bundle logo"/>
              </a>
              <a href="/docs/faq#will-the-bot-support-any-other-websites" className={styles.supports_link}>...and more to come</a>
            </div>
          </div>
        </div>

      <hr/>

      <div className="features">
        <h1 className={styles.feature_title1}>What does it do?</h1>

        <h2 className={styles.feature_title2}>When set to Replace mode:</h2>

        <div className={styles.feature}>
          <DiscordChat username="DV" role="#47a9ff">
            <span>I bought this asset recently: <a className={discord.link}>https://assetstore.unity.com/packages/example/some-asset-1337</a>,<br />
            and I must say, it's amazing to work with!</span>
          </DiscordChat>

          <p className={styles.feature_text}>Someone sends a <a href="https://assetstore.unity.com/">Unity Asset Store</a> link in your server...</p>
        </div>

        <div className={styles.feature}>

          <p className={styles.feature_text}>The bot replaces it with an affiliate link</p>

          <DiscordChat username="Affiliate Magnet" role="#ffc20c" avatar="	https://cdn.discordapp.com/avatars/891700586288934952/777719b8f803da890b4dfeb5cebbb9c5.webp?size=80">
            <span>From <span className={discord.mention}>@DV</span>: <br />I bought this asset recently: <a className={discord.link}>https://assetstore.unity.com/packages/example/some-asset-1337<span className={discord.highlight}>?aid=exampleAffiliateCode</span></a>,<br />
            and I must say, it's amazing to work with!</span>
          </DiscordChat>
        </div>

        <h2 className={styles.feature_title2}>When set to Clear mode:</h2>

        <div className={styles.feature}>
          <DiscordChat username="Timps" role="#3cd600" avatar="https://cdn.discordapp.com/avatars/209612068989566976/af4d0321a60b886ac3a779e30bd3e4bc.webp?size=80">
            <span>This bundle looks very useful <a className={discord.link}>https://www.humblebundle.com/books/some-imaginary-bundle<span className={discord.highlight}>?partner=someOtherPartner</span></a>
            </span>
          </DiscordChat>

          <p className={styles.feature_text}>Someone sends an <a href="https://www.humblebundle.com/partner">affiliate</a> link in your server...</p>
        </div>

        <div className={styles.feature}>

          <p className={styles.feature_text}>The bot cleans it out!</p>

          <DiscordChat username="Affiliate Magnet" role="#ffc20c" avatar="	https://cdn.discordapp.com/avatars/891700586288934952/777719b8f803da890b4dfeb5cebbb9c5.webp?size=80">
            <span>From <span className={discord.mention}>@Timps</span>: <br />This bundle looks very useful <a className={discord.link}>https://www.humblebundle.com/books/some-imaginary-bundle<span className="highlight">?partner=someOtherPartner</span></a>
            </span>
          </DiscordChat>
        </div>
      </div>
    </Layout>
  );
}
