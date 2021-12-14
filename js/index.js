const { href } = window.location;
const inviteCode = getQueryVariable('code')
const type = getQueryVariable('type')
const uid = getQueryVariable('uid')
const downloadUrl = dealUrl(getQueryVariable('downloadUrl'))
const country = getQueryVariable('country')
const avatar = dealUrl(getQueryVariable('avatar'))

var firebaseConfig = {
    apiKey: "AIzaSyDGVagtkmIlP23TpLoUDaoUNLVdXYB2-7M",
    authDomain: "midas-touch-607da.firebaseapp.com",
    // databaseURL: "https://midas-touch-607da-default-rtdb.firebaseio.com",
    projectId: "midas-touch-607da",
    storageBucket: "midas-touch-607da.appspot.com",
    messagingSenderId: "352289841187",
    appId: "1:352289841187:web:6917e43ed0ba9698ec5196",
    measurementId: "G-H0CG01K98K"

    // apiKey: "AIzaSyBUdri-7vf1wd5V7TSlAVxwKMoKj_5QSN0",
    // authDomain: "bt-game-download.firebaseapp.com",
    // projectId: "bt-game-download",
    // storageBucket: "bt-game-download.appspot.com",
    // messagingSenderId: "148885063480",
    // appId: "1:148885063480:web:f94e0cd214766dfc3ce3cd",
    // measurementId: "G-X144TZFMHM"
};
// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    window.$analytics = firebase.analytics() || null;
} catch (error) {
    console.log(error, "error==")
    let firebase = {}
    window.$analytics = {
        logEvent: () => { }
    }
}

window.$analytics.logEvent(`showinviteh5-type${type}-${country}`, {
    'page_title': 'invitePage',
    url: href
});
// window.onload = ()=> {
//     showDialog()
// }

function copy() {
    const input = document.getElementById('copy-input')
    input.setAttribute('value', `matrixInviteCode:${inviteCode}-${type}`);
    input.focus()
    input.setSelectionRange(0, -1)
    document.execCommand('copy')
}

function clickBtn() {
    window.$analytics.logEvent(`clickinviteh5-type${type}-${country}`, {
        'page_title': 'invitePage',
        url: href
    });
    copy()
    console.log(downloadUrl);
    if (downloadUrl === 'false') {
        return
    }
    window.location='https://creator.kodular.io/#5249724590325760'
}