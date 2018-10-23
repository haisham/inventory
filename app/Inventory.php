<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $fillable = [
        'action', 'quantity', 'unit_price', 'date'
    ];
    
    public function inventory()
    {
        return $this->belongsTo('App\User');
    }
}