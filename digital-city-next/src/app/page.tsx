import Image from 'next/image'; // Required for Next.js Image component

export default function Home() {
  return (
    <>
      {/* The main app container, equivalent to <div id="app"> */}
      {/* Children of RootLayout will be rendered here, so this component effectively is the content of #app */}
      
      {/* App loader structure from index.html */}
      <div id="app-loader">
        {/* 
          The original img src was "https://www.bernardbolter.com/artwork/wp-content/uploads/globe-loader.gif".
          We will attempt to download this and place it in /public/globe-loader.gif.
          Using Next.js Image component for optimized image handling.
        */}
        <Image 
          src="/globe-loader.gif" 
          alt="spinning globe" 
          width={50} // Placeholder width, adjust if original dimensions are known
          height={50} // Placeholder height, adjust if original dimensions are known
          priority // Preload this image as it's part of the initial loader
        />
        <h1>DIGITAL</h1>
        <h1>CITY</h1>
        <h1>SERIES</h1>
        <p>is loading...</p>
      </div>
      
      {/* The rest of the page content will eventually replace or be managed alongside this loader */}
      {/* For now, this replicates the initial structure of index.html's body */}
    </>
  );
}
