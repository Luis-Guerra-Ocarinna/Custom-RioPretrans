<?php
switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $url = $_GET["url"];

        $post = file_get_contents("php://input");

        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        echo curl_exec($ch);

        exit;
        break;

    default:
        http_response_code(501); // Not implemented
        echo "Not implemented";
        exit;
        break;
}
