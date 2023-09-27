import React from "react";
import dynamic from "next/dynamic";

const HelloSignComponent = dynamic(
  () => import("@/components/HelloSignComponent"), // Adjust path based on your directory structure
  { ssr: false }
);

const Signing = () => {
  return (
    <div>
      <HelloSignComponent
        claimUrl="https://app.hellosign.com/editor/embeddedSign?signature_id=0f07acaafe19b3affbf4d20913945a0b&token=ef0f4c04899a356f5723d6c86fe6ae6f"
        clientId="e0ceeba6cccdaa89aee90717efe7171c"
      />
    </div>
  );
};

export default Signing;
