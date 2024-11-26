import React from 'react';

export default function Form() {
    return (
        <>
            <form id='contact' className='w-full '>
                <div className='flex gap-6'>
                    <div className='w-1/2'>
                        <input className='w-full h-[57px] outline-none bg-transparent border-[2px] border-textGray px-3 uppercase' placeholder='Seu nome' type="text" />
                    </div>
                    <div className='w-1/2'>
                        <input className='w-full h-[57px] outline-none bg-transparent border-[2px] border-textGray px-3 uppercase' placeholder='Seu E-mail' type="text" />
                   </div>                
                </div>

                <textarea className='w-full mt-8 h-[150px] outline-none resize-none bg-transparent border-[2px] border-textGray px-3 py-4 uppercase' placeholder='No que podemos ajudar?' name="" id=""></textarea>

            </form>
        </>
    );
}