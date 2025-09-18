import { useState } from 'react';
import { Calculator, DollarSign, ArrowRight } from 'lucide-react';

const QuoteCalculator = () => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [size, setSize] = useState('');
  const [quality, setQuality] = useState('');
  const [estimate, setEstimate] = useState(0);

  const calculateQuote = () => {
    const prices = {
      'kitchen': 25000, 'bathroom': 15000, 'addition': 40000,
      'roof': 12000, 'remodel': 75000
    };
    const sizeMultiplier = { 'small': 0.7, 'medium': 1, 'large': 1.5 };
    const qualityMultiplier = { 'standard': 1, 'premium': 1.4, 'luxury': 1.8 };

    const base = prices[projectType as keyof typeof prices] || 20000;
    const final = base * (sizeMultiplier[size as keyof typeof sizeMultiplier] || 1) *
                  (qualityMultiplier[quality as keyof typeof qualityMultiplier] || 1);

    setEstimate(Math.round(final));
    setStep(4);
  };

  return (
    <section className="py-20 bg-blue-50" id="quote-calculator">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Calculator className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Get Instant Quote</h2>

          {step === 1 && (
            <div>
              <h3 className="text-xl mb-6">Select Project Type:</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { value: 'kitchen', label: 'Kitchen', icon: '🍳' },
                  { value: 'bathroom', label: 'Bathroom', icon: '🛁' },
                  { value: 'addition', label: 'Addition', icon: '🏠' },
                  { value: 'roof', label: 'Roofing', icon: '🏘️' },
                  { value: 'remodel', label: 'Full Remodel', icon: '🏡' }
                ].map(type => (
                  <button
                    key={type.value}
                    onClick={() => { setProjectType(type.value); setStep(2); }}
                    className="p-4 border-2 rounded-lg hover:border-yellow-500 hover:bg-yellow-50"
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-semibold">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl mb-6">Project Size:</h3>
              <div className="space-y-4 mb-6">
                {[
                  { value: 'small', label: 'Small', desc: 'Basic updates' },
                  { value: 'medium', label: 'Medium', desc: 'Moderate renovation' },
                  { value: 'large', label: 'Large', desc: 'Extensive work' }
                ].map(s => (
                  <button
                    key={s.value}
                    onClick={() => { setSize(s.value); setStep(3); }}
                    className="w-full p-4 text-left border-2 rounded-lg hover:border-yellow-500"
                  >
                    <div className="font-semibold">{s.label}</div>
                    <div className="text-gray-600">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl mb-6">Material Quality:</h3>
              <div className="space-y-4 mb-6">
                {[
                  { value: 'standard', label: 'Standard', desc: 'Good value materials' },
                  { value: 'premium', label: 'Premium', desc: 'High-end finishes' },
                  { value: 'luxury', label: 'Luxury', desc: 'Top-tier materials' }
                ].map(q => (
                  <button
                    key={q.value}
                    onClick={() => { setQuality(q.value); calculateQuote(); }}
                    className="w-full p-4 text-left border-2 rounded-lg hover:border-yellow-500"
                  >
                    <div className="font-semibold">{q.label}</div>
                    <div className="text-gray-600">{q.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Estimated Cost:</h3>
              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                  <div className="text-4xl font-bold text-yellow-600">
                    ${(estimate * 0.85).toLocaleString()} - ${(estimate * 1.15).toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Contact us for a detailed quote!</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => { setStep(1); setProjectType(''); setSize(''); setQuality(''); }}
                  className="px-6 py-3 border border-gray-300 rounded-lg"
                >
                  Calculate Again
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold"
                >
                  Get Detailed Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
