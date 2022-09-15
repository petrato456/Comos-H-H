import Lottie from 'react-lottie'

import loadingData from '../../assets/loading.json'


const LoadingConquer = () => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
      <div className="text">
        <Lottie options={loadingOptions} height={78} width={98} />
      </div>
  )
}

export default LoadingConquer
