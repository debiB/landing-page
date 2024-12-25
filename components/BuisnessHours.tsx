import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const BuisnessHours = () => {
  return (
    <div className="py-10">
       <div className="text-3xl flex justify-center font-bold text-amber-900 relative mb-10">
        Buisness Hours
        <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-[4%] h-1 bg-amber-900 rounded-md -my-2"></span>
      </div>
    <div className="flex justify-center">
      <Card className="p-1 mb-2 border-4 border-amber-900  w-8/12">
            <CardContent className="p-5">
             <div className="flex justify-between w-full">
              <p>Monday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Tuesday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Wednesday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Thursday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Friday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Saturday</p>
              <p>4:00 PM - 5:00 PM</p>
              </div>
              <div className="flex justify-between w-full">
              <p>Sunday</p>
              <p>Closed</p>
              </div>
            </CardContent>
          </Card>
    </div>
    </div>
  )
}

export default BuisnessHours