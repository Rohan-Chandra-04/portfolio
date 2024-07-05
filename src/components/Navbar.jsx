import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function Navbar(){
    return(
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img className="mx-2 w-10" src="" alt="just wait..." /> */}
                <p className="mx-2 w-10 text-3xl">RRC</p>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href ="https://github.com/Rohan-Chandra-04"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/rohan-chandra-regulagadda-012249252/"><FaLinkedin/></a>
                <a href="https://gmail.com"><SiGmail/></a>
            </div>
            
        </nav>
    )
}

export default Navbar