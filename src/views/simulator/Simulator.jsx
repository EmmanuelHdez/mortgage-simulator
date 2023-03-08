import ahorroImg from '../../assets/plan-ahorro-slide.jpg';
import vidaImg from '../../assets/seguro-vida-slide.jpg';


export function Simulator() { 
  return (

        <>
            <div className="my-7 px-8">
                <div className='flex justify-center'>
                    <div className="text-center">
                        <h1 className='text-[28px] uppercase font-semibold text-black'>Simuladores financieros</h1>
                        <div class="text-[18px] font-bold text-gray-500">Haz una proyección de tu inversión en el futuro</div>
                    </div>
                </div>                
            </div>

            <div className='flex justify-center items-center space-x-4'>
                <div className='w-[400px] h-[300px] shadow-lg rounded-md caption-element'>
                    <img className='w-full img-caption h-full' src={ahorroImg} alt=""/>
                    <div className="caption-text">
                        <div className="blur-effect"></div>
                        <div className="caption-info">
                            <h2 className='font-bold'>Plan de Ahorro</h2>
                            <div class="bg-none border-2 border-[#15E0FB] cursor-pointer w-[200px] mx-auto mt-3">
                                <div class="flex items-center justify-around px-4 py-2">
                                    <div class="text-center">
                                        <span class="text-[#15E0FB] text-[14px]">Ver Más</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
				    </div>
                </div>

                <div className='w-[400px] h-[300px] shadow-lg rounded-md caption-element'>
                    <img className='w-full img-caption h-full object-cover' src={vidaImg} alt=""/>
                    <div className="caption-text">
                        <div className="blur-effect"></div>
                        <div className="caption-info">
                            <h2 className='font-bold'>Seguro de vida</h2>
                            <div class="bg-none border-2 border-[#15E0FB] cursor-pointer w-[200px] mx-auto mt-3">
                                <div class="flex items-center justify-around px-4 py-2">
                                    <div class="text-center">
                                        <span class="text-[#15E0FB] text-[14px]">Ver Más</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
				    </div>
                </div>

                
            </div>

            
        
        
        </>
        

        
  )
}
    