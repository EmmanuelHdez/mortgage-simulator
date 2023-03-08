import logoCNSF from '../../assets/logos/kalmy-cnsf.png';
import logoSHCP from '../../assets/logos/SHCP-logo.png';
import logoCONDUCEF from '../../assets/logos/logo-condusef-1.png';






function Footer () {
    return ( 
        <footer className="bg-neutral-900 text-center text-white mb-0 w-full">            
            <div className="py-6 px-7">
                <div className="mb-6">
                    <hr className='w-[15%] mx-auto mt-4 mb-2 border-[#15E0FB] border-[2px]'/>                    
                    <div className="my-auto">
                        <div className="text-[25px] font-semibold my-auto text-white"><a href="mailto:contacto@marcoleonardoasesor.com">contacto@marcoleonardoasesor.com</a></div>
                        <div className="text-[20px] font-bold mt-2-auto text-white"><a href="mailto:contacto@marcoleonardoasesor.com">444-445-1144</a></div>
                    </div>
               </div>
                <div className="flex justify-center space-x-6">
                    <div className="my-auto">
                        <img src={logoCNSF} className="w-[140px] white-filter-img" alt='logo CNSF'/>
                    </div>
                    <div className="my-auto">
                        <img src={logoSHCP} className="w-[140px] white-filter-img" alt='logo SHCP'/>
                    </div>
                    <div className="my-auto">
                        <img src={logoCONDUCEF} className="w-[140px] white-filter-img" alt='logo CONDUCEF'/>
                    </div>                    
                </div>
            </div>

            <div className="p-4 text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <div>© 2023 Copyright</div>
                <a className="text-white text-sm" href="https://tailwind-elements.com/">Marco Leonardo Asesores Financieros</a>
            </div>
        </footer>
        
    )
}

export default Footer;