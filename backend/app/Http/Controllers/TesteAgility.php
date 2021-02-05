<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class TesteAgility extends Controller
{

    public function getTeste()
    {
        $client = new Client();
        $args = ['Content-Type'  => 'application/json'];

        $response = $client->get('https://eagle-backend-dev.somosagility.com.br/getTeste', $args);

        if ($response->getStatusCode() === 200) {
            return $response->getBody();
        }
        return json_encode(['msg' => 'ocorreu o erro de status: ' . $response->getStatusCode()]);
    }

    public function postTeste()
    {
        $client = new Client();
        $args = [
            'Content-Type'  => 'application/json',
            'key'           => '@56a9yRoC#M56y0tW'

        ];
        $response = $client->post('https://eagle-backend-dev.somosagility.com.br/postTeste', $args);

        if ($response->getStatusCode() === 200) {
            return $response->getBody();
        }
        return json_encode(['msg' => 'ocorreu o erro de status: ' . $response->getStatusCode()]);
    }
}
