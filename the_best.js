// TO HANDLE DOWNLOAD

const downloadBtn  = document.getElementById('download-btn');

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './my-resume/Abbas-Simple Resume (1).pdf';

  link.click();

  try {
    link.click();
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please check file path and browser security settings.');
  }

});

const downloadCv = document.getElementById('my-cv');

downloadCv.addEventListener('click', () => {
  const downloadMyCv =document.createElement ('a');
  downloadMyCv.href = './my-resume/Abbas-Simple Resume (1).pdf';
  downloadMyCv.download = './my-resume/Abbas-Simple Resume (1).pdf';
  downloadMyCv.click();

  try {
    downloadMyCv.click();
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please check file path and browser security settings.');
  };
});


// TO HANDLE MESSAGE

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new formData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  fetch('/contact', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
  body:JSON.stringify({name, email, phone, message }),
})

.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.error(error));

});