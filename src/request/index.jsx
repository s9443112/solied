import $ from "jquery";

var pad = "";
if (process.env.REACT_APP_BACKEND_URL[process.env.REACT_APP_BACKEND_URL.length - 1] !== "/") {
    pad = "/";
}
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;

    for (var i = 0, l = cookieAry.length; i < l; ++i) {
        cookie = $.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}
function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}


async function post(url, data, type = "POST") {
    if (url[0] === "/") {
        url = url.substr(1);
    }
    if (typeof data !== "string") {
        data = JSON.stringify(data);
    }
    try {
        return await $.ajax({
            url: process.env.REACT_APP_BACKEND_URL + pad + url,
            data: data,
            contentType: "application/json",
            dataType: "json",
            xhrFields: { withCredentials: true },
            method: type
        });
    } catch (error) {
        console.log(error)
        console.log(pad + url)
        // checkLoginError(error);
        throw error;
    }
}

async function get(url, params = {}) {
    if (url[0] === "/") {
        url = url.substr(1);
    }
    try {
        let URL = new window.URL(process.env.REACT_APP_BACKEND_URL + pad + url);
        for (let param in params) {
            if (params[param] !== null && params[param] !== undefined) {
                URL.searchParams.set(param, params[param]);
            }
        }
        return await $.ajax({
            url: URL.href,
        });
        
    } catch (error) {
        console.log(error)
        console.log(pad + url)
        throw error;
    }
}



export function use_getCookieByName(key) {
    return getCookieByName(key)
}


export async function login(data){
    return (await post("/login",data))
}

export async function get_raw_data() {
    return (await get("/get_raw_data")).data
}

export async function get_history() {
    return (await get("/history")).data
}

