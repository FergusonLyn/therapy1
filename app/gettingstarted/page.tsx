import Image from "next/image";
import GetStartedHeader from '../components/GetStartedHeader';
import RegisterButton from '../components/RegisterButton';


const GettingStarted = () => {
    

  return (
    <>
    <GetStartedHeader />
     
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Getting started</h3>
        <div className='max-w-full mx-auto grid md:grid-cols-2'>
        <Image
            src="/gettingstarted.png"
            alt="Mental Health"
            className='w-full md:w-[550px] mx-auto my-4'
            width={550} // Set the desired width
            height={412} // Set the desired height while maintaining the aspect ratio
          />

            <div className='flex flex-col justify-center md:text-left md:items-start'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mental Health Solution</h1>
                <p>
                  Discover a safe and supportive space to manage your mental health. Join our community and access personalized counseling, insightful resources, and 
                  round-the-clock support to help you navigate your journey. Let us work together towards a healthier mind and a brighter future.
                </p>
                <RegisterButton />
                
            </div>
        </div>      
    </div>
    </>
  )
}

export default GettingStarted
