const fetch = require("node-fetch");
const querystring = require("querystring");

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
  const response = await fetch(
    "https://youtubeanalytics.googleapis.com/v2/reports?endDate=2020-01-01&ids=channel%3D%3DMINE&metrics=views&sort=-views&startDate=2019-01-01",
    {
      headers: {
        accept: "*/*",
        authorization:
          "Bearer ya29.GlyYBsEImVlLT2KLTSnf43xF36pM_hfAcL5fqiEo4BabO59cNJR9H4ZXrNrqOW_c6H9mO4xy8EEx7zZCSkN5yzCE-dDzu2pWNka8Dpof5a6QeYKNgxAGnOW6It5rIg"
      },
      body: null,
      method: "GET",
      mode: "cors"
    }
  );
  console.log(await response.json());
};

const oAuthStep2 = async () => {
  const qs = querystring.stringify({
    scope: "https://www.googleapis.com/auth/yt-analytics.readonly",
    access_type: "offline",
    include_granted_scopes: "true",
    state: "state_parameter_passthrough_value",
    redirect_uri: "https://localhost/oauth/callback",
    response_type: "code",
    client_id:
      "47558631583-at1d71l6nhegn2tsodip4n8h2ebi668e.apps.googleusercontent.com"
  });
  const url = "https://accounts.google.com/o/oauth2/v2/auth?" + qs;
  const response = await fetch(url, {
    body: null,
    method: "GET",
    mode: "cors"
  });
  console.log(url);
  // console.log(await response.text());
};

const oAuthStep5 = async () => {
  const body = {
    code:
      "4/1QCadl5jwdMNRr7ksPV_rZLxIqJWf3G28DqZqCe3zvChJ3dFtWTLgHd-jjC99XPcjIclc9cd_NWJaC3OFlXqFao",
    client_id:
      "47558631583-at1d71l6nhegn2tsodip4n8h2ebi668e.apps.googleusercontent.com",
    client_secret: "Cbr2xJUII0Hn4SuDbOpVH0sg",
    redirect_uri: "https://localhost/oauth/callback",
    grant_type: "authorization_code"
  };
  const url = "https://www.googleapis.com/oauth2/v4/token";
  const response = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  });
  console.log(await response.text());
};

const runAsync = async () => {
  // await oAuthStep2();
  // await oAuthStep5();
  await test();
};

runAsync()
  .catch(e => console.error(e))
  .then(() => process.exit(0));
