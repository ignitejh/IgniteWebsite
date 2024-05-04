import Image from "next/image";
import TeamSpirit from '../assets/Team spirit.svg'
import aboutus from '../assets/about us.svg'
import vector1 from '../assets/home page vector.svg'
import temp from '../assets/temp.svg'
import vision from '../assets/vision.svg'

export default function Home() {
  const containerStyle = 'flex px-10 flex-1 gap-2 flex-wrap-reverse justify-center'
  return (
    <div className="flex flex-1 gap-[50px] flex-col mb-3 mt-10 justify-center items-center">
      {/* heading container */}
      <div
        className={containerStyle}
      >
        <div className="flex flex-1 flex-col justify-center ">
          <h2
            className="font-bold text-[95px] leading-[90px] text-[#333333]"
          >Main heading</h2>
          <h4
            className="font-medium text-[49px] text-[#333333]"
          >Empowering Change, Inspiring Innovation</h4>

          {/* btn */}
          <div
            className="flex mt-4 gap-5"
          >
            <button
              className="rounded-full capitalize-full px-5 p-2 text-white bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]"
            >signup</button>
            <div
              className="rounded-full flex justify-center items-center bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]"
            >
              <button
                className="bg-white capitalize p-2 m-[1.5px] px-5 rounded-full"
              >log in</button>
            </div>
          </div>
        </div>

        <div
          className="flex-1 flex justify-center "
        >
          <Image
            src={TeamSpirit}
            alt="team spirit"
            className="self-center"
          />
        </div>
      </div>

      {/* about us container */}
      <div
        className={containerStyle}
      >
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={aboutus}
            alt="about us"
          />
        </div>

        <div
          className="flex-1 flex flex-col justify-center gap-10 "
        >
          <h2 className="text-[48px] text-[#333333] leading-[48px] font-medium">Get To Know Us.</h2>

          <div
            className="gap-5 flex flex-col"
          >
            <p className="font-medium text-[31px] leading-[31px] text-[#626262]">Introducing the Ignite Society</p>
            <p
              className="font-medium text-[20px] leading-[20px] text-justify"
            >A <strong className="text-[#C92842]">student-led initiative</strong> at Jamia Hamdard, dedicated to cultivating collaboration, innovation, and entrepreneurship among aspiring changemakers. We offer a dynamic platform for students to connect, develop skills, and turn ideas into impactful projects. With a focus on project development, research, learning exposure, startup culture, and networking, we empower students to unleash their potential and drive positive change in their communities. </p>
          </div>
        </div>
      </div>

      {/* see what other say */}
      <div
        className=" flex flex-1 w-[100%] relative py-[auto] gap-4 h-[auto] justify-center items-center flex-col"
        style={{
          backgroundImage: `url('${vector1}')`,
          backgroundSize: "cover",
        }}
      >
        <Image
          src={vector1}
          alt="see what other say"
          className="w-[100%] flex-1 -z-[1] top-0 bottom-0 absolute inset-0"
        />
        <h2
          className="font-medium text-[48px] z-[1] leading-[48px] text-[#E5E5E5]"
        >See what others say.</h2>
        <div
          className="flex flex-1 flex-col gap-2"
        >
          <Image
            src={temp}
            alt="temp"
            className="z-[1]"
          />
        </div>
      </div>


      {/* vision container */}
      <div
        className="mt-10"
      >
        <Image
          src={vision}
          alt="vision"
        />
      </div>


    </div>
  )
}
