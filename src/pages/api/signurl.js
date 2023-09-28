const { NextApiRequest, NextApiResponse } = require("next");
const { SignatureRequestApi, EmbeddedApi } = require("@dropbox/sign");
const fs = require("fs");
const path = require("path");

const signatureRequestApi = new SignatureRequestApi();

// Configure HTTP basic authorization: api_key
signatureRequestApi.username =
  "f70371279683c298014718f3261207d993edb9116050a9d1c13ee9e3251cc990";

const signer1 = {
  emailAddress: "welkincz@live.cn",
  name: "Charlie Chaplin",
  order: 0,
};

const signer2 = {
  emailAddress: "welkincz@gmail.com",
  name: "Jill",
  order: 1,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: true,
  defaultType: "draw",
};

const data = {
  clientId: "e0ceeba6cccdaa89aee90717efe7171c",
  title: "NDA with Acme Co.",
  subject: "The NDA we talked about",
  message:
    "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [signer1, signer2],
  ccEmailAddresses: ["welkincz@live.cn"],
  files: [fs.createReadStream(path.join(process.cwd(), "public", "Lease.pdf"))],
  signingOptions,
  testMode: true,
};

module.exports = async (req, res) => {
  try {
    const response = await signatureRequestApi.signatureRequestCreateEmbedded(
      data
    );
    const resData = response.body;
    const signatureIds = resData.signatureRequest.signatures.map(
      (sig) => sig.signatureId
    );

    const embeddedApi = new EmbeddedApi();
    embeddedApi.username =
      "f70371279683c298014718f3261207d993edb9116050a9d1c13ee9e3251cc990";

    const embeddedSignUrlResponse = await embeddedApi.embeddedSignUrl(
      signatureIds[0]
    );

    const signUrl = embeddedSignUrlResponse.body.embedded.signUrl;

    console.log("Embedded Sign URL:", signUrl);

    res.status(200).json({ signUrl });
  } catch (error) {
    console.error("Exception when calling Dropbox Sign API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
