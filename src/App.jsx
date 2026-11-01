
import { useState, useEffect } from 'react'
import './App.css'

function MetaAds({ ads }) {
  if (!ads) {
    return (
      <div className="meta-ad">
        Loading ads....
      </div>
    )
  }

  const display_data = []
  const display_count = 3; 
  const random_num = Math.floor(Math.random() * ads.length)
  for(let i = random_num; i < random_num + display_count; i++){
    const ad = ads[i % ads.length]
      display_data.push(<img key={ad.id} src={ad.image} alt={ad.title} onClick={() => {
        if(ad.url){
          window.open(ad.url)
        }
      }}/>)
  }

  return (
    <div className="meta-ad">
      {display_data}
    </div>
  )
}

// Here we fetch the data from the Meta ads api 
function fetchAdsData(){
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

  return new Promise((resolve, reject) => {
    if(Math.random() > 0.3){
      return reject(new Error('Data fetch falied'))
    }
    setTimeout(() => {
      resolve(ad_data)
    }, 1500)
  })
}

function App() {
  const [ads, setAds] = useState(null)
  const [count, setCount] = useState(0)


  // Runs every 5 seconds as count updates
  useEffect(() => {

    async function fetchAds(){  
      try{
        const ad_data = await fetchAdsData()
        setAds(ad_data)
      }catch (err){
        console.log("Error: ", err.message)
        setAds(null)
      }
    }

    // Fetch only when ads are null
    if(!ads){
      fetchAds()
    }

    setTimeout(() => {
      setCount(prev => prev + 1)
    }, 5000)

  }, [count])

  return (
    <>
      <div className='header'>
        <img className='unque-logo' src="/logo.jpg" alt="UnQue CloudBook Logo" />
        <h1>UnQue React Ads</h1>
      </div>
      <div className='meta-container'>
      <MetaAds ads={ads} />
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
      <MetaAds ads={ads} />
      </div>
    </>
  )
}

export default App
