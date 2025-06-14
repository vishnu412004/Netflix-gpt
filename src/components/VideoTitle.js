const VideoTitle = ({title,overview}) => {

  return (
    <div className="w-screen aspect-video px-10 py-40 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-4xl font-bold px-2 py-5">{title}</h1>
      <p className="w-1/2 px-2 py-5 hidden md:block">{overview}</p>
      <div className="flex gap-3 px-2 py-5">
        <button className="bg-white px-10 py-3 text-black text-lg rounded-lg hover:bg-gray-300"> Play</button>
        <button className="bg-yellow-500 px-7 py-3 text-black text-lg rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;