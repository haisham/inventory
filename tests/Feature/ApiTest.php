<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiTest extends TestCase
{

    /**
     * Test API POST
     *
     * @return void
     */
    public function testPostAPI()
    {
        $response = $this->withHeaders(
            [
            'Content-type' => 'application/json',
            ]
        )->json('POST', '/inventory', ['action' => 'buy', 'date' => '2016-01-07', 'quantity' => '12', 'unitPrice' => '10']);

        $response
            ->assertStatus(200)
            ->assertJson(
                [
                'success' => true,
                ]
            );
    }

     /**
     * Test API GET
     *
     * @return void
     */
    public function testGetAPI()
    {
        $response = $this->withHeaders(
            [
            'Content-type' => 'application/json',
            ]
        )->json('GET', '/inventory/2016-01-11');

        $response
            ->assertStatus(200)
            ->assertJson(
                [
                'success' => true,
                ]
            );
    }
}

