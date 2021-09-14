import Head from 'next/head';

function Player() {
  return (
    <div>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('nextjs-website-auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      Player
    </div>
  );
}

export default Player;
