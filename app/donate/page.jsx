"use client";
import React, { useState, useRef, useEffect } from "react";

const paymentInstructions = [
  {
    title: "1. Vodacom (M-Pesa)",
    logo: "/assets/M-pesaLogo.png",
    steps: [
      "Dial *150*00#",
      "Choose Option 4: Lipa kwa M-Pesa",
      "Choose Option 4: Lipa namba ya biashara",
      "Enter Business Number: 58267308",
      "Enter Amount: 3000",
      "Enter Reference (optional): Akili Supa 2025",
      "Confirm and enter your PIN",
    ],
  },
  {
    title: "2. Tigo (Tigo Pesa)",
    logo: "/assets/yasLogo.png",
    description: "Tigo Pesa allows cross-network payments to M-Pesa.",
    steps: [
      "Dial *150*01#",
      "Choose Option 5: Lipa bili/PAY BILL",
      "Choose Option 3: Mitandao mingine (Other Networks)",
      "Select Vodacom M-Pesa",
      "Enter Business Number: 58267308",
      "Enter Amount: 3000",
      "Confirm and enter your PIN",
    ],
  },
  {
    title: "3. Airtel (Airtel Money)",
    logo: "/assets/airtelLogo.png",
    description: "You can pay to M-Pesa business numbers via Airtel.",
    steps: [
      "Dial *150*60#",
      "Choose Option 5: Lipa bili",
      "Choose Option 4: Lipa kwa namba ya kampuni",
      "Enter Business Number: 58267308",
      "Enter Amount: 3000",
      "Reference (optional): Akili Supa 2025",
      "Confirm and enter your PIN",
    ],
  },
  {
    title: "4. Halotel (Halopesa)",
    logo: "/assets/halotelLogo.png",
    description: "Halopesa supports payments to other networks.",
    steps: [
      "Dial *150*88#",
      "Select Option 5: Lipa bili",
      "Choose Mitandao mingine or Vodacom",
      "Enter Business Number: 58267308",
      "Enter Amount: 3000",
      "Confirm and enter PIN",
    ],
  },
  {
    title: "5. TTCL (T-Pesa)",
    logo: "/assets/ttclLogo.jpg",
    description: "You can send payments to M-Pesa business numbers.",
    steps: [
      "Dial *150*71#",
      "Choose Option 5: Lipa bili",
      "Choose Option 3: Mitandao mingine",
      "Select Vodacom",
      "Enter Business Number: 58267308",
      "Enter Amount: 3000",
      "Confirm and enter PIN",
    ],
  },
];

const DonatePage = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    if (openIdx !== null && contentRefs.current[openIdx]) {
      contentRefs.current[openIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [openIdx]);

  return (
    <section className="py-16 min-h-screen" style={{ background: 'var(--soft-white)' }}>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--deep-red)' }}>
          How to Donate via Mobile Money
        </h1>
        <div className="space-y-4">
          {paymentInstructions.map((method, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={method.title} className="bg-white overflow-hidden transition-shadow" style={{ border: '1.5px solid var(--grayish-blue)', borderRadius: '0.5rem' }}>
                <button
                  className="w-full flex items-center gap-4 p-4 focus:outline-none focus:ring-2 focus:ring-deep-red transition"
                  style={{ cursor: 'pointer', borderBottom: isOpen ? '1px solid #e5e7eb' : 'none', borderRadius: isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem' }}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <img src={method.logo} alt={method.title + ' logo'} className="h-10 w-10 object-contain" />
                  <span className="flex-1 text-left text-lg font-semibold" style={{ color: 'var(--deep-red)' }}>{method.title}</span>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  ref={el => (contentRefs.current[idx] = el)}
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                    overflow: 'hidden',
                    borderTop: isOpen ? 'none' : undefined,
                  }}
                  aria-hidden={!isOpen}
                >
                  {isOpen && (
                    <div className="p-6">
                      {method.description && (
                        <p className="mb-2 text-sm text-gray-700">{method.description}</p>
                      )}
                      <ol className="list-decimal list-inside space-y-1 text-base text-gray-900">
                        {method.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonatePage; 