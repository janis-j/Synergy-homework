<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'document_name'
    ];

    public function configurations()
    {
        return $this->hasMany(Configurations::class);
    }
}
