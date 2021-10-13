import React from 'react';
import Select from 'react-select';

const InputOptions = [
    { label: "Input", value: 1 },
    { label: "Select", value: 2 },
    { label: "Number input", value: 3 }
  ];

function Add() {
    return (
        <div>
           <form method="post" target = "/forms">
                <div className="mb-3">
                    <label htmlFor="document_name" className="form-label">Formas nosaukums</label>
                    <input type="number" className="form-control" id="document_name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="field_seq" className="form-label">Secība</label>
                    <input type="number" className="form-control" id="field_seq"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="field_type" className="form-label">Lauka tips</label>
                    <Select id = "field_type" options={InputOptions} />
                </div>
                <div className="mb-3">
                    <label htmlFor="select_values" className="form-label">Secība</label>
                    <input type="number" className="form-control" id="select_values"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="field_name">Lauka nosaukums</label>
                    <input type="text" className="form-control" id="field_name"/>
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="is_mandatory">Obligāts</label>
                    <input type="checkbox" className="required" id="is_mandatory"/>
                </div>
                <div>
                <button className="btn btn-outline-primary me-2 mb-2" >+ Pievienot vel</button>
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-primary me-2">Saglabāt</button>
                </div>
            </form>
        </div>
    );
}

export default Add;

