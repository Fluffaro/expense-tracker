import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

import { CreditCard } from "lucide-react";
import { Wallet } from "lucide-react";
import { Info } from "lucide-react";
import { FileSpreadsheet } from "lucide-react";
import { MessageSquareWarning } from "lucide-react";
import { CircleUser } from 'lucide-react';
import { Settings2 } from 'lucide-react';
export default function Home() {
  return (
    <div className=" h-screen bg-amber-300">
      <div className="flex">
        <div className="bg-amber-500 flex flex-col w-[15vw] h-screen sticky p-8 gap-y-4">
          <div className="bg-red-500 w-full min-h-10 flex items-center justify-center font-bold">
            <p>SSaver</p>
          </div>
          <div className="flex flex-col h-screen justify-between">
            <div className="bg-red-500 flex flex-col gap-2 w-full min-h-10 max-h-10 mt-5">
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <LayoutDashboard /> Dashboard
                </p>
              </div>
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <CreditCard /> Transactions
                </p>
              </div>
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <Wallet /> Budget Planner
                </p>
              </div>
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <Image
                    src="/icons/credit-card.png"
                    alt="Credit Card"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                  Accounts
                </p>
              </div>
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <FileSpreadsheet /> Reports
                </p>
              </div>
              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300">
                <p className="flex items-center gap-2">
                  <MessageSquareWarning /> Alerts
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 mb-2">
              <div className="flex flex-col gap-y-2">
                <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300 max-h-10">
                  <p className="flex items-center gap-2">
                    <Info /> Help
                  </p>
                </div>
                <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300 max-h-10">
                  <p className="flex items-center gap-2">
                    <Settings2 /> Settings
                  </p>
                </div>
              </div>

              <div className="flex bg-blue-500 w-full min-h-10 hover:bg-blue-400 transition-all  items-center pl-12  duration-300 max-h-10">
                <p className="flex items-center gap-2">
                  <CircleUser /> Neil Villarey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 min-w-20 flex-1 max-h-20"></div>
        <div className="bg-green-500 min-w-20 flex-1 max-h-20"></div>
      </div>
    </div>
  );
}
