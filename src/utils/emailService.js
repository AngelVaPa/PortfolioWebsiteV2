import emailjs from 'emailjs-com';

export const sendEmail = (formData, onSuccess, onError) => {
  emailjs.sendForm(
    'service_dv5g5qq', 
    'template_vmstjei', 
    formData,
    'myaoANU-bRqzoQKhC' // Reemplaza con tu User ID
  ).then((result) => {
    console.log(result.text);
    if (onSuccess) {
      onSuccess();
    }
  }).catch((error) => {
    console.log(error.text);
    if (onError) {
      onError(error);
    }
  });
};
