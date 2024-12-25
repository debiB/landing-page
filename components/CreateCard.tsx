"use client"
import { Input } from './ui/input';
import { FileSymlink } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const CreateCard = () => {
  return (
    <div className='my-10'>
      <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
        Create your card
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
      <div className='flex justify-center'>
      <div className="relative w-8/12">
        <Input
          type="text"
          placeholder="Text"
          defaultValue="Https://makeupartist.com"
          className="p-5 border-2 border-amber-900 pr-12 text-amber-900 text-xl font-bold"
        />
        <FileSymlink
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-amber-900"
          onClick={() =>
            navigator.clipboard.readText().then((text) => {
              const inputElement = document.querySelector(
                'input[type="text"]'
              ) as HTMLInputElement | null;
              if (inputElement) {
                inputElement.value = text;
              }
            })
          }
        />
      </div>
      
      </div>
      <div className='flex justify-center'>
       <Button className="bg-amber-900 font-bold px-11 py-6 my-10 rounded-lg text-md">Add to Contact</Button>
      </div>
    </div>
  );
};

export default CreateCard;