import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const PageHead = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={props.href} />
      <meta name="author" content={props.author} />
      <meta name="robots" content={props.robots} />
      <meta property="og:title" content={props.ogTitle} />
      <meta property="og:description" content={props.ogDescription} />
      <meta property="og:url" content={props.ogUrl} />
      <meta property="og:site_name" content={props.ogSiteName} />
      <meta property="og:image" content={props.ogImage} />
      <meta property="og:type" content={props.ogType} />
      <meta property="og:image:alt" content={props.ogAlt} />
      <meta property="og:locale" content={props.ogLocale} />
      <meta name="twitter:title" content={props.twitterTitle} />
      <meta name="twitter:description" content={props.twitterDescription} />
      <meta name="twitter:url" content={props.twitterUrl} />
      <meta name="twitter:card" content={props.twitterCard} />
      <meta name="twitter:image" content={props.twitterImage} />
      <meta name="twitter:image:alt" content={props.twitterAlt} />
      {props.twitterSite && (
        <meta name="twitter:site" content={props.twitterSite} />
      )}
      {props.twitterCreator && (
        <meta name="twitter:creator" content={props.twitterCreator} />
      )}
    </Head>
  )
}

export default PageHead

PageHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  author: PropTypes.string,
  robots: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogUrl: PropTypes.string,
  ogSiteName: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  ogAlt: PropTypes.string,
  ogLocale: PropTypes.string,
  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterUrl: PropTypes.string,
  twitterCard: PropTypes.string,
  twitterImage: PropTypes.string,
  twitterAlt: PropTypes.string,
  twitterSite: PropTypes.string,
  twitterCreator: PropTypes.string
}
