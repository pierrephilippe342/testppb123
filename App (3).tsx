import { useState } from "react";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">Test PWA Application</h1>
          <p className="text-gray-600">Une application simple pour tester le développement web</p>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Label htmlFor="hello-switch" className="text-lg">
            Interrupteur
          </Label>
          <Switch
            id="hello-switch"
            checked={isOn}
            onCheckedChange={setIsOn}
          />
        </div>
        
        <div className="text-center min-h-[60px] flex items-center justify-center">
          {isOn && (
            <div className="animate-fade-in">
              <p className="text-2xl text-green-600 font-medium">
                Hello World! 🌍
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}