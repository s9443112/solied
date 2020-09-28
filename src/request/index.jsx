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
            crossDomain: true,
            xhrFields: { withCredentials: true },
            method: type
        });
    } catch (error) {
        console.log(error)
        console.log(pad + url)
        return checkLoginError(error);
        
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
            crossDomain: true,
            xhrFields: { withCredentials: true },
            mode: "cors",
            credentials: "include",
        });

    } catch (error) {
        console.log(error)
        console.log(pad + url)
        checkLoginError(error);
        // throw error;
    }
}

function checkLoginError(error){
    let result = {
        "type": 2,
        "error": error
    }
    return result
}



export function use_getCookieByName(key) {
    return getCookieByName(key)
}


export async function login(data) {
    return (await post("/api/login", data))
}
export async function info() {
    return (await get("/api/info"))
}
export async function get_machine() {
    return (await get("/api/machine"))
}
export async function get_machine_status() {
    return (await get("/api/get_machine_status"))
}
export async function get_machine_power() {
    return (await get("/api/get_machine_power"))
}


export async function get_order() {
    return (await get("/api/get_order"))
}
export async function get_order_content() {
    return (await get("/api/get_order_content"))
}
export async function get_order_content_id(data) {
    return (await post("/api/get_order_content_id",data))
}


export async function get_user() {
    return (await get("/api/get_user"))
}

export async function insert_dispatch(data) {
    return (await post("/api/insert_dispatch",data))
}

