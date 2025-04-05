import React from 'react';
import {FaTrophy} from 'react-icons/fa';

const Introduction = () => {
    return (
        <div className="text-center h-screen my-10 space-y-3">
            <h2 className="text-2xl md:text-8xl font-bold leading-snug">
                Empowering Small <br/> Businesses to{' '}
                <span className="text-[#01BF74] flex items-center gap-1 inline-flex">
          Grow  &nbsp;<img className={"w-6 h-6 lg:w-16 lg:h-16"} src="/img/icon/img.png" alt=""/> &nbsp;
        </span>and  <br/>
                <span className="text-[#417DFF] flex items-center gap-1 inline-flex">
          Succeed &nbsp;<img className={"w-6 h-6 lg:w-16 lg:h-16"} src="/img/icon/img_1.png" alt=""/> &nbsp;
        </span>Equitably
            </h2>
        </div>
    );
};

export default Introduction;
