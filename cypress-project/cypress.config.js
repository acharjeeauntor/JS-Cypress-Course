const ENV = process.env.ENV //prod || test
if (!ENV || ![`prod`,`test`].includes(ENV)) {
  console.log(`ENV is missing or incorrect.Please provide a correct environment value like "ENV=prod|test npm run smoke-test"`);
  process.exit();
} 

require('dotenv').config({path:`.env.${ENV}`,override:true})

module.exports = {
  projectId: "zdt6ck",
  video:true,
  videosFolder:'cypress/failvideo',
  videoUploadOnPasses:false,
  screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/failScreenshot',
  // reporter:'mochawesome',
  // reporterOptions:{
  //   "reportDir":"cypress/test-reports",
  //   "overwrite":false,
  //   "html":true
  // },
  e2e: {
    env:{
      baseurl: process.env.BASE_URL,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    }
},

}
