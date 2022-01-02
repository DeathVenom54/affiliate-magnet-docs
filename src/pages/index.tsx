import React from 'react';
import Layout from '@theme/Layout';
import DiscordChat from "@site/src/components/DiscordChat";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={'Home'}
      description="Replace Unity Assetstore links with your affiliate">
        <div className="header">
          <div className="left">
            <img className="logo" src="/img/logo/mega-mascot-happy.png" alt="Affiliate Magnet logo"/>
          </div>
          <div className="right">
            <h1>Affiliate Magnet</h1>
            <p>Monetise your Unity Discord server using Unity affiliate links</p>
            <div className="buttons">
              <a href="/docs/invite">Invite</a>
              <a href="/docs/intro">Guide</a>
            </div>
          </div>
        </div>

      <hr/>

      <div className="features">
        <h1>What does it do?</h1>

        <h2>When set to Replace mode:</h2>

        <div className="feature">
          <DiscordChat username="DV" role="#47a9ff">
            <span>I bought this asset recently: <a>https://assetstore.unity.com/packages/example/some-asset-1337</a>,<br />
            and I must say, it's amazing to work with!</span>
          </DiscordChat>

          <p>Someone sends a <a href="https://assetstore.unity.com/">Unity Asset Store</a> link in your server...</p>
        </div>

        <div className="feature">

          <p>The bot replaces it with an affiliate link</p>

          <DiscordChat username="Affiliate Magnet" role="#ffc20c" avatar="	https://cdn.discordapp.com/avatars/891700586288934952/777719b8f803da890b4dfeb5cebbb9c5.webp?size=80">
            <span>From <span className="mention">@DV</span>: <br />I bought this asset recently: <a>https://assetstore.unity.com/packages/example/some-asset-1337<span className="highlight">?aid=exampleAffiliateCode</span></a>,<br />
            and I must say, it's amazing to work with!</span>
          </DiscordChat>
        </div>

        <h2>When set to Clear mode:</h2>

        <div className="feature">
          <DiscordChat username="Timps" role="#3cd600" avatar="https://cdn.discordapp.com/avatars/209612068989566976/af4d0321a60b886ac3a779e30bd3e4bc.webp?size=80">
            <span>Woohoo there's a big discount on <a>https://assetstore.unity.com/packages/example/some-asset-1337<span className="highlight">?aid=someOtherAffiliate</span></a> !
            </span>
          </DiscordChat>

          <p>Someone sends an <a href="https://unity.com/affiliates">affiliate</a> link in your server...</p>
        </div>

        <div className="feature">

          <p>The bot cleans it out!</p>

          <DiscordChat username="Affiliate Magnet" role="#ffc20c" avatar="	https://cdn.discordapp.com/avatars/891700586288934952/777719b8f803da890b4dfeb5cebbb9c5.webp?size=80">
            <span>From <span className="mention">@Timps</span>: <br />Woohoo there's a big discount on <a>https://assetstore.unity.com/packages/example/some-asset-1337</a> !
            </span>
          </DiscordChat>
        </div>
      </div>
    </Layout>
  );
}
