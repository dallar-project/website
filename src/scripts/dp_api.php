<?php
//Not currently needed thanks to cos.io service.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'https://digitalprice.io/markets/get-currency-summary?currency=BALANCE_COIN_BITCOIN'
));
$resp = curl_exec($curl);

$obj = json_decode($resp, true);
foreach($obj as $item) {
    if($item["currency"] == $_GET['currency']) {
        echo json_encode($item);
    }
}
?>