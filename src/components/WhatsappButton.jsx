import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";


function WhatsappButton() {
  return (
    <div>
      <Link href="https://wa.me/923034826697?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20products."
      target='_blank'
      rel='noopener norefferer'>
      <IoLogoWhatsapp className='text-[70px]! fixed bottom-5 z-20 right-2 text-green-600 cursor-pointer' />
      </Link>
    </div>
  )
}

export default WhatsappButton



// "use client";

// import { useState } from "react";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoClose, IoSend } from "react-icons/io5";

// export default function WhatsappButton() {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   const phone = "03034826697"; // Your WhatsApp number

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

//     window.open(url, "_blank");
//     setMessage("");
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-50">

//       {open && (
//         <div className="w-[320px] mb-3 bg-white shadow-2xl rounded-xl overflow-hidden">

//           <div className="bg-green-600 text-white p-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <IoLogoWhatsapp size={28} />
//               <div>
//                 <h3 className="font-semibold">WhatsApp Chat</h3>
//                 <p className="text-xs">Typically replies instantly</p>
//               </div>
//             </div>

//             <IoClose
//               size={24}
//               className="cursor-pointer"
//               onClick={() => setOpen(false)}
//             />
//           </div>

//           <div className="bg-gray-100 p-4 h-[220px]">
//             <div className="bg-white p-3 rounded-lg text-sm w-fit shadow">
//               Hello! 👋
//               <br />
//               How can we help you today?
//             </div>
//           </div>

//           <div className="p-3 flex gap-2">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") sendMessage();
//               }}
//               className="border rounded-full px-4 py-2 w-full outline-none text-sm"
//             />

//             <button
//               onClick={sendMessage}
//               className="bg-green-600 text-white p-3 rounded-full"
//             >
//               <IoSend />
//             </button>
//           </div>

//         </div>
//       )}

//       <button
//         onClick={() => setOpen(!open)}
//         className="bg-green-600 text-white rounded-full p-4 shadow-lg"
//       >
//         {open ? <IoClose size={30} /> : <IoLogoWhatsapp size={35} />}
//       </button>

//     </div>
//   );
// }

