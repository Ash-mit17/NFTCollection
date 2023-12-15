// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const imageUri = `https://raw.githubusercontent.com/Ash-mit17/NFTCollection/master/frontend/public/cryptodevs/${Number(tokenId) - 1}.svg`

  const name = `Web3 Dev # ${tokenId}`;
  const description = "Web3Devs is an NFT Collection for Web3 Developers";
  const image = imageUri;
  //https://raw.githubusercontent.com/Ash-mit17/NFTCollection/master/frontend/public/cryptodevs/0.svg

  return res.json({
    name: name,
    description: description,
    image: image
  })
}
