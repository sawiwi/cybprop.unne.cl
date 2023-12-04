import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { DataImgMe } from '../../../data/userData';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
          {DataImgMe?.length > 0 ? DataImgMe.map((item) => 
            <div key={item.id}>
                <img
                src={item.img}
                alt="about-img"
                className="rounded-full object-cover h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[360px] xl:h-[360px] xl:mt-20 xl:mx-2"
              />
            </div>

          ):null}
  
        </div>
        <div className="col-span-2 xl:col-span-1">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
              Soy Ximena Berrios L, corredora de propiedades con más de 30 años de experiencia en el sector inmobiliario. Mi enfoque abarca la compraventa, arriendos y administración de propiedades urbanas y parcelas. Mi compromiso es brindar asesoramiento integral a los clientes en todas las etapas del proceso. Ofrezco una atención personalizada para asegurar que los clientes se sientan respaldados y guiados.
            <br />
            <br />
            Mi área principal de trabajo comprende Santiago, específicamente el sector Oriente, así como la Quinta Región, incluyendo Viña del Mar, Reñaca, Concón, Valparaíso y sus alrededores.
            <br />
          </p>
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            Ximena Berrios.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 xl:text-left">
            Corredora inmobiliaria ACOP.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
