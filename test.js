const fetch = require("node-fetch");

const devCopy = async () => {
  const response = await fetch(
    "https://content-youtubeanalytics.googleapis.com/v2/reports?endDate=2020-01-01&ids=channel%3D%3DMINE&metrics=views&sort=-views&startDate=2019-01-01&key=AIzaSyCXd3M-Cb0KvyBMKTNS23nfaoiez6l51Go",
    {
      headers: {
        accept: "*/*",
        authorization:
          "Bearer ya29.GlyTBszI7Nz8dml4UldznxEu7ioKp68JXEOZ0kfM5z-MqpfyAq9eyJ2LRWXTS7i_z9c-qu5o28yicFXdNp8RClu53TsL4Hst2Ymad3KHF-H2ORZ_YO8XxGwNVm-2ew",
        "x-referer": "https://developers.google.com"
      },
      body: null,
      method: "GET",
      mode: "cors"
    }
  );
  console.log(await response.json());
};

const test = async () => {
  const YOUTUBE_API_KEY = "AIzaSyA3Mhe4im15PTP-fvgyPMRGZcyqin5aF08";
  const response = await fetch(
    "https://content-youtubeanalytics.googleapis.com/v2/reports?endDate=2020-01-01&ids=channel%3D%3DMINE&metrics=views&sort=-views&startDate=2019-01-01&key=AIzaSyA3Mhe4im15PTP-fvgyPMRGZcyqin5aF08",
    {
      headers: {
        accept: "*/*",
          "Bearer ya29.GlyTBszI7Nz8dml4UldznxEu7ioKp68JXEOZ0kfM5z-MqpfyAq9eyJ2LRWXTS7i_z9c-qu5o28yicFXdNp8RClu53TsL4Hst2Ymad3KHF-H2ORZ_YO8XxGwNVm-2ew",
        "x-referer": "https://developers.google.com"
      },
      body: null,
      method: "GET",
      mode: "cors"
    }
  );
  console.log(await response.json());
};

const runAsync = async () => {
  await test();
};

runAsync()
  .catch(e => console.error(e))
  .then(() => process.exit(0));
