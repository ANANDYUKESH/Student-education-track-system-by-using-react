import logo from './logo.svg';
import './App.css';
import { FaRegQuestionCircle,FaBookReader,FaBook,FaUserAlt,FaUserTie } from "react-icons/fa";
import { IoSettingsOutline,IoLogOutOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TbFileReport } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { BiSolidClinic } from "react-icons/bi"; 
import { IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import img from "./hindusthan logo.jpeg"
function App() {
  return (
    <div className="App">
     <div class="navbar-hr">
      <img src={img} alt="Hindusthan University" />
      <ul>
        <li><a href="#home">
       <div className='pi'> <PiStudentFill /></div><p>Student Management</p></a></li>
        <li><a href="#about"><div className='pi'> <HiMiniUserGroup  /></div><p>Employee</p></a></li>
        <li><a href="#services"><div className='pi'> <RiDiscountPercentFill /></div><p>Quality Management</p></a></li>
        <li><a href="#contact"><div className='pi'> <TbFileReport /></div><p>Report Delivery</p></a></li>
        <li><a href="#contact"><div className='pi'> <HiOutlineDocumentReport /></div><p>Assignment</p></a></li>

      </ul>
      <div class="icon">
      <FaRegQuestionCircle />
      <IoSettingsOutline />
      <IoLogOutOutline />
      </div>
     </div>
     <div className="header">
      <h1>Student Management</h1>
     </div>
     <div className="box">
       <div className='box1'>
        <div className='box-user'><FaUserAlt size={60} /></div>
        <div className='box-text'>
          <h3>8</h3>
          <p>Student Name</p></div>
       </div>
       <div className='box2'>  
        <div className='box-user'><FaUserTie size={60} /></div>
        <div className='box-text'>
          <h3>13</h3>
          <p>Student Name</p>
          
        </div>
      </div>
       <div className='box3'>  <div className='box-user'><FaPerson size={60}/></div>
        <div className='box-text'>
          <h3>00</h3>
          <p>Student Name</p></div></div>
     </div>
     <div className='container  w-50 '>
        <p className='text-center fw-bold'>Menu</p>
        <div className="row mt-5 text-center">
            <div className="col-4">
            <i class="fa-solid fa-user fs-1 text-primary text-center " />
            <div className='user'><FaUser size={30}/></div>
            <p className=''>Register Enrollment</p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center " />
        <div className='user'><FaBook size={30}/></div>
        <p>Remedial Enrollment</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-people-group fs-1 text-primary text-center" />
        <div className='user'><FaPerson size={30}/></div>
        <p>Club Management</p>
        </div>
        </div>
        <div className="row mt-5 text-center">
            <div className="col-4">
            <i class="fa-solid fa-book-open-reader fs-1 text-primary text-center " />
            <p className=''> <div className='user'><FaBookReader size={30}/></div><span className='ms-2'>Classroom</span>
                <br></br> Management
            </p>
            </div>
        <div className="col-4">
        <i class="fa-solid fa-envelope fs-1 text-primary text-center " />
        <div className='user'><MdAttachEmail size={30}/></div>
        <p className=''>SMS/EMAIL</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-book fs-1 text-primary text-center" />
        <div className='user'>
        <IoDocumentText size={30}/></div>
        <p className=''>Attendence</p>
        </div>
        </div>
        <div className="row mt-5 text-center " >
            <div className="col-4"></div>
            <div className="col-4">
            <i class="fa-regular fa-hospital fs-1 text-primary text-center" />
            <div className='user'><BiSolidClinic size={30}/></div>
            <p className=''> Clinic</p>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
    </div>
  );
}

export default App;




