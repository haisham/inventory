<?php
/**
 * Inventory controller
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Inventory;
use Validator;
use Illuminate\Support\Facades\Input;


class InventoryController extends Controller
{
    public function index()
    {
        // TODO: get all inventories
    }
    /**
     * Handles input operations on inventory model
     *
     * @access public
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'date' => 'required|date',
            'action' => 'required',
            'quantity' => 'required'
        ]);
        if ($request->get('action') === "buy") {
            $validatedData = $request->validate([
                'unitPrice' => 'required'
            ]);
        }
        //post data is valid - continue
        $date = $request->get('date');
        $action = $request->get('action');
        $quantity = $request->get('quantity');
        $unitPrice = $request->get('unitPrice');
       
        $Inventory = new Inventory();
        $Inventory->action = $action;
        $Inventory->quantity = $quantity;
        $Inventory->unit_price = $unitPrice;
        $Inventory->date = date("Y-m-d H:i:s",strtotime($date));

        if($Inventory->save()) {
            $response = ['success'=>true];
            return response()->json($response);
        }else{
            $response = ['success'=>false];
            return response()->json($response);
        }
    }

}