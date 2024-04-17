import React from 'react'
import '../stylings/Course.css'
import logo from '../images/SOAIR LOGO 01 1.png'
import TemplatePreviewNavbar from '../../../../../TemplateDashboard/TemplatePreviewNavbar'



const EnrollPage = () => {
  
  return (
    <>
    <TemplatePreviewNavbar/>
    <div className='container-fluid'>
        <div className='nav d-sm-flex justify-content-between align-items-center p-4'>
            <img src={logo} className='logo-img2' />
            <h1 className='f-style text-end'>Registration <br/> Form</h1>
        </div>
        <h2 className='f-style text-end p-4 fs-3'>Course Duration 3 Months</h2>

        <form className='enrollForm'>
            <div className='text-field f-style'>
                <input type='text' name='Name' required />
                <span></span>
                <label>Names:</label><br/>
            </div>
            <div className='d-sm-flex mt-5 f-style'>
                <div className='text-field email'>
                    <input type='email' name='Email' required />
                    <span></span>                
                    <label>Email Address:</label>
                </div>
                <div className='text-field ms-sm-5 email'>
                    <input type='text' name='Number' required />
                    <span></span>              
                    <label>Phone Number:</label>
                </div>
            </div>
            <div className='text-field f-style'>
                <select className='select-field' required>
                    <option value=''>---Select Course---</option>
                    <option value='Web Development'>Web Development</option>
                    <option value='Python Programming Language'>Python Programming Language</option>
                    <option value='Game Development'>Game Development</option>
                    <option value='Mobile Development'>Mobile Development</option>
                    <option value='Artificial Intelligence and Robotics'>Artificial Intelligence and Robotics</option>
                    <option value='3D Design and Modeling'>3D Designs and Modeling</option>
                    <option value='Data Science'>Data Science</option>
                </select>
            </div>
            <div className='text-field f-style mt-3'>
                <select className='select-field' required>
                    <option value=''>---Select Payment---</option>
                    <option value='Cash'>Cash</option>
                    <option value='Bank Transfer'>Bank Transfer | Name</option>
                </select>
            </div>

            <div className='desire-course mt-6 ms-sm-4'>
                <h3>Pick Your Desired Course</h3>
                <div className='pick ms-sm-5 mt-4'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Web Development <hr className='enroll-hr ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                       <span className='courseName'> Python Programming Language</span> <hr className='enroll-hr2 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Game Development <hr className='enroll-hr3 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Mobile Development <hr className='enroll-hr4 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        <span className='courseName'>Artificial Intelligence and Robotics</span> <hr className='enroll-hr5 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        <span className='courseName'>3D Designs and Modeling</span> <hr className='enroll-hr6 ms-3 mt-4'/><span className='ms-4'>#150,000</span>
                    </label>
                </div>
                <div className='pick ms-sm-5'>
                    <label className='d-flex align-items-center f-style fs-5'>
                        Data Science <hr className='enroll-hr7 ms-3 mt-4'/> <span className='ms-4'>#150,000</span>
                    </label>
                </div>
            </div>
          <button type='submit' className='f-style enrollBtn mt-5 fs-5'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default EnrollPage