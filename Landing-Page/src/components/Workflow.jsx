import { CheckCircle2 , LoaderCircle } from "lucide-react";
import codeImg from "../assets/code1(1)(1).jpg";
import codeImg2 from "../assets/code2(1)(1).jpg";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div className="mt-20">
<h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
Accelerate your  <span className="bg-gradient-to-r from-purple-800 to-purple-950 text-transparent bg-clip-text">
Coding Workflow.
</span>
<div className="flex flex-wrap justify-center items-center">
    <div className="p-7 w-full lg:w-1/2">
    <img src={codeImg} alt="code1" />
    <img src={codeImg2} alt="code2" />
    </div>
    <div className="pt-12 w-full lg:w-1/2">
    {checklistItems.length > 0 ? 
    checklistItems.map((item, index) => {
      <div key={index} className="flex mb-12">
       <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
      <CheckCircle2/>
       </div>
       <div>
      <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
      <p className="text-md text-neutral-500">{item.description}</p>
       </div>
  </div>
  }) : <p className="mt-5 p-3 text-gray-950 flex justify-center items-center">
    <LoaderCircle size={36} />
  </p>
    }
    
    </div>
</div>
</h2>
</div>
  )
}

export default Workflow