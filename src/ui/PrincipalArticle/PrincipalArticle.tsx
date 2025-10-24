import ButtonCta from '../ButtonCta.tsx'

function PrincipalArticle() {
  return (
    <article className="space-y-300 lg:col-span-2">
      <div>
        <picture>
          <source
            media="(width < 640px)"
            srcSet="/img/image-web-3-mobile.jpg"
          />
          <source
            media="(width >= 640px)"
            srcSet="/img/image-web-3-desktop.jpg"
          />
          <img src="/img/image-web-3-mobile.jpg" alt="Image of web 3.0" />
        </picture>
      </div>
      <div className="lg:grid-rows-[2fr 1fr] grid grid-cols-1 gap-300 lg:grid-cols-2 lg:gap-400">
        <h1 className="text-navy-950 text-preset-2 leading-preset-2 lg:text-preset-1 lg:leading-preset-1 font-extrabold lg:col-span-1 lg:row-span-2">
          The Bright Future of Web 3.0?
        </h1>
        <p className="text-navy-600 text-preset-6 leading-preset-6">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the poeple. But is it
          really fulfilling its promise?
        </p>
        <ButtonCta />
      </div>
    </article>
  )
}

export default PrincipalArticle
