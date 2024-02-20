import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const Question = ({ show, setShow }) => {

  return (
    <div>
        {
            show ?
                <div className="flex justify-center items-center">
                    <div className="bg-[#fff] w-[600px] h-[200px] border-[#999] border-[1px] border-solid rounded-[10px] p-[50px] absolute top-[28%]">
                    <h1 className="text-[25px] font-[500] text-[#000] text-center">Do you want to edit this template?</h1>
                        <div className="flex justify-center mt-[25px]">
                            <div className="flex gap-[16px] items-center">
                                <p style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center py-[15px] px-[30px] h-[24px] text-[#0AADBF] text-[12px] font-[400] cursor-pointer" onClick={() => setShow(false)}>No</p>
                                <Link to='/AyobaTemplate'target="_blank" className="bg-[#00AABC] rounded-[100px] flex justify-center items-center py-[15px] px-[30px] h-[24px] text-[#fff] text-[12px] font-[400]" onClick={() => setShow(false)}>Yes</Link>
                            </div>
                        </div>
                    </div>
                </div> : null
        }
    </div>
  )
}

Question.propTypes = {
    show: PropTypes.string.isRequired,
    setShow: PropTypes.string.isRequired
};

export default Question