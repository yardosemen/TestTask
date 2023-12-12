import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
    const navigate = useNavigate();
    return (
    <div className="flex flex-col">
        <div className='w-full '>
            <p className="flex w-666.71 h-54 flex-col justify-center flex-shrink-0 text-blue-900 text-center font-Scandia text-base font-medium leading-5">Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir senden 
                Ihnen gerne kostenlose Informationen zu.
            </p>
        </div>
        <div className='bg-gray-200 p-6 max-w-md mx-auto  flex items-center space-x-4'>
              <Formik
      initialValues={{
        gender: '',
        name: '',
        phoneNumber: '',
        postalCode: '',
        city: '',
        street: '',
        houseNumber: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
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

        <Field name="name" type="text" placeholder="Name" className="w-full p-2 rounded-md" />
        <Field name="phoneNumber" type="text" placeholder="Telefonnummer" className="w-full p-2 rounded-md" />
        <Field name="postalCode" type="text" placeholder="Postleitzahl" className="w-full p-2 rounded-md" />
        <Field name="city" type="text" placeholder="Ort" className="w-full p-2 rounded-md" />
        <div className="flex space-x-2">
          <Field name="street" type="text" placeholder="Straße" className="w-full p-2 rounded-md" />
          <Field name="houseNumber" type="text" placeholder="Hausnummer" className="w-full p-2 rounded-md" />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-[#02ff83] text-white rounded-md hover:bg-blue-700">
          Ja, das ist mein Hausdach.
        </button>
      </Form>
    </Formik>
        </div> 
    <button 
        className="flex pt-5 flex-row text-[#5f5f68] text-center font-['Scandia'] text-sm font-medium justify-start"
        onClick={() => navigate('/step2')}
      >
        ← Zurück
      </button>
  </div>
);
}

export default Step3;
