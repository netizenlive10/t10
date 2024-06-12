import Image from 'next/image'

const PlayersBg = () => {
  return (
    <div className="flex align-center justify-between relative">
      <Image
        src="/assets/bowler.png"
        alt="bowler"
        width={300}
        height={300}
        className="w-[300px] h-[250px] md:h-96 object-contain drop-shadow-[5px_2px_1px_#4A6CF7]"
        priority={true}
      />
      <Image
        src="/assets/batsman.png"
        alt="bowler"
        width={300}
        height={300}
        className="w-[300px] h-[250px] md:h-96 object-contain drop-shadow-[5px_2px_1px_#4A6CF7]"
        priority={true}
      />
    </div>
  )
}

export default PlayersBg
