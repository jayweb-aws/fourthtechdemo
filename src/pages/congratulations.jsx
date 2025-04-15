import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Link from 'next/link';

export default function Application() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);
  }, []);

  return (
    <div>
      <Confetti width={dimensions.width} height={dimensions.height} />
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
        }}
      >
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark draw"></div>
        </div>
        <h1 className="font-bold pt-3 pb-2 text-3xl">Congratulations!</h1>
        <p className="font-medium py-2 text-lg">
          Check the 'Certificate' tab to view, save or print your certificate!
        </p>
        <button
          className="submit-btn"
          type="submit"
          onclick="alert('🥺🥺🥺🥺🥺\n Oh no you didn\'t!!!!!!!');"
        >
          <Link href={`/dashboard/certificates`}>View Certificate</Link>
        </button>
      </div>
    </div>
  );
}
