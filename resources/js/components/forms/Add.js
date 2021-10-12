import React from 'react';
import Select from 'react-select';

const InputOptions = [
    { label: "Input", value: "input" },
    { label: "Select", value: "select" },
    { label: "Number input", value: "number_input" }
  ];

function Add() {
    return (
        <div>
           <form method="post" target = "/forms">
                <div class="mb-3">
                    <label for="seciba" class="form-label">Secība</label>
                    <input type="number" class="form-control" id="seciba"/>
                </div>
                <div class="mb-3">
                    <label for="laukaTips" class="form-label">Lauka tips</label>
                    <Select id = "laukaTips" options={InputOptions} />
                </div>
                <div class="mb-3">
                    <label class="form-label" for="lauka_nosaukums">Lauka nosaukums</label>
                    <input type="text" class="form-control" id="lauka_nosaukums"/>
                </div>
                <div class="mb-3 form-check">
                    <label class="form-check-label" for="required">Obligāts</label>
                    <input type="checkbox" class="required" id="exampleCheck1"/>
                </div>
                <div>
                <button class="btn btn-primary">+ Pievienot vel</button>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Add;

