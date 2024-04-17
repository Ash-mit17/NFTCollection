import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Token() {
  const router = useRouter();
  const { query } = router;
  const [token, setToken] = useState({
    image: null,
    name: "Web 3"
  });

  const handleLoad = async () => {
    try {
      if (query.tokenId) {
        const res = await fetch(`/api/${query.tokenId - 1}`);
        const json = await res.json();
        setToken(json);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  
  useEffect(() => {
    handleLoad();
  }, [query.tokenId]);

  return (
    <div style={{ textAlign: "center" }}>
      {token.image ? (
        <>
          <h1>Token</h1>
          <img src={token.image} alt="Token Image" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
