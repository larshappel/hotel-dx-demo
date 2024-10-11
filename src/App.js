import logo from './logo.svg';
import './App.css';
import AudioButton from './speakerbutton';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner image */}
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/1200/400?random=0)' }}
      ></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8"> {/* Changed max-w-4xl to max-w-md for a narrower pillar */}
        {/* Cards */}
        <div className="space-y-6"> {/* Changed from grid to space-y for vertical stacking */}

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://picsum.photos/1200/400?random=1"
              alt="Card1"
              className="w-full h-24 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">How to check in</h2>
              <p className="text-gray-600">Check-in begins at 3:00 AM</p>
              <p className="text-gray-600">Please have your passport or other ID document ready.</p>
              <hr className='m-3' />
              <p className="text-gray-600 text-xl">Communicate in Japanese</p>

              <div className='mt-4 flex space-x-4'>
                <AudioButton className="m-2" text="I want to check in" audioSrc={`${process.env.PUBLIC_URL}/checkin_shitai.mp3`} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://picsum.photos/1200/400?random=2"
              alt="Card2"
              className="w-full h-24 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">How to pay</h2>
              <p className="text-gray-600">You can use more than just cash.</p>
              <p className="text-gray-600">You can use credit cards and other forms of electronic currency.</p>
              <hr className='m-3' />
              <p className="text-gray-600 text-xl">Communicate in Japanese</p>

              <div className='mt-4 flex space-x-4'>
                <AudioButton className="m-2" text="I will pay in cash" audioSrc={`${process.env.PUBLIC_URL}/genkin.mp3`} />
                <AudioButton className="m-2" text="I will pay by credit card" audioSrc={`${process.env.PUBLIC_URL}/credit_card.mp3`} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default App;
