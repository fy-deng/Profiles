if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') != -1) {
    if ($response.status != 200) {
        // $notification.post("EmbyPremiere 已激活 - OCD", "", "");
        $done({ status: 200, headers: $response.headers, body: '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}' })
    } else {
        $done({})
    }
} else {
    $done({})
}