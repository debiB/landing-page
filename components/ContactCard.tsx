import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ContactCardProps {
  Icon: LucideIcon; // Allow passing any Lucide icon component
  primaryText: string;
  secondaryText: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="bg-amber-50">
      <Card className="pt-5 bg-slate-200 w-full">
        <CardContent>
          <div className="flex items-center space-x-4">
            <Icon className="text-amber-900" />
            <div className="flex flex-col items-start">
              <p className="text-lg text-amber-900 font-bold">{primaryText}</p>
              <p className="text-md text-amber-900 font-light">
                {secondaryText}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCard;
