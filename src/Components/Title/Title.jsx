import { AiFillStar } from 'react-icons/ai';

const Title = ({heading,subHeading}) => {
    return (
        <div className="text-center flex justify-center items-center flex-col">
            <h2 className='flex items-center font-medium text-xl'><span className='px-1'><AiFillStar></AiFillStar></span>{heading}<span className='px-1'><AiFillStar></AiFillStar></span></h2>
            <p className='py-2 text-[#5f5f5f]'>{subHeading}</p>
        </div>
        
    );
};

export default Title;