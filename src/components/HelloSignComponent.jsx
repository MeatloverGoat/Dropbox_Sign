import React, { useEffect } from "react";
import HelloSign from "hellosign-embedded";

const HelloSignComponent = ({ claimUrl, clientId }) => {
  useEffect(() => {
    const client = new HelloSign();

    client.open(claimUrl, {
      clientId: clientId,
      skipDomainVerification: true,
    });

    return () => {
      client.close();
    };
  }, [claimUrl, clientId]);

  return (
    <div id="hellosign-iframe-container">
      {/* The iframe will be automatically appended by HelloSign SDK here */}
    </div>
  );
};

export default HelloSignComponent;
