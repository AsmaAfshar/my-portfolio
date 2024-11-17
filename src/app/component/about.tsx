import Image from 'next/image';
import React from 'react';
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[350px] h-[300px]"
        alt="hero"
        src={"/assests/pictures/profile.JPEG"}
    width={200}
    height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed font-bold">
       I have compelete my bachelor from Karachi University and then I have started my new journey in teaching
       I have learned more and more from teaching and finally I turn into IT field.
       Now I am student in Governor House Karachi.
       This is the Courtesy of Governor Sindh Kamran Tessori. He is the best Governor for all of us.
      </p>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default About
