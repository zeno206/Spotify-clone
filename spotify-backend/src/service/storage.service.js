const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "public_Hk4wMtoH0LuiVfXG/cE2mII8Ukk=",
  privateKey: "private_EJiqTmZvEMCXNlNc1IWFJg/+Jrw=",
  urlEndpoint: "https://ik.imagekit.io/k5atleoa0/",
});

async function uploadFile(file) {
  const result = await imagekit.upload({
    file,
    fileName: "music.mp3",
  });
  return result;
}
console.log("upload function hit");

module.exports = { uploadFile };
