
import { useState, useEffect } from 'react'
import './App.css'

function MetaAds({ ad }) {
  if (!ad) {
    return (
      <div className="meta-ad">
        No available ads....
      </div>
    )
  }

  return (
    <div
      className="meta-ad"
      onClick={() => {
        if (ad.url) {
          window.open(ad.url)
        }
      }}
    >
      <img src={ad.image} alt={ad.title} />
      <img src={ad.image} alt={ad.title} />
      <img src={ad.image} alt={ad.title} />
    </div>
  )
}

function App() {
  const [ad, setAd] = useState(null)
  const [count, setCount] = useState(0)

  const ad_data = [
    {
      id: 'ad-0',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      url: 'https://github.com/tarun-ainampudi',
      title: 'Laptop Image'
    },
    {
      id: 'ad-1',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      url: 'https://github.com/tarun-ainampudi/unque_react_ads',
      title: 'iPhone Image'
    },
    {
      id: 'ad-2',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
      url: 'https://drive.google.com/file/d/1IY-lz4xGyT8LLoF2FvnMEcoZal1Z1sGA/view?usp=drive_link',
      title: 'Business'
    }
  ]

  useEffect(() => {
    const ad_index = count % ad_data.length

    const adTimer = setTimeout(() => {
      setAd(ad_data[ad_index])
    }, count === 0 ? 10000 : 0)

    const countTimer = setTimeout(() => {
      setCount(prev => prev + 1)
    }, 5000)

    return () => {
      clearTimeout(adTimer)
      clearTimeout(countTimer)
    }
  }, [count])

  return (
    <>
      <div className='header'>
        <img className='unque-logo' src="/logo.jpg" alt="UnQue CloudBook Logo" />
        <h1>UnQue React Ads</h1>
      </div>
      <div className='meta-container'>
      <MetaAds ad={ad} />
        <div className='unque-info'>
          <p>Welcome to UnQue, a pioneering force in the service industry, initally dedicated to transforming the salon experience for both professionals and consumers. 
            We understand the challenges faced by salons and beauty service providers, and we are committed to delivering innovative solutions that enhance efficiency,
            improve customer satisfaction, and drive business growth.
          </p>
          <p>Our first step is in the direction of bridging the gap between salons and consumers by providing cutting-edge technology and services that streamline
              operations while elevating the beauty experience. We strive to empower salons with the tools they need to thrive in a competitive market, ensuring that consumers
              receive exceptional service tailored to their unique needs.
          </p>
        </div>
      <MetaAds ad={ad} />
      </div>
    </>
  )
}

export default App
