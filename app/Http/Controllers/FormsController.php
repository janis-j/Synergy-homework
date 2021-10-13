<?php

namespace App\Http\Controllers;

use App\Models\Configurations;
use App\Models\Documents;
use Illuminate\Http\Request;

class FormsController extends Controller
{

    public function getDocuments()
    {
    $forms = Documents::with('configurations')->get();
    $forms = $forms->map(function($eachForm){
        $form =  [
            "id" => $eachForm->id,
            "document_name" => $eachForm->document_name,
            "created_at" => $eachForm->created_at,
            "configurations" => $eachForm->configurations->toArray()
        ];
        return $form;
    });
    // echo "<pre>";
    // var_dump($_SERVER);
    return $forms->toJson();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
