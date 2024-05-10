import http from "../request";

export function getAllMobileFood() {
    return http.get("/mobileFood/list");
}