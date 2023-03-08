import logoApp from '../../assets/marco-leonardo-asesor-logo.png';
import { IconButton } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header () {
    
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between px-2 py-6 bg-black mb-3 shadow-xl">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <div className="relative flex-1 px-4">
                    <div className="flex justify-end space-x-5">
                        <IconButton className='text-white hover:bg-neutral-700'>                
                            <LanguageIcon className='text-white'/>                
                        </IconButton>
                        <IconButton className='text-white hover:bg-neutral-700'>                
                            <FacebookIcon className='text-white'/>                
                        </IconButton>                                    
                    </div>                   
                </div>
                <div className="relative flex-1 px-4 text-center">
                    <img src={logoApp} className='cursor-pointer w-[180px] mx-auto white-filter-img'/>
                </div>
                <div className="relative flex-1 px-4">
                    <div className="flex justify-start space-x-5 text-white">
                        <IconButton className='text-white hover:bg-neutral-700'>                
                            <TwitterIcon className='text-white'/>                
                        </IconButton>
                        <IconButton className='text-white hover:bg-neutral-700'>                
                            <InstagramIcon className='text-white'/>                
                        </IconButton>                                  
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default Header;
