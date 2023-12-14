import React from 'react';
import { Formik, Field, Form } from 'formik';
import { arrayToObject } from "../../utils";

export default ({ onCallback, items, title }) => {
  return (
    <div className="flex flex-col">
      <div className='w-full '>
        <p className="flex w-666.71 h-54 flex-col justify-center flex-shrink-0 text-blue-900 text-center font-Scandia text-base font-medium leading-5">{title}</p>
      </div>
      <div className='bg-gray-200 p-6 max-w-md mx-auto  flex items-center space-x-4'>
        <Formik
          initialValues={arrayToObject(items)}
          onSubmit={async (values) => {
            onCallback(true, values);
          }}
        >
          <Form className="space-y-4">
            <div id="my-radio-group">Anrede</div>
            <div role="group" aria-labelledby="my-radio-group" className="space-x-4">
              <label>
                <Field type="radio" name="gender" value="Herr" />
                Herr
              </label>
              <label>
                <Field type="radio" name="gender" value="Frau" />
                Frau
              </label>
            </div>
            {items.map(({ name, type, label }) => (
              <div key={name}>
                {label}<Field name={name} type={type} placeholder={label} className="w-full p-2 rounded-md" />
              </div>
            ))}
            <button type="submit" className="w-full py-2 px-4 bg-[#02ff83] text-white rounded-md hover:bg-blue-700">
              Ja, das ist mein Hausdach.
            </button>
          </Form>
        </Formik>
      </div>
      <button
        className="flex pt-5 flex-row text-[#5f5f68] text-center font-['Scandia'] text-sm font-medium justify-start"
        onClick={() => onCallback(false)}
      >
        ← Zurück
      </button>
    </div>
  );
};
